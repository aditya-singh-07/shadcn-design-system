#!/usr/bin/env node
/**
 * Download @shadcnuikit registry JSON and write examples/components/* to match.
 * Usage:
 *   node scripts/resync-kit-from-registry.mjs              # only drifted vs registry
 *   node scripts/resync-kit-from-registry.mjs --all        # every catalog variant
 *   node scripts/resync-kit-from-registry.mjs accordion1 accordion2
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

function installDir(categoryId, variant) {
  if (variant.includes("/")) {
    const parts = variant.split("/");
    return path.join(examplesRoot, categoryId, ...parts.slice(0, -1));
  }
  return path.join(examplesRoot, categoryId);
}

async function fetchRegistry(name, token) {
  const res = await fetch(`https://shadcnuikit.com/r/${name}.json`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) return { ok: false, status: res.status, name };
  const json = await res.json();
  return { ok: true, name, json };
}

function localMatchesRegistry(categoryId, variant, regFiles) {
  const dir = installDir(categoryId, variant);
  for (const f of regFiles) {
    const base = path.basename(f.target || f.path);
    const localPath = path.join(dir, base);
    if (!fs.existsSync(localPath)) return false;
    const local = normalizeSource(fs.readFileSync(localPath, "utf8"));
    const remote = normalizeSource(f.content);
    if (local !== remote && md5(local) !== md5(remote)) return false;
  }
  return true;
}

function writeKitUiFiles(json) {
  let n = 0;
  for (const f of json.files ?? []) {
    if (!f.content || !String(f.target || "").startsWith("components/ui/")) {
      continue;
    }
    const dest = path.join(root, f.target);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, `${normalizeSource(f.content)}\n`);
    n++;
  }
  return n;
}

async function writeVariant(categoryId, variant, json) {
  writeKitUiFiles(json);
  const dir = installDir(categoryId, variant);
  fs.mkdirSync(dir, { recursive: true });
  const files = (json.files ?? []).filter(
    (f) =>
      f.content &&
      f.path?.includes("contents/components") &&
      !String(f.target || "").includes("components/ui/"),
  );
  for (const f of files) {
    const base = path.basename(f.target || f.path);
    const dest = path.join(dir, base);
    fs.writeFileSync(dest, `${normalizeSource(f.content)}\n`);
  }
  return files.length;
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
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
}

const args = process.argv.slice(2);
const syncAll = args.includes("--all");
const onlyNames = args.filter((a) => !a.startsWith("--"));
const token = loadEnvToken();
const concurrency = Number(process.env.KIT_SYNC_CONCURRENCY ?? 12);

if (!token) {
  console.warn("Warning: REGISTRY_TOKEN not set; some kit items may 401.");
}

const catalog = parseCatalog();
const jobs = [];
for (const { id, variants } of catalog) {
  for (const variant of variants) {
    const name = registryId(variant);
    if (onlyNames.length && !onlyNames.includes(name)) continue;
    jobs.push({ categoryId: id, variant, name });
  }
}

console.log(`Resyncing ${jobs.length} variant(s) from shadcnuikit.com/r/*.json …`);

let updated = 0;
let skipped = 0;
let failed = 0;

await pool(jobs, concurrency, async (job) => {
  const reg = await fetchRegistry(job.name, token);
  if (!reg.ok) {
    console.error(`✗ ${job.name}: HTTP ${reg.status}`);
    failed++;
    return;
  }
  const regFiles = (reg.json.files ?? []).filter((f) => f.content);
  if (!syncAll && !onlyNames.length) {
    if (localMatchesRegistry(job.categoryId, job.variant, regFiles)) {
      skipped++;
      return;
    }
  }
  const n = await writeVariant(job.categoryId, job.variant, reg.json);
  updated++;
  console.log(`✓ ${job.categoryId}/${job.variant} (${n} file(s))`);
});

console.log(`
Done: updated ${updated}, skipped (already matched) ${skipped}, failed ${failed}
Run: npm run generate:examples && npm run patch:kit-base-ui && npm run test:kit-examples
`);
if (failed) process.exit(1);