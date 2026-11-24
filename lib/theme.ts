import { defaultFontStacks } from "@/lib/font-presets";

export const THEME_TOKEN_KEYS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
] as const;

export type ThemeTokenKey = (typeof THEME_TOKEN_KEYS)[number];
export type ThemeTokens = Record<ThemeTokenKey, string>;
export type AppearanceMode = "light" | "dark";

export type ThemeTypography = {
  fontPresetId: string;
  sans: string;
  heading: string;
  mono: string;
  letterSpacing: string;
};

export type ThemeState = {
  appearance: AppearanceMode;
  radius: string;
  typography: ThemeTypography;
  light: ThemeTokens;
  dark: ThemeTokens;
};

export const TOKEN_GROUPS: { label: string; keys: ThemeTokenKey[] }[] = [
  {
    label: "Primary",
    keys: ["primary", "primary-foreground"],
  },
  {
    label: "Surfaces",
    keys: [
      "background",
      "foreground",
      "card",
      "card-foreground",
      "popover",
      "popover-foreground",
    ],
  },
  {
    label: "Secondary & muted",
    keys: [
      "secondary",
      "secondary-foreground",
      "muted",
      "muted-foreground",
      "accent",
      "accent-foreground",
    ],
  },
  {
    label: "Borders & input",
    keys: ["border", "input", "ring", "destructive"],
  },
  {
    label: "Sidebar",
    keys: [
      "sidebar",
      "sidebar-foreground",
      "sidebar-primary",
      "sidebar-primary-foreground",
      "sidebar-accent",
      "sidebar-accent-foreground",
      "sidebar-border",
      "sidebar-ring",
    ],
  },
  {
    label: "Charts",
    keys: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"],
  },
];

export const defaultLightTokens: ThemeTokens = {
  background: "oklch(1 0 0)",
  foreground: "oklch(0.145 0 0)",
  card: "oklch(1 0 0)",
  "card-foreground": "oklch(0.145 0 0)",
  popover: "oklch(1 0 0)",
  "popover-foreground": "oklch(0.145 0 0)",
  primary: "oklch(0.205 0 0)",
  "primary-foreground": "oklch(0.985 0 0)",
  secondary: "oklch(0.97 0 0)",
  "secondary-foreground": "oklch(0.205 0 0)",
  muted: "oklch(0.97 0 0)",
  "muted-foreground": "oklch(0.556 0 0)",
  accent: "oklch(0.97 0 0)",
  "accent-foreground": "oklch(0.205 0 0)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.922 0 0)",
  input: "oklch(0.922 0 0)",
  ring: "oklch(0.708 0 0)",
  "chart-1": "oklch(0.87 0 0)",
  "chart-2": "oklch(0.556 0 0)",
  "chart-3": "oklch(0.439 0 0)",
  "chart-4": "oklch(0.371 0 0)",
  "chart-5": "oklch(0.269 0 0)",
  sidebar: "oklch(0.985 0 0)",
  "sidebar-foreground": "oklch(0.145 0 0)",
  "sidebar-primary": "oklch(0.205 0 0)",
  "sidebar-primary-foreground": "oklch(0.985 0 0)",
  "sidebar-accent": "oklch(0.97 0 0)",
  "sidebar-accent-foreground": "oklch(0.205 0 0)",
  "sidebar-border": "oklch(0.922 0 0)",
  "sidebar-ring": "oklch(0.708 0 0)",
};

