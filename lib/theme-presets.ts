import {
  createDefaultThemeState,
  type ThemeState,
  type ThemeTokens,
} from "@/lib/theme";

export type ThemePreset = {
  id: string;
  name: string;
  description: string;
  state: ThemeState;
};

function withOverrides(
  base: ThemeState,
  overrides: {
    radius?: string;
    light?: Partial<ThemeTokens>;
    dark?: Partial<ThemeTokens>;
  },
): ThemeState {
  return {
    ...base,
    radius: overrides.radius ?? base.radius,
    light: { ...base.light, ...overrides.light },
    dark: { ...base.dark, ...overrides.dark },
  };
}

const defaultState = createDefaultThemeState();

export const themePresets: ThemePreset[] = [
  {
    id: "default",
    name: "Default",
    description: "Neutral base from your project",
    state: defaultState,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "High-contrast retail palette",
    state: withOverrides(createDefaultThemeState(), {
      radius: "0.75rem",
      light: {
        primary: "oklch(0.45 0.2 264)",
        "primary-foreground": "oklch(0.985 0 0)",
        accent: "oklch(0.96 0.03 264)",
        "accent-foreground": "oklch(0.32 0.12 264)",
        ring: "oklch(0.55 0.18 264)",
        "sidebar-primary": "oklch(0.45 0.2 264)",
      },
      dark: {
        primary: "oklch(0.72 0.16 264)",
        "primary-foreground": "oklch(0.18 0.04 264)",
        accent: "oklch(0.28 0.06 264)",
        "accent-foreground": "oklch(0.985 0 0)",
        "sidebar-primary": "oklch(0.72 0.16 264)",
      },
    }),
  },
  {
    id: "sales",
    name: "Sales",
    description: "CRM / pipeline greens",
    state: withOverrides(createDefaultThemeState(), {
      radius: "0.5rem",
      light: {
        primary: "oklch(0.52 0.14 155)",
        "primary-foreground": "oklch(0.99 0 0)",
        secondary: "oklch(0.95 0.03 155)",
        "secondary-foreground": "oklch(0.28 0.06 155)",
        ring: "oklch(0.6 0.12 155)",
        "chart-1": "oklch(0.62 0.14 155)",
        "chart-2": "oklch(0.55 0.12 200)",
        "sidebar-primary": "oklch(0.52 0.14 155)",
      },
      dark: {
        primary: "oklch(0.75 0.12 155)",
        "primary-foreground": "oklch(0.2 0.04 155)",
        "sidebar-primary": "oklch(0.75 0.12 155)",
      },
    }),
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Warm stone and copper accents",
    state: withOverrides(createDefaultThemeState(), {
      radius: "0.875rem",
      light: {
        background: "oklch(0.99 0.005 85)",
        foreground: "oklch(0.22 0.02 55)",
        primary: "oklch(0.48 0.11 55)",
        "primary-foreground": "oklch(0.99 0 0)",
        muted: "oklch(0.96 0.01 85)",
        border: "oklch(0.9 0.02 85)",
        ring: "oklch(0.58 0.1 55)",
        "sidebar-primary": "oklch(0.48 0.11 55)",
      },
      dark: {
        background: "oklch(0.18 0.02 55)",
        primary: "oklch(0.78 0.1 65)",
        "primary-foreground": "oklch(0.2 0.03 55)",
        "sidebar-primary": "oklch(0.78 0.1 65)",
      },
    }),
  },
  {
    id: "hotel",
    name: "Hotel",
    description: "Luxury violet highlights",
    state: withOverrides(createDefaultThemeState(), {
      radius: "1rem",
      light: {
        primary: "oklch(0.42 0.18 295)",
        "primary-foreground": "oklch(0.99 0 0)",
        card: "oklch(0.995 0.005 295)",
        accent: "oklch(0.94 0.04 295)",
        "accent-foreground": "oklch(0.32 0.1 295)",
        ring: "oklch(0.55 0.16 295)",
        "sidebar-primary": "oklch(0.42 0.18 295)",
      },
      dark: {
        background: "oklch(0.16 0.03 295)",
        primary: "oklch(0.74 0.14 295)",
        "primary-foreground": "oklch(0.18 0.05 295)",
        card: "oklch(0.22 0.04 295)",
        "sidebar-primary": "oklch(0.74 0.14 295)",
      },
    }),
  },
];