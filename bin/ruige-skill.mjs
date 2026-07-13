#!/usr/bin/env node

import { constants } from "node:fs";
import {
  access,
  cp,
  lstat,
  mkdir,
  readlink,
  realpath,
  rename,
  symlink,
} from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_NAME = "rg";
const SUPPORTED_AGENTS = {
  codex: [".codex", "skills", SKILL_NAME],
  "claude-code": [".claude", "skills", SKILL_NAME],
  workbuddy: [".workbuddy", "skills", SKILL_NAME],
};

function printHelp() {
  console.log(`瑞哥编曲混音助教安装器

用法：
  ruige-skill                 安装到 Codex、Claude Code、WorkBuddy
  ruige-skill install         同上
  ruige-skill update          更新真源并保持三端桥接
  ruige-skill status          查看安装状态

选项：
  --agent <名称>              只处理指定宿主，可重复使用
  --force                     备份冲突目录后重新桥接
  --help                      显示帮助

支持的宿主：codex、claude-code、workbuddy`);
}

function parseArgs(argv) {
  const options = {
    command: "install",
    agents: [],
    force: false,
  };

  const args = [...argv];
  if (args[0] && !args[0].startsWith("-")) {
    options.command = args.shift();
  }

  while (args.length > 0) {
    const arg = args.shift();
    if (arg === "--help" || arg === "-h") {
      options.command = "help";
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--agent" || arg === "-a") {
      const value = args.shift();
      if (!value) throw new Error(`${arg} 后面需要宿主名称。`);
      options.agents.push(...value.split(",").filter(Boolean));
    } else {
      throw new Error(`无法识别的参数：${arg}`);
    }
  }

  const agents = options.agents.length
    ? [...new Set(options.agents)]
    : Object.keys(SUPPORTED_AGENTS);
  const invalid = agents.filter((agent) => !(agent in SUPPORTED_AGENTS));
  if (invalid.length) {
    throw new Error(`不支持的宿主：${invalid.join(", ")}`);
  }

  return { ...options, agents };
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function pathInfo(path) {
  try {
    const stat = await lstat(path);
    if (stat.isSymbolicLink()) {
      return { kind: "link", target: await readlink(path) };
    }
    if (stat.isDirectory()) return { kind: "directory" };
    return { kind: "file" };
  } catch (error) {
    if (error.code === "ENOENT") return { kind: "missing" };
    throw error;
  }
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

async function backupPath(path) {
  const backup = `${path}.backup-${timestamp()}`;
  await rename(path, backup);
  return backup;
}

async function copySkillToCanonical(canonical, force) {
  const existing = await pathInfo(canonical);
  if (existing.kind !== "missing" && !force) {
    throw new Error(
      `真源目录已存在：${canonical}\n如需更新，请运行 ruige-skill update；如需替换，请加 --force。`,
    );
  }

  await mkdir(dirname(canonical), { recursive: true });
  const stage = `${canonical}.stage-${process.pid}-${Date.now()}`;
  await cp(PACKAGE_ROOT, stage, {
    recursive: true,
    filter(source) {
      const name = basename(source);
      return name !== ".git" && name !== "node_modules" && name !== ".DS_Store";
    },
  });

  let backup = null;
  if (existing.kind !== "missing") {
    backup = await backupPath(canonical);
  }

  try {
    await rename(stage, canonical);
  } catch (error) {
    if (backup && !(await exists(canonical))) {
      await rename(backup, canonical);
    }
    throw error;
  }

  return backup;
}

async function isBridgeTo(target, canonical) {
  const existing = await pathInfo(target);
  if (existing.kind !== "link") return false;

  const resolvedTarget = resolve(dirname(target), existing.target);
  if (resolvedTarget === canonical) return true;
  if (!(await exists(resolvedTarget)) || !(await exists(canonical))) return false;
  return (await realpath(resolvedTarget)) === (await realpath(canonical));
}

async function preflightBridges(paths, canonical, force) {
  if (force) return;

  for (const { target } of paths) {
    const existing = await pathInfo(target);
    if (existing.kind === "missing" || (await isBridgeTo(target, canonical))) {
      continue;
    }
    throw new Error(
      `安装位置已被占用：${target}\n为避免产生半完成安装，尚未写入任何内容。确认后可加 --force，旧内容会先备份。`,
    );
  }
}

async function ensureBridge(target, canonical, force) {
  const existing = await pathInfo(target);
  if (await isBridgeTo(target, canonical)) {
    return { status: "kept", backup: null };
  }

  if (existing.kind !== "missing" && !force) {
    throw new Error(
      `安装位置已被占用：${target}\n为避免覆盖现有 Skill，安装已停止。确认后可加 --force，旧内容会先备份。`,
    );
  }

  let backup = null;
  if (existing.kind !== "missing") {
    backup = await backupPath(target);
  }

  await mkdir(dirname(target), { recursive: true });
  await symlink(canonical, target, process.platform === "win32" ? "junction" : "dir");
  return { status: "linked", backup };
}

function homeDirectory() {
  return resolve(process.env.RUIGE_SKILL_HOME || homedir());
}

function installPaths(home, agents) {
  return agents.map((agent) => ({
    agent,
    target: join(home, ...SUPPORTED_AGENTS[agent]),
  }));
}

async function showStatus(home, agents) {
  const canonical = join(home, ".ruige-skills", SKILL_NAME);
  console.log(`真源：${canonical} (${(await exists(join(canonical, "SKILL.md"))) ? "正常" : "未安装"})`);
  for (const { agent, target } of installPaths(home, agents)) {
    const info = await pathInfo(target);
    const detail = info.kind === "link" ? ` -> ${info.target}` : "";
    console.log(`${agent}: ${info.kind}${detail}`);
  }
}

async function installOrUpdate(options) {
  const home = homeDirectory();
  const canonical = join(home, ".ruige-skills", SKILL_NAME);
  const paths = installPaths(home, options.agents);
  const isUpdate = options.command === "update";
  const canonicalExists = await exists(canonical);

  if (isUpdate && !canonicalExists) {
    console.log("尚未安装，将执行首次安装。\n");
  }

  await preflightBridges(paths, canonical, options.force);
  const backup = await copySkillToCanonical(
    canonical,
    options.force || isUpdate,
  );
  console.log(`✓ Skill 真源已${isUpdate && canonicalExists ? "更新" : "安装"}：${canonical}`);
  if (backup) console.log(`  旧真源备份：${backup}`);

  let failed = false;
  for (const { agent, target } of paths) {
    try {
      const result = await ensureBridge(target, canonical, options.force);
      const verb = result.status === "kept" ? "桥接已存在" : "已桥接";
      console.log(`✓ ${agent}: ${verb} ${target}`);
      if (result.backup) console.log(`  旧位置备份：${result.backup}`);
    } catch (error) {
      failed = true;
      console.error(`✗ ${agent}: ${error.message}`);
    }
  }

  if (failed) {
    process.exitCode = 1;
    return;
  }

  console.log("\n安装完成。重启对应 Agent，再用 /rg、/瑞哥 或直接提出音乐制作问题。");
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.command === "help") {
    printHelp();
    return;
  }
  if (options.command === "status") {
    await showStatus(homeDirectory(), options.agents);
    return;
  }
  if (!new Set(["install", "update"]).has(options.command)) {
    throw new Error(`不支持的命令：${options.command}`);
  }
  await installOrUpdate(options);
}

main().catch((error) => {
  console.error(`安装失败：${error.message}`);
  process.exitCode = 1;
});
