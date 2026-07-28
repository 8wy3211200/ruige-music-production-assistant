#!/usr/bin/env node

import { access, appendFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
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

const libraryDir = resolve(requestedDir);
const skillDir = resolve(import.meta.dirname, "..");
if (libraryDir === skillDir || libraryDir.startsWith(`${skillDir}${sep}`)) {
  throw new Error("Prompt libraries must stay outside the Skill directory");
}

const goalPath = resolve(libraryDir, "目标.md");
const currentPath = resolve(libraryDir, "当前版本.md");
const recordsDir = resolve(libraryDir, "生成记录");

const goalTemplate = `# 目标

## 使用方式

## 当前核心目标

## 想保留的音乐特征

## 明确避免项

## 当前参考及真正参考的维度
`;

const currentTemplate = `# 当前版本

## 版本号

## 当前核心目标

## 本版提示词

## 建议起始参数

## 本版只改了什么

## 当前已经验证有效的部分

## 等待验证的问题
`;

const recordTemplate = (version) => `# ${version}

## 当前核心目标

## 本版提示词

## 参数设置

## 核心目标对齐检查

## 本版只改了什么

## 生成结果中的可见事实

## 用户认为符合的部分

## 用户认为偏离的部分

## 下一版只改什么
`;

const requiredHeadings = {
  "目标.md": [
    "## 使用方式",
    "## 当前核心目标",
    "## 想保留的音乐特征",
    "## 明确避免项",
    "## 当前参考及真正参考的维度",
  ],
  "当前版本.md": [
    "## 版本号",
    "## 当前核心目标",
    "## 本版提示词",
    "## 建议起始参数",
    "## 本版只改了什么",
    "## 当前已经验证有效的部分",
    "## 等待验证的问题",
  ],
};

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function writeIfMissing(path, content) {
  try {
    await writeFile(path, content, { encoding: "utf8", flag: "wx" });
    return "created";
  } catch (error) {
    if (error.code === "EEXIST") return "kept";
    throw error;
  }
}

async function inspectHeadings(path, headings) {
  if (!(await exists(path))) {
    return { exists: false, missingHeadings: headings };
  }
  const content = await readFile(path, "utf8");
  return {
    exists: true,
    missingHeadings: headings.filter((heading) => !content.includes(heading)),
  };
}

async function appendMissingHeadings(path, headings) {
  const inspection = await inspectHeadings(path, headings);
  if (!inspection.exists) return inspection;
  if (inspection.missingHeadings.length) {
    const addition = inspection.missingHeadings
      .map((heading) => `\n${heading}\n\n`)
      .join("");
    await appendFile(path, addition, "utf8");
  }
  return {
    exists: true,
    addedHeadings: inspection.missingHeadings,
  };
}

async function init() {
  await mkdir(recordsDir, { recursive: true });
  process.stdout.write(`${JSON.stringify({
    libraryDir,
    files: {
      "目标.md": await writeIfMissing(goalPath, goalTemplate),
      "当前版本.md": await writeIfMissing(currentPath, currentTemplate),
    },
    recordsDir: "生成记录",
  }, null, 2)}\n`);
}

async function nextVersion() {
  const records = (await exists(recordsDir))
    ? await readdir(recordsDir)
    : [];
  const numbers = records
    .map((name) => /^V(\d{3})\.md$/.exec(name))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  return `V${String((numbers.length ? Math.max(...numbers) : 0) + 1).padStart(3, "0")}`;
}

async function revision() {
  if (!(await exists(goalPath)) || !(await exists(currentPath))) {
    throw new Error("Prompt library is missing 目标.md or 当前版本.md; run init first with user permission");
  }
  await mkdir(recordsDir, { recursive: true });
  const version = args.get("version") ?? await nextVersion();
  if (!/^V\d{3}$/.test(version)) {
    throw new Error("--version must use V001 format");
  }
  const path = resolve(recordsDir, `${version}.md`);
  await writeFile(path, recordTemplate(version), { encoding: "utf8", flag: "wx" });
  process.stdout.write(`${JSON.stringify({
    libraryDir,
    version,
    record: `生成记录/${version}.md`,
  }, null, 2)}\n`);
}

async function check() {
  const records = (await exists(recordsDir))
    ? (await readdir(recordsDir)).filter((name) => /^V\d{3}\.md$/.test(name)).sort()
    : [];
  const goal = await inspectHeadings(goalPath, requiredHeadings["目标.md"]);
  const current = await inspectHeadings(currentPath, requiredHeadings["当前版本.md"]);
  const recordChecks = {};
  for (const record of records) {
    recordChecks[record] = await inspectHeadings(resolve(recordsDir, record), [
      "## 当前核心目标",
      "## 本版提示词",
      "## 参数设置",
      "## 核心目标对齐检查",
      "## 本版只改了什么",
      "## 生成结果中的可见事实",
      "## 用户认为符合的部分",
      "## 用户认为偏离的部分",
      "## 下一版只改什么",
    ]);
  }
  const valid = goal.exists
    && current.exists
    && goal.missingHeadings.length === 0
    && current.missingHeadings.length === 0
    && Object.values(recordChecks).every((item) => item.missingHeadings.length === 0);
  process.stdout.write(`${JSON.stringify({
    libraryDir,
    valid,
    goal,
    current,
    records,
    recordChecks,
  }, null, 2)}\n`);
  if (!valid) process.exitCode = 1;
}

async function upgrade() {
  if (!(await exists(goalPath)) || !(await exists(currentPath))) {
    throw new Error("Prompt library is missing 目标.md or 当前版本.md; run init first with user permission");
  }
  const records = (await exists(recordsDir))
    ? (await readdir(recordsDir)).filter((name) => /^V\d{3}\.md$/.test(name)).sort()
    : [];
  const upgraded = {
    "目标.md": await appendMissingHeadings(goalPath, requiredHeadings["目标.md"]),
    "当前版本.md": await appendMissingHeadings(currentPath, requiredHeadings["当前版本.md"]),
    records: {},
  };
  for (const record of records) {
    upgraded.records[record] = await appendMissingHeadings(resolve(recordsDir, record), [
      "## 当前核心目标",
      "## 本版提示词",
      "## 参数设置",
      "## 核心目标对齐检查",
      "## 本版只改了什么",
      "## 生成结果中的可见事实",
      "## 用户认为符合的部分",
      "## 用户认为偏离的部分",
      "## 下一版只改什么",
    ]);
  }
  process.stdout.write(`${JSON.stringify({ libraryDir, upgraded }, null, 2)}\n`);
}

if (command === "init") await init();
else if (command === "revision") await revision();
else if (command === "check") await check();
else if (command === "upgrade") await upgrade();
else throw new Error("Usage: manage-prompt-library.mjs <init|revision|check|upgrade> --dir /absolute/path [--version V001]");
