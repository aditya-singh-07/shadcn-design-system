#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const runner = path.join(root, "scripts/verify-preview-runner.ts");
const render = process.argv.includes("--render");

const result = spawnSync(
  "npx",
  ["tsx", "--tsconfig", "tsconfig.json", runner, ...(render ? ["--render"] : [])],
  { cwd: root, stdio: "inherit", env: process.env },
);

process.exit(result.status === 0 ? 0 : result.status ?? 1);