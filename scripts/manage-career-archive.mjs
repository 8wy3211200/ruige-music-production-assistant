#!/usr/bin/env node

import { access, mkdir, readdir, writeFile } from "node:fs/promises";
import { isAbsolute, resolve, sep } from "node:path";

const command = process.argv[2];
const args = new Map();
for (let index = 3; index < process.argv.length; index += 2) {
  const key = process.argv[index];
  const value = process.argv[index + 1];
  if (!key?.startsWith("--") || value === undefined) {
    throw new Error(`Invalid argument near: ${key ?? "(missing)"}`);
  }
  args.set(key.slice(2), value);
}

const requestedDir = args.get("dir");
if (!requestedDir || !isAbsolute(requestedDir)) {
  throw new Error("--dir must be an absolute path explicitly selected by the user");
}

const archiveDir = resolve(requestedDir);
const skillDir = resolve(import.meta.dirname, "..");
if (archiveDir === skillDir || archiveDir.startsWith(`${skillDir}${sep}`)) {
  throw new Error("Career archives must stay outside the Skill directory");
}

const profilePath = resolve(archiveDir, "职业底图.md");
const currentPath = resolve(archiveDir, "当前路径.md");
const reviewsDir = resolve(archiveDir, "阶段复盘");

const profileTemplate = `# 音乐职业底图

## 长期梦想

## 当前阶段目标

## 已确认事实与证据

## 待验证假设

## 现实约束

## 瑞哥视角的当前判断

## 最近更新时间
`;

const currentTemplate = `# 当前路径

## 当前主要矛盾

## 目标成立还缺的条件

## 当前变现路径假设

## 本阶段验证动作

## 不同结果分别意味着什么

## 下次复盘触发条件
`;

const reviewTemplate = (date) => `# 阶段复盘 ${date}

## 上次准备验证什么

## 实际发生了什么

## 新增证据

## 哪些假设被支持或被削弱

## 路径如何调整

## 下一步
`;

async function writeIfMissing(path, content) {
  try {
    await writeFile(path, content, { encoding: "utf8", flag: "wx" });
    return "created";
  } catch (error) {
    if (error.code === "EEXIST") return "kept";
    throw error;
  }
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function init() {
  await mkdir(reviewsDir, { recursive: true });
  const result = {
    archiveDir,
    files: {
      "职业底图.md": await writeIfMissing(profilePath, profileTemplate),
      "当前路径.md": await writeIfMissing(currentPath, currentTemplate)
    },
    reviewsDir: "阶段复盘"
  };
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}

async function snapshot() {
  if (!(await exists(profilePath)) || !(await exists(currentPath))) {
    throw new Error("Archive is missing 职业底图.md or 当前路径.md; run init first with user permission");
  }
  await mkdir(reviewsDir, { recursive: true });
  const date = args.get("date") ?? new Date().toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("--date must use YYYY-MM-DD");
  let name = `${date}.md`;
  let counter = 2;
  while (await exists(resolve(reviewsDir, name))) {
    name = `${date}-${counter}.md`;
    counter += 1;
  }
  const path = resolve(reviewsDir, name);
  await writeFile(path, reviewTemplate(date), { encoding: "utf8", flag: "wx" });
  process.stdout.write(`${JSON.stringify({ archiveDir, snapshot: `阶段复盘/${name}` }, null, 2)}\n`);
}

async function check() {
  const reviews = (await exists(reviewsDir))
    ? (await readdir(reviewsDir)).filter((name) => name.endsWith(".md")).sort()
    : [];
  process.stdout.write(`${JSON.stringify({
    archiveDir,
    profile: await exists(profilePath),
    current: await exists(currentPath),
    reviews
  }, null, 2)}\n`);
}

if (command === "init") await init();
else if (command === "snapshot") await snapshot();
else if (command === "check") await check();
else throw new Error("Usage: manage-career-archive.mjs <init|snapshot|check> --dir /absolute/path [--date YYYY-MM-DD]");
