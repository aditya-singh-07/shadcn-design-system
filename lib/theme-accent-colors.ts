import type { ThemeState, ThemeTokens } from "@/lib/theme";

export type ThemeAccentColor = {
  id: string;
  name: string;
  light: Pick<ThemeTokens, "primary" | "primary-foreground">;
  dark: Pick<ThemeTokens, "primary" | "primary-foreground">;
};

export const THEME_COLOR_CUSTOM_KEYS = [
  "primary",
  "primary-foreground",
] as const satisfies readonly (keyof ThemeTokens)[];

export const themeAccentColors: ThemeAccentColor[] = [
  {
    id: "neutral",
    name: "Neutral",
    light: {
      primary: "oklch(0.205 0 0)",
      "primary-foreground": "oklch(0.985 0 0)",
    },
    dark: {
      primary: "oklch(0.922 0 0)",
      "primary-foreground": "oklch(0.205 0 0)",
    },
  },
  {
    id: "blue",
    name: "Blue",
    light: {
      primary: "oklch(0.488 0.243 264.376)",
      "primary-foreground": "oklch(0.985 0 0)",
    },
    dark: {
      primary: "oklch(0.696 0.17 264.376)",
      "primary-foreground": "oklch(0.205 0 0)",
    },
  },
  {
    id: "green",
    name: "Green",
    light: {
      primary: "oklch(0.52 0.14 155)",
      "primary-foreground": "oklch(0.99 0 0)",
    },
    dark: {
      primary: "oklch(0.75 0.12 155)",
      "primary-foreground": "oklch(0.2 0.04 155)",
    },
  },
  {
    id: "violet",
    name: "Violet",
    light: {
      primary: "oklch(0.42 0.18 295)",
      "primary-foreground": "oklch(0.99 0 0)",
    },
    dark: {
      primary: "oklch(0.74 0.14 295)",
      "primary-foreground": "oklch(0.18 0.05 295)",
    },
  },
  {
    id: "orange",
    name: "Orange",
    light: {
      primary: "oklch(0.58 0.18 55)",
      "primary-foreground": "oklch(0.99 0 0)",
    },
    dark: {
      primary: "oklch(0.78 0.14 65)",
      "primary-foreground": "oklch(0.2 0.03 55)",
    },
  },
  {
    id: "rose",
    name: "Rose",
    light: {
      primary: "oklch(0.52 0.2 12)",
      "primary-foreground": "oklch(0.99 0 0)",
    },
    dark: {
      primary: "oklch(0.72 0.16 12)",
      "primary-foreground": "oklch(0.2 0.04 12)",
    },
  },
];

export function getActiveThemeAccentName(state: ThemeState): string {
  for (const accent of themeAccentColors) {
    if (state.light.primary === accent.light.primary) {
      return accent.name;
    }
  }
  return "Custom";
}

export function applyThemeAccentColor(
  state: ThemeState,
  accent: ThemeAccentColor,
): ThemeState {
  return {
    ...state,
    light: { ...state.light, ...accent.light },
    dark: { ...state.dark, ...accent.dark },
  };
}