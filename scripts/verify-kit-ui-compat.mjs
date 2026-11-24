#!/usr/bin/env node
/**
 * Typecheck kit examples + generator demos against components/ui (Base UI).
 * Exit 0 when no errors under examples/ or app/generator/.
 */
import { spawnSync } from "node:child_process";

const result = spawnSync("npx", ["tsc", "--noEmit"], {
  encoding: "utf8",
  cwd: process.cwd(),
});

const lines = (result.stdout + result.stderr)
  .split("\n")
  .filter((l) => l.includes("error TS"));

const kitLines = lines.filter(
  (l) =>
    l.includes("examples/components/") ||
    l.includes("app/generator/ui-demos/"),
);

if (kitLines.length === 0) {
  console.log(
    `✓ Kit UI compat: no TS errors in examples/ or generator ui-demos (${lines.length} other project error(s) ignored).`,
  );
  process.exit(0);
}

console.error(`✗ ${kitLines.length} kit-related TS error(s):\n`);
for (const line of kitLines) {
  console.error(line);
}
process.exit(1);