export const defaultDarkTokens: ThemeTokens = {
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  card: "oklch(0.205 0 0)",
  "card-foreground": "oklch(0.985 0 0)",
  popover: "oklch(0.205 0 0)",
  "popover-foreground": "oklch(0.985 0 0)",
  primary: "oklch(0.922 0 0)",
  "primary-foreground": "oklch(0.205 0 0)",
  secondary: "oklch(0.269 0 0)",
  "secondary-foreground": "oklch(0.985 0 0)",
  muted: "oklch(0.269 0 0)",
  "muted-foreground": "oklch(0.708 0 0)",
  accent: "oklch(0.269 0 0)",
  "accent-foreground": "oklch(0.985 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 10%)",
  input: "oklch(1 0 0 / 15%)",
  ring: "oklch(0.556 0 0)",
  "chart-1": "oklch(0.87 0 0)",
  "chart-2": "oklch(0.556 0 0)",
  "chart-3": "oklch(0.439 0 0)",
  "chart-4": "oklch(0.371 0 0)",
  "chart-5": "oklch(0.269 0 0)",
  sidebar: "oklch(0.205 0 0)",
  "sidebar-foreground": "oklch(0.985 0 0)",
  "sidebar-primary": "oklch(0.488 0.243 264.376)",
  "sidebar-primary-foreground": "oklch(0.985 0 0)",
  "sidebar-accent": "oklch(0.269 0 0)",
  "sidebar-accent-foreground": "oklch(0.985 0 0)",
  "sidebar-border": "oklch(1 0 0 / 10%)",
  "sidebar-ring": "oklch(0.556 0 0)",
};

export function createDefaultTypography(): ThemeTypography {
  return {
    fontPresetId: "geist",
    sans: defaultFontStacks.sans,
    heading: defaultFontStacks.heading,
    mono: defaultFontStacks.mono,
    letterSpacing: "0em",
  };
}

export function createDefaultThemeState(): ThemeState {
  return {
    appearance: "light",
    radius: "0.625rem",
    typography: createDefaultTypography(),
    light: { ...defaultLightTokens },
    dark: { ...defaultDarkTokens },
  };
}

/** Variables consumed by `@theme` in `globals.css` for live font overrides. */
export const GENERATOR_FONT_VARS = {
  sans: "--generator-font-sans",
  heading: "--generator-font-heading",
  mono: "--generator-font-mono",
} as const;

export function applyThemeToElement(
  element: HTMLElement,
  state: ThemeState,
  appearance?: AppearanceMode,
) {
  const mode = appearance ?? state.appearance;
  const tokens = mode === "dark" ? state.dark : state.light;

  for (const key of THEME_TOKEN_KEYS) {
    element.style.setProperty(`--${key}`, tokens[key]);
  }
  element.style.setProperty("--radius", state.radius);
  element.style.setProperty(GENERATOR_FONT_VARS.sans, state.typography.sans);
  element.style.setProperty(
    GENERATOR_FONT_VARS.heading,
    state.typography.heading,
  );
  element.style.setProperty(GENERATOR_FONT_VARS.mono, state.typography.mono);
  element.style.setProperty(
    "letter-spacing",
    state.typography.letterSpacing,
  );
  /* Inherit through unclassed text; utilities read --generator-font-* via var(). */
  element.style.fontFamily = state.typography.sans;
  element.classList.toggle("dark", mode === "dark");
}

/** Remount previews when CSS variables alone are not enough (e.g. Shiki, charts). */
export function getThemePreviewRefreshKey(state: ThemeState): string {
  return [
    state.appearance,
    state.radius,
    state.typography.fontPresetId,
    state.typography.letterSpacing,
  ].join("|");
}

export function exportThemeCss(state: ThemeState): string {
  const shared = [
    `  --radius: ${state.radius};`,
    `  --font-sans: ${state.typography.sans};`,
    `  --font-heading: ${state.typography.heading};`,
    `  --font-mono: ${state.typography.mono};`,
    `  letter-spacing: ${state.typography.letterSpacing};`,
  ];

  const formatBlock = (selector: string, tokens: ThemeTokens) => {
    const lines = [...shared];
    for (const key of THEME_TOKEN_KEYS) {
      lines.push(`  --${key}: ${tokens[key]};`);
    }
    return `${selector} {\n${lines.join("\n")}\n}`;
  };

  return `${formatBlock(":root", state.light)}\n\n${formatBlock(".dark", state.dark)}`;
}

export function formatTokenLabel(key: string): string {
  return key
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}