/**
 * Preview verification: import-only (default) or SSR render (--render).
 */
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = process.cwd();
const renderMode = process.argv.includes("--render");

const SKIP_UI = new Set(["code-block-highlight"]);
const UI_BROWSER_ONLY = new Set(["calendar", "collapsible", "slider"]);

const IGNORE_SUBSTRINGS = [
  "MenuGroupContext",
  "useContext",
  "useState",
  "useEffect",
  "useLayoutEffect",
  "useRef",
  "window is not defined",
  "document is not defined",
  "localStorage",
  "ResizeObserver",
  "matchMedia",
  "Cannot read properties of null",
  'hostname "images.unsplash.com" is not configured',
  "does not recognize the `asChild` prop",
];

const uiIds = fs
  .readdirSync(path.join(root, "components/ui"))
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .filter((id) => !SKIP_UI.has(id));

const catalogRaw = fs.readFileSync(
  path.join(root, "lib/example-catalog.ts"),
  "utf8",
);
const m = catalogRaw.match(
  /export const exampleCatalog: ExampleCatalogEntry\[\] = (\[[\s\S]*?\]);/,
);
if (!m) throw new Error("Could not parse example-catalog.ts");
const exampleCatalog = JSON.parse(m[1]) as {
  id: string;
  variants: string[];
}[];

type Fail = { kind: string; id: string; msg: string };
const failures: Fail[] = [];
const hardFails: Fail[] = [];
const softFails: Fail[] = [];

function pushFailure(err: unknown, kind: string, id: string) {
  const msg = err instanceof Error ? err.message : String(err);
  const entry = { kind, id, msg };
  if (renderMode) {
    if (IGNORE_SUBSTRINGS.some((s) => msg.includes(s))) {
      softFails.push(entry);
    } else {
      hardFails.push(entry);
    }
    return;
  }
  failures.push(entry);
}

async function checkUi(id: string) {
  if (UI_BROWSER_ONLY.has(id)) {
    const file = path.join(root, "app/generator/ui-demos", `${id}.tsx`);
    if (!fs.existsSync(file)) throw new Error("demo file missing");
    return;
  }
  const mod = await import(`@/app/generator/ui-demos/${id}.tsx`);
  if (!mod.default) throw new Error("missing default export");
  renderToStaticMarkup(React.createElement(mod.default));
}

async function checkExample(categoryId: string, variant: string) {
  const mod = await import(`@/lib/example-loaders/${categoryId}.ts`);
  const loader = mod.loaders[variant] as
    | (() => Promise<{ default: React.ComponentType }>)
    | undefined;
  if (!loader) throw new Error(`loader not found for ${variant}`);
  const ex = await loader();
  if (!ex.default) throw new Error("missing default export");
  if (renderMode) {
    renderToStaticMarkup(React.createElement(ex.default));
  }
}

async function main() {
  for (const id of uiIds) {
    try {
      await checkUi(id);
      if (!renderMode) console.log(`ui ok: ${id}`);
    } catch (err) {
      pushFailure(err, "ui", id);
      if (!renderMode) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`ui fail: ${id} — ${msg}`);
      }
    }
  }

  for (const { id, variants } of exampleCatalog) {
    for (const variant of variants) {
      const key = `${id}/${variant}`;
      try {
        await checkExample(id, variant);
        if (!renderMode) console.log(`example ok: ${key}`);
      } catch (err) {
        pushFailure(err, "example", key);
        if (!renderMode) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error(`example fail: ${key} — ${msg}`);
        }
      }
    }
  }

  const exampleCount = exampleCatalog.reduce((n, c) => n + c.variants.length, 0);

  if (renderMode) {
    const report = { hardFails, softFails };
    const outPath = path.join(root, "scripts/.preview-render-report.json");
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
    console.log(
      `SSR render report: ${hardFails.length} hard, ${softFails.length} soft (ignored)`,
    );
    console.log(`Full list: ${outPath}`);

    if (hardFails.length > 0) {
      console.error("\nHard failures (likely broken in browser too):\n");
      for (const f of hardFails) {
        console.error(`- [${f.kind}] ${f.id}: ${f.msg.split("\n")[0]}`);
      }
      process.exit(1);
    }
    console.log(
      `\nNo hard SSR failures (${uiIds.length} ui, ${exampleCount} examples).`,
    );
    return;
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} preview load failure(s)\n`);
    for (const f of failures.slice(0, 80)) {
      console.error(`- [${f.kind}] ${f.id}: ${f.msg.split("\n")[0]}`);
    }
    if (failures.length > 80) {
      console.error(`... and ${failures.length - 80} more`);
    }
    process.exit(1);
  }

  console.log(
    `\nAll previews loaded (${uiIds.length} ui, ${exampleCount} examples).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});