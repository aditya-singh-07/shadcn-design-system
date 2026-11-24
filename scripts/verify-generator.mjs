#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
let failed = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`✗ ${message}`);
    failed++;
  } else {
    console.log(`✓ ${message}`);
  }
}

const uiDir = path.join(root, "components/ui");
const demoDir = path.join(root, "app/generator/ui-demos");
const uiLoaderDir = path.join(root, "lib/ui-preview-loaders");
const exampleLoaderDir = path.join(root, "lib/example-loaders");

/** Keep in sync with scripts/generate-ui-catalog.mjs */
const SKIP_UI_IDS = new Set(["code-block-highlight"]);

const uiIds = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .filter((id) => !SKIP_UI_IDS.has(id))
  .sort();

for (const id of uiIds) {
  assert(
    fs.existsSync(path.join(demoDir, `${id}.tsx`)),
    `ui demo exists: ${id}`,
  );
  assert(
    fs.existsSync(path.join(uiLoaderDir, `${id}.ts`)),
    `ui loader exists: ${id}`,
  );
  const demo = fs.readFileSync(path.join(demoDir, `${id}.tsx`), "utf8");
  assert(
    demo.includes(`@/components/ui/${id}`),
    `ui demo imports primitive: ${id}`,
  );
}

const catalogRaw = fs.readFileSync(
  path.join(root, "lib/example-catalog.ts"),
  "utf8",
);
const catalogMatch = catalogRaw.match(
  /export const exampleCatalog: ExampleCatalogEntry\[\] = (\[[\s\S]*?\]);/,
);
if (!catalogMatch) {
  console.error("✗ could not parse example-catalog.ts");
  process.exit(1);
}
const exampleCatalog = JSON.parse(catalogMatch[1]);

for (const { id, variants } of exampleCatalog) {
  assert(
    fs.existsSync(path.join(exampleLoaderDir, `${id}.ts`)),
    `example loader exists: ${id}`,
  );
  for (const variant of variants) {
    const parts = variant.split("/");
    const file =
      parts.length === 1
        ? path.join(root, "examples/components", id, `${variant}.tsx`)
        : path.join(root, "examples/components", id, ...parts) + ".tsx";
    assert(fs.existsSync(file), `example file exists: ${id}/${variant}`);
  }
}

assert(
  fs.existsSync(path.join(root, "lib/load-ui-preview.ts")),
  "load-ui-preview.ts present",
);
assert(
  fs.existsSync(path.join(root, "lib/load-example.ts")),
  "load-example.ts present",
);

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}

console.log(`\nAll generator checks passed (${uiIds.length} ui, ${exampleCatalog.length} example groups).`);