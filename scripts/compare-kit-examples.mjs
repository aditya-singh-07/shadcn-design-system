#!/usr/bin/env node
/**
 * Compare local examples/components/* with @shadcnuikit registry JSON.
 * Requires REGISTRY_TOKEN in .env (same as components.json).
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const examplesRoot = path.join(root, "examples/components");

function loadEnvToken() {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) return process.env.REGISTRY_TOKEN;
  const line = fs
    .readFileSync(envPath, "utf8")
    .split("\n")
    .find((l) => l.startsWith("REGISTRY_TOKEN="));
  if (!line) return process.env.REGISTRY_TOKEN;
  return line.slice("REGISTRY_TOKEN=".length).trim().replace(/^["']|["']$/g, "");
}

function parseCatalog() {
  const raw = fs.readFileSync(path.join(root, "lib/example-catalog.ts"), "utf8");
  const m = raw.match(
    /export const exampleCatalog: ExampleCatalogEntry\[\] = (\[[\s\S]*?\]);/,
  );
  if (!m) throw new Error("Could not parse lib/example-catalog.ts");
  return JSON.parse(m[1]);
}

function normalizeSource(source) {
  return source.replace(/\r\n/g, "\n").trim();
}

function md5(source) {
  return crypto.createHash("md5").update(source).digest("hex");
}

function registryId(variant) {
  if (variant.includes("/")) {
    return variant.split("/").pop();
  }
  return variant;
}

function localFiles(categoryId, variant) {
  if (variant.includes("/")) {
    const parts = variant.split("/");
    if (parts.length === 1) return [];
    const dir = path.join(examplesRoot, categoryId, ...parts.slice(0, -1));
    const main = path.join(dir, `${parts[parts.length - 1]}.tsx`);
    if (fs.existsSync(main)) {
      const extra = fs.existsSync(dir)
        ? fs
            .readdirSync(dir)
            .filter(
              (f) =>
                f.endsWith(".tsx") &&
                f !== `${parts[parts.length - 1]}.tsx` &&
                f !== "icons.tsx",
            )
            .map((f) => path.join(dir, f))
        : [];
      return [main, ...extra];
    }
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => path.join(dir, f));
  }
  const file = path.join(examplesRoot, categoryId, `${variant}.tsx`);
  return fs.existsSync(file) ? [file] : [];
}

async function fetchRegistry(name, token) {
  const res = await fetch(`https://shadcnuikit.com/r/${name}.json`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) {
    return { ok: false, status: res.status, name };
  }
  const json = await res.json();
  const files = (json.files ?? [])
    .filter((f) => f.content && f.path?.endsWith(".tsx"))
    .map((f) => ({
      basename: path.basename(f.path),
      content: normalizeSource(f.content),
      md5: md5(normalizeSource(f.content)),
    }));
  return {
    ok: true,
    name,
    deps: json.registryDependencies ?? [],
    files,
  };
}

async function pool(items, limit, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

const args = process.argv.slice(2);
const sampleOnly = args.includes("--sample");
const concurrency = Number(process.env.KIT_COMPARE_CONCURRENCY ?? 16);
const token = loadEnvToken();

/** Registry uses radix-ui triggers; Base UI needs AccordionTrigger — see patch-kit-base-ui.mjs */
const REGISTRY_COMPARE_SKIP = new Set([
  "accordion2",
  "accordion4",
  "accordion6",
  "accordion7",
]);

const catalog = parseCatalog();
const jobs = [];
for (const { id, variants } of catalog) {
  for (const variant of variants) {
    jobs.push({ categoryId: id, variant });
  }
}

const toRun = sampleOnly ? jobs.slice(0, 25) : jobs;

console.log(
  `Comparing ${toRun.length} variant(s) with shadcnuikit.com/r/*.json …`,
);

const fetched = await pool(toRun, concurrency, async (job) => {
  const id = registryId(job.variant);
  if (REGISTRY_COMPARE_SKIP.has(id)) {
    return { ...job, registryId: id, reg: { ok: true, skipped: true } };
  }
  const reg = await fetchRegistry(id, token);
  return { ...job, registryId: id, reg };
});

let drift = 0;
let missingRegistry = 0;
let missingLocal = 0;
let matched = 0;

let skippedCompat = 0;

for (const row of fetched) {
  if (row.reg.skipped) {
    skippedCompat++;
    matched++;
    continue;
  }
  const locals = localFiles(row.categoryId, row.variant);
  if (locals.length === 0) {
    console.error(`✗ missing local: ${row.categoryId}/${row.variant}`);
    missingLocal++;
    continue;
  }
  if (!row.reg.ok) {
    console.error(
      `✗ registry HTTP ${row.reg.status}: ${row.registryId} (${row.categoryId}/${row.variant})`,
    );
    missingRegistry++;
    continue;
  }

  const regByBase = new Map(row.reg.files.map((f) => [f.basename, f]));

  if (row.reg.files.length === 1 && locals.length === 1) {
    const localContent = normalizeSource(fs.readFileSync(locals[0], "utf8"));
    const regContent = row.reg.files[0].content;
    if (localContent === regContent) {
      matched++;
    } else if (md5(localContent) === row.reg.files[0].md5) {
      matched++;
    } else {
      console.error(
        `✗ content drift: ${row.categoryId}/${row.variant} (registry ${row.registryId})`,
      );
      drift++;
    }
    continue;
  }

  let variantOk = true;
  for (const localPath of locals) {
    const base = path.basename(localPath);
    const regFile = regByBase.get(base);
    if (!regFile) {
      console.error(
        `✗ registry missing file ${base}: ${row.categoryId}/${row.variant}`,
      );
      variantOk = false;
      continue;
    }
    const localContent = normalizeSource(fs.readFileSync(localPath, "utf8"));
    if (localContent !== regFile.content && md5(localContent) !== regFile.md5) {
      console.error(
        `✗ content drift (${base}): ${row.categoryId}/${row.variant}`,
      );
      variantOk = false;
    }
  }
  if (variantOk) matched++;
  else drift++;
}

console.log(`
Summary:
  matched registry source: ${matched}
  content drift:           ${drift}
  base-ui patches (skip):  ${skippedCompat}
  missing registry entry:  ${missingRegistry}
  missing local file:      ${missingLocal}
  total checked:           ${toRun.length}
`);

if (drift > 0 || missingRegistry > 0 || missingLocal > 0) {
  process.exit(1);
}