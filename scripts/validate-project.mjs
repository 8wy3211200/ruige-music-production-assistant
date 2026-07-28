#!/usr/bin/env node

import { createHash } from "node:crypto";
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  stat,
  symlink,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    else if (entry.name.endsWith(".md")) files.push(path);
  }
  return files;
}

async function validateManifest() {
  const manifest = await readJson(join(root, "manifest.json"));
  const knowledgeRoot = join(root, "knowledge");
  const disk = await markdownFiles(knowledgeRoot);
  const listed = new Map(manifest.files.map((item) => [item.path, item]));

  check(manifest.skill === "rg", "manifest.skill 必须是 rg");
  check(
    manifest.knowledgeFiles === manifest.files.length,
    "manifest.knowledgeFiles 与 files 数量不一致",
  );
  check(
    disk.length === manifest.files.length,
    `知识文件数量不一致：磁盘 ${disk.length}，manifest ${manifest.files.length}`,
  );

  for (const path of disk) {
    const name = relative(knowledgeRoot, path);
    const item = listed.get(name);
    if (!item) {
      failures.push(`manifest 缺少：${name}`);
      continue;
    }
    const content = await readFile(path);
    const digest = createHash("sha256").update(content).digest("hex");
    check(item.bytes === content.length, `文件大小不一致：${name}`);
    check(item.sha256 === digest, `文件哈希不一致：${name}`);
  }
}

async function validateMarkdownLinks() {
  const files = [
    join(root, "SKILL.md"),
    join(root, "README.md"),
    ...await markdownFiles(join(root, "references")),
  ];
  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const match of content.matchAll(/\[[^\]]*]\(([^)]+)\)/g)) {
      const target = match[1].split("#")[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      const destination = resolve(dirname(file), target);
      try {
        await stat(destination);
      } catch {
        failures.push(
          `Markdown 链接不存在：${relative(root, file)} -> ${target}`,
        );
      }
    }
  }
}

async function validateRegressions() {
  const suite = await readJson(join(root, "tests", "logic-regressions.json"));
  check(Array.isArray(suite.cases), "回归测试 cases 必须是数组");
  const ids = new Set();
  for (const item of suite.cases ?? []) {
    check(typeof item.id === "string" && item.id.length > 0, "回归案例缺少 id");
    check(!ids.has(item.id), `回归案例 id 重复：${item.id}`);
    ids.add(item.id);
    check(
      typeof item.prompt === "string"
      || typeof item.task === "string"
      || Array.isArray(item.turns),
      `回归案例缺少输入：${item.id}`,
    );
    check(
      Array.isArray(item.expect) && item.expect.length > 0,
      `回归案例缺少 expect：${item.id}`,
    );
    check(
      Array.isArray(item.reject) && item.reject.length > 0,
      `回归案例缺少 reject：${item.id}`,
    );
  }
}

function run(command, args, options = {}) {
  return spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    ...options,
  });
}

async function validateRuntime() {
  for (const file of [
    "bin/ruige-skill.mjs",
    "scripts/manage-career-archive.mjs",
    "scripts/manage-prompt-library.mjs",
    "scripts/validate-project.mjs",
  ]) {
    const result = run(process.execPath, ["--check", file]);
    check(result.status === 0, `语法检查失败：${file}\n${result.stderr}`);
  }

  const noHit = run("bash", [
    "scripts/search-knowledge.sh",
    "肯定不存在的检索词_RG_TEST_987654321",
    "3",
  ]);
  check(noHit.status === 0, "知识检索无命中时不应返回脚本错误");
  check(noHit.stdout.includes("未找到匹配内容"), "知识检索无命中缺少明确提示");

  const sandbox = await mkdtemp(join(tmpdir(), "ruige-skill-test-"));
  try {
    const env = { ...process.env, RUIGE_SKILL_HOME: sandbox };
    const codexSkills = join(sandbox, ".codex", "skills");
    await mkdir(codexSkills, { recursive: true });
    await symlink(root, join(codexSkills, "rg.backup-test"), "dir");
    const install = run(
      process.execPath,
      ["bin/ruige-skill.mjs", "install", "--agent", "codex"],
      { env },
    );
    check(install.status === 0, `安装沙箱失败：${install.stderr}`);
    check(
      install.stdout.includes("已移出 1 个"),
      "安装器没有移出可能被重复加载的旧 Skill 入口",
    );

    const statusResult = run(
      process.execPath,
      ["bin/ruige-skill.mjs", "status", "--agent", "codex"],
      { env },
    );
    check(statusResult.status === 0, `状态检查失败：${statusResult.stderr}`);
    check(statusResult.stdout.includes("正常，v"), "状态没有报告有效版本");
    check(statusResult.stdout.includes("codex: 已连接"), "状态没有验证正确桥接");

    const codexBridge = join(codexSkills, "rg");
    const wrongTarget = join(sandbox, "wrong-skill");
    await mkdir(wrongTarget, { recursive: true });
    await rm(codexBridge);
    await symlink(wrongTarget, codexBridge, "dir");
    const wrongStatus = run(
      process.execPath,
      ["bin/ruige-skill.mjs", "status", "--agent", "codex"],
      { env },
    );
    check(
      wrongStatus.stdout.includes("codex: 错误链接"),
      "状态检查没有识别指向错误位置的 Skill 链接",
    );

    const promptLibrary = join(sandbox, "prompt-library");
    const initLibrary = run(
      process.execPath,
      ["scripts/manage-prompt-library.mjs", "init", "--dir", promptLibrary],
    );
    check(initLibrary.status === 0, `提示词资料库初始化失败：${initLibrary.stderr}`);
    const addRevision = run(
      process.execPath,
      ["scripts/manage-prompt-library.mjs", "revision", "--dir", promptLibrary],
    );
    check(addRevision.status === 0, `提示词版本创建失败：${addRevision.stderr}`);
    const checkLibrary = run(
      process.execPath,
      ["scripts/manage-prompt-library.mjs", "check", "--dir", promptLibrary],
    );
    check(checkLibrary.status === 0, `提示词资料库检查失败：${checkLibrary.stderr}`);
    check(checkLibrary.stdout.includes("V001.md"), "提示词资料库没有保留第一版记录");
  } finally {
    await rm(sandbox, { recursive: true, force: true });
  }
}

await validateManifest();
await validateMarkdownLinks();
await validateRegressions();
await validateRuntime();

if (failures.length) {
  for (const failure of failures) console.error(`✗ ${failure}`);
  process.exitCode = 1;
} else {
  console.error("✓ 项目结构、知识清单、引用、回归定义和安装沙箱验证通过");
}
