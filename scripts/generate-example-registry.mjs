#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "examples/components");
const loaderDir = path.join(process.cwd(), "lib/example-loaders");

const categories = fs
  .readdirSync(root)
  .filter((n) => fs.statSync(path.join(root, n)).isDirectory())
  .sort();

const catalog = categories.map((id) => {
  const dir = path.join(root, id);
  const variants = [];

  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name.endsWith(".tsx") && fs.statSync(full).isFile()) {
      variants.push(name.replace(/\.tsx$/, ""));
      continue;
    }
    if (!fs.statSync(full).isDirectory()) continue;

    const mainTsx = fs
      .readdirSync(full)
      .find((f) => f.endsWith(".tsx") && f !== "icons.tsx");
    if (mainTsx) {
      variants.push(`${name}/${mainTsx.replace(/\.tsx$/, "")}`);
    }
  }

  variants.sort();
  return {
    id,
    label: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    variants,
  };
});

const catalogTs = [
  `// Generated — run: node scripts/generate-example-registry.mjs`,
  `export type ExampleCatalogEntry = {`,
  `  id: string;`,
  `  label: string;`,
  `  variants: string[];`,
  `};`,
  ``,
  `export const exampleCatalog: ExampleCatalogEntry[] = ${JSON.stringify(catalog, null, 2)};`,
  ``,
].join("\n");

fs.writeFileSync(
  path.join(process.cwd(), "lib/example-catalog.ts"),
  catalogTs,
);

fs.mkdirSync(loaderDir, { recursive: true });
for (const old of fs.readdirSync(loaderDir)) {
  if (old.endsWith(".ts")) fs.unlinkSync(path.join(loaderDir, old));
}

for (const { id, variants } of catalog) {
  const lines = [
    `// Generated — run: node scripts/generate-example-registry.mjs`,
    `import type { ComponentType } from "react";`,
    ``,
    `type Loader = () => Promise<{ default: ComponentType }>;`,
    ``,
    `export const loaders: Record<string, Loader> = {`,
  ];
  for (const variant of variants) {
    const importPath = `@/examples/components/${id}/${variant}`;
    lines.push(
      `  ${JSON.stringify(variant)}: () => import(${JSON.stringify(importPath)}) as Promise<{ default: ComponentType }>,`,
    );
  }
  lines.push(`};`, ``);
  fs.writeFileSync(path.join(loaderDir, `${id}.ts`), lines.join("\n"));
}

const loadExampleTs = `// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

export async function loadExample(
  categoryId: string,
  variant: string,
): Promise<{ default: ComponentType<Record<string, unknown>> }> {
  const mod = await import(\`@/lib/example-loaders/\${categoryId}\`);
  const loader = mod.loaders[variant];
  if (!loader) {
    throw new Error(\`Example not found: \${categoryId}/\${variant}\`);
  }
  return loader();
}
`;

fs.writeFileSync(path.join(process.cwd(), "lib/load-example.ts"), loadExampleTs);

if (fs.existsSync(path.join(process.cwd(), "lib/example-registry.ts"))) {
  fs.unlinkSync(path.join(process.cwd(), "lib/example-registry.ts"));
}

console.log(
  `Wrote lib/example-catalog.ts + lib/load-example.ts + ${catalog.length} loader modules`,
);