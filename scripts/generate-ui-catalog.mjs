#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const uiDir = path.join(process.cwd(), "components/ui");
const demoDir = path.join(process.cwd(), "app/generator/ui-demos");
const loaderDir = path.join(process.cwd(), "lib/ui-preview-loaders");

/** Internal modules re-exported by other ui primitives — not standalone previews. */
const SKIP_UI_IDS = new Set(["code-block-highlight"]);

const ids = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .filter((id) => !SKIP_UI_IDS.has(id))
  .sort();

const catalog = ids.map((id) => ({
  id,
  label: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  importPath: `@/components/ui/${id}`,
}));

fs.mkdirSync(demoDir, { recursive: true });
fs.mkdirSync(loaderDir, { recursive: true });

for (const old of fs.readdirSync(loaderDir)) {
  if (old.endsWith(".ts")) fs.unlinkSync(path.join(loaderDir, old));
}

import { getUiDemoSource } from "./ui-demo-sources.mjs";

for (const { id, label } of catalog) {
  const demoPath = path.join(demoDir, `${id}.tsx`);
  fs.writeFileSync(demoPath, getUiDemoSource(id, label));

  const loaderPath = path.join(loaderDir, `${id}.ts`);
  fs.writeFileSync(
    loaderPath,
    [
      `// Generated — run: node scripts/generate-ui-catalog.mjs`,
      `import type { ComponentType } from "react";`,
      ``,
      `export const loader = () =>`,
      `  import("@/app/generator/ui-demos/${id}") as Promise<{`,
      `    default: ComponentType<Record<string, unknown>>;`,
      `  }>;`,
      ``,
    ].join("\n"),
  );
}

const catalogTs = [
  `// Generated — run: node scripts/generate-ui-catalog.mjs`,
  `export type UiCatalogEntry = {`,
  `  id: string;`,
  `  label: string;`,
  `  importPath: string;`,
  `};`,
  ``,
  `export const uiCatalog: UiCatalogEntry[] = ${JSON.stringify(catalog, null, 2)};`,
  ``,
].join("\n");

fs.writeFileSync(path.join(process.cwd(), "lib/ui-catalog.ts"), catalogTs);

const loadUiTs = `// Generated — run: node scripts/generate-ui-catalog.mjs
import type { ComponentType } from "react";

export async function loadUiPreview(
  id: string,
): Promise<{ default: ComponentType<Record<string, unknown>> }> {
  const mod = await import(\`@/lib/ui-preview-loaders/\${id}\`);
  return mod.loader();
}
`;

fs.writeFileSync(path.join(process.cwd(), "lib/load-ui-preview.ts"), loadUiTs);

console.log(`Wrote ui catalog (${ids.length} components)`);