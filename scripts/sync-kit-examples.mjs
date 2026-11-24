#!/usr/bin/env node
/**
 * Re-install @shadcnuikit examples by registry id.
 * Usage: node scripts/sync-kit-examples.mjs drawer1 button3
 * Pipe:  npm run test:kit-examples 2>&1 | node scripts/sync-kit-examples.mjs --stdin
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";

const root = process.cwd();

function parseCatalog() {
  const raw = fs.readFileSync(path.join(root, "lib/example-catalog.ts"), "utf8");
  const m = raw.match(
    /export const exampleCatalog: ExampleCatalogEntry\[\] = (\[[\s\S]*?\]);/,
  );
  if (!m) throw new Error("Could not parse example-catalog.ts");
  return JSON.parse(m[1]);
}

function targetPath(categoryId, variant) {
  if (variant.includes("/")) {
    const parts = variant.split("/");
    return `examples/components/${categoryId}/${parts.slice(0, -1).join("/")}`;
  }
  return `examples/components/${categoryId}`;
}

async function readStdinNames() {
  const names = [];
  const rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    const reg = line.match(/\(registry ([\w-]+)\)/);
    if (reg) names.push(reg[1]);
    const drift = line.match(/content drift(?: \(\S+\))?: [\w-]+\/([\w-/]+)/);
    if (drift) {
      const id = drift[1].includes("/")
        ? drift[1].split("/").pop()
        : drift[1];
      names.push(id);
    }
  }
  return names;
}

async function main() {
  const args = process.argv.slice(2);
  let names = args.filter((a) => a !== "--stdin");

  if (args.includes("--stdin")) {
    names.push(...(await readStdinNames()));
  }

  names = [...new Set(names)].filter(Boolean);

  if (names.length === 0) {
    console.log("No variant names. Pass registry ids or use --stdin.");
    process.exit(0);
  }

  const catalog = parseCatalog();
  const byId = new Map();
  for (const { id, variants } of catalog) {
    for (const variant of variants) {
      const regId = variant.includes("/")
        ? variant.split("/").pop()
        : variant;
      byId.set(regId, { categoryId: id, variant });
    }
  }

  let failed = 0;
  for (const name of names) {
    const entry = byId.get(name);
    if (!entry) {
      console.warn(`skip unknown catalog id: ${name}`);
      continue;
    }
    const installPath = targetPath(entry.categoryId, entry.variant);
    console.log(`→ npx shadcn add @shadcnuikit/${name} -y -p ${installPath}`);
    const r = spawnSync(
      "npx",
      ["shadcn@latest", "add", `@shadcnuikit/${name}`, "-y", "-p", installPath],
      { cwd: root, stdio: "inherit", env: process.env },
    );
    if (r.status !== 0) failed++;
  }

  if (failed) process.exit(1);
  console.log(`Done. Run: npm run generate:examples`);
}

main();