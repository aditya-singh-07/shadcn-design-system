#!/usr/bin/env node
/**
 * Open every generator preview in a real Chromium tab (Playwright).
 * Requires the app running: npm run dev  →  http://localhost:3000
 *
 * Usage: npm run test:browser
 *        BASE_URL=http://127.0.0.1:3000 npm run test:browser
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const PREVIEW_ROOT = "#theme-preview-root";

function parseCatalog() {
  const uiRaw = fs.readFileSync(path.join(root, "lib/ui-catalog.ts"), "utf8");
  const uiCatalog = JSON.parse(
    uiRaw.match(/export const uiCatalog[^=]*=\s*(\[[\s\S]*?\]);/)?.[1] ?? "[]",
  );

  const exRaw = fs.readFileSync(path.join(root, "lib/example-catalog.ts"), "utf8");
  const exampleCatalog = JSON.parse(
    exRaw.match(
      /export const exampleCatalog: ExampleCatalogEntry\[\] = (\[[\s\S]*?\]);/,
    )?.[1] ?? "[]",
  );

  const keys = [];
  for (const { id } of uiCatalog) keys.push(`ui:${id}`);
  for (const { id, variants } of exampleCatalog) {
    for (const variant of variants) {
      keys.push(`example:${id}:${variant}`);
    }
  }
  return keys;
}

async function ensurePlaywright() {
  try {
    await import("playwright");
    return true;
  } catch {
    console.log("Installing playwright (one-time)…");
    const r = spawnSync(
      "npm",
      ["install", "--no-save", "playwright@1.49.1"],
      { cwd: root, stdio: "inherit", env: process.env },
    );
    if (r.status !== 0) return false;
    spawnSync("npx", ["playwright", "install", "chromium"], {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    });
    return true;
  }
}

async function main() {
  const keys = parseCatalog();
  console.log(`Browser test: ${keys.length} previews @ ${baseUrl}`);

  let res;
  try {
    res = await fetch(baseUrl, { signal: AbortSignal.timeout(8000) });
  } catch {
    console.error(
      `\nCould not reach ${baseUrl}. Start the app first:\n  npm run dev\n`,
    );
    process.exit(1);
  }
  if (!res.ok) {
    console.error(`\n${baseUrl} returned HTTP ${res.status}. Fix dev server first.\n`);
    process.exit(1);
  }

  if (!(await ensurePlaywright())) {
    console.error("Failed to install playwright.");
    process.exit(1);
  }

  const pw = await import("playwright");
  const chromium = pw.chromium ?? pw.default?.chromium;
  if (!chromium) {
    console.error("Playwright chromium launcher not found.");
    process.exit(1);
  }

  const failures = [];
  const consoleErrors = [];

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 900, height: 900 });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.message);
  });
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const t = msg.text();
      if (!t.includes("favicon")) consoleErrors.push(t);
    }
  });

  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60_000 });

  const select = page.locator('[data-testid="generator-selection"]');
  await select.waitFor({ state: "visible", timeout: 15_000 });

  let done = 0;
  for (const key of keys) {
    consoleErrors.length = 0;
    try {
      await select.selectOption(key);
      await page
        .locator(`${PREVIEW_ROOT} [aria-label="Loading"]`)
        .waitFor({ state: "detached", timeout: 45_000 })
        .catch(() => {});

      await page.waitForTimeout(200);

      const bodyText = await page.locator(PREVIEW_ROOT).innerText();
      const failText =
        bodyText.includes("Failed to load") ||
        bodyText.includes("Unable to preview");
      const overlay = await page
        .locator("text=Unhandled Runtime Error")
        .count();

      const criticalConsole = consoleErrors.filter(
        (m) =>
          !m.includes("MenuGroupContext") &&
          !m.includes("Download the React DevTools") &&
          !m.includes("nativeButton"),
      );

      if (failText || overlay > 0 || criticalConsole.length > 0) {
        failures.push({
          key,
          preview: failText ? bodyText.slice(0, 200) : undefined,
          overlay: overlay > 0,
          console: criticalConsole.slice(0, 3),
        });
        console.error(`✗ ${key}`);
      } else {
        console.log(`✓ ${key}`);
      }
    } catch (err) {
      failures.push({
        key,
        error: err instanceof Error ? err.message : String(err),
      });
      console.error(`✗ ${key} — ${failures.at(-1).error}`);
    }
    done++;
    if (done % 50 === 0) {
      console.log(`… ${done}/${keys.length}`);
    }
  }

  await browser.close();

  const reportPath = path.join(root, "scripts/.browser-test-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify({ baseUrl, total: keys.length, failures }, null, 2),
  );

  if (failures.length > 0) {
    console.error(
      `\n${failures.length} browser failure(s) — see ${reportPath}\n`,
    );
    for (const f of failures.slice(0, 30)) {
      console.error(`- ${f.key}${f.console?.length ? `: ${f.console[0]}` : ""}`);
    }
    if (failures.length > 30) {
      console.error(`… and ${failures.length - 30} more`);
    }
    process.exit(1);
  }

  console.log(`\nAll ${keys.length} previews OK in browser.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});