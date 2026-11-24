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

const themePath = path.join(root, "lib/theme.ts");
const globalsPath = path.join(root, "app/globals.css");
const themePanelPath = path.join(root, "app/generator/theme-panel.tsx");
const workspacePath = path.join(root, "app/generator/generator-workspace.tsx");

const themeSrc = fs.readFileSync(themePath, "utf8");
const globals = fs.readFileSync(globalsPath, "utf8");
const themePanel = fs.readFileSync(themePanelPath, "utf8");
const workspace = fs.readFileSync(workspacePath, "utf8");

const keysMatch = themeSrc.match(
  /export const THEME_TOKEN_KEYS = \[([\s\S]*?)\] as const/,
);
if (!keysMatch) {
  console.error("✗ could not parse THEME_TOKEN_KEYS");
  process.exit(1);
}
const keys = [...keysMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);

assert(
  themeSrc.includes("GENERATOR_FONT_VARS"),
  "lib/theme.ts exports GENERATOR_FONT_VARS",
);
assert(
  themeSrc.includes("getThemePreviewRefreshKey"),
  "lib/theme.ts exports getThemePreviewRefreshKey",
);
assert(
  themeSrc.includes("GENERATOR_FONT_VARS.sans"),
  "applyThemeToElement sets generator font variables",
);

for (const key of keys) {
  assert(
    globals.includes(`--color-${key}: var(--${key})`) ||
      globals.includes(`--color-${key.replace(/-/g, "-")}: var(--${key})`),
    `@theme maps --${key}`,
  );
  assert(globals.includes(`--${key}:`), `globals.css defines --${key}`);
}

assert(
  globals.includes("--generator-font-sans"),
  "globals.css wires --generator-font-sans into @theme",
);
assert(
  globals.includes("--generator-font-heading"),
  "globals.css wires --generator-font-heading into @theme",
);
assert(
  globals.includes("--generator-font-mono"),
  "globals.css wires --generator-font-mono into @theme",
);
assert(
  globals.includes("@layer utilities") &&
    globals.includes(".font-sans") &&
    globals.includes("--generator-font-sans"),
  "globals.css overrides font-* utilities for live generator fonts",
);

const tokenGroupsMatch = themeSrc.match(
  /export const TOKEN_GROUPS[\s\S]*?keys: \[([\s\S]*?)\]/,
);
if (tokenGroupsMatch) {
  const grouped = new Set();
  for (const block of themeSrc.matchAll(/keys: \[([\s\S]*?)\]/g)) {
    for (const k of block[1].matchAll(/"([^"]+)"/g)) {
      grouped.add(k[1]);
    }
  }
  for (const key of keys) {
    assert(grouped.has(key), `TOKEN_GROUPS includes ${key}`);
  }
}

assert(
  themePanel.includes("useLayoutEffect") && themePanel.includes("syncDom"),
  "ThemePanel syncs theme before paint",
);
assert(
  workspace.includes("applyThemeToElement") &&
    workspace.includes("getThemePreviewRefreshKey"),
  "GeneratorWorkspace applies theme and preview refresh key",
);
assert(
  workspace.includes(`previewRootId={PREVIEW_ROOT_ID}`),
  "GeneratorWorkspace passes preview root id to ThemePanel",
);

if (failed > 0) {
  console.error(`\n${failed} theme check(s) failed`);
  process.exit(1);
}

console.log(`\nTheme verification passed (${keys.length} tokens).`);