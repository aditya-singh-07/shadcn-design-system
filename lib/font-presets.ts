export type FontStacks = {
  sans: string;
  heading: string;
  mono: string;
};

export type FontPreset = {
  id: string;
  name: string;
  description: string;
  stacks: FontStacks;
  /** Google Fonts CSS2 family param, e.g. Inter:wght@400..700 */
  googleUrl?: string;
};

export const defaultFontStacks: FontStacks = {
  sans: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  heading: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  mono: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace',
};

export const fontPresets: FontPreset[] = [
  {
    id: "geist",
    name: "Geist",
    description: "Default project font",
    stacks: defaultFontStacks,
  },
  {
    id: "inter",
    name: "Inter",
    description: "Neutral UI sans",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400..700;1,14..32,400..700&display=swap",
    stacks: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      heading: '"Inter", ui-sans-serif, system-ui, sans-serif',
      mono: 'var(--font-geist-mono), ui-monospace, monospace',
    },
  },
  {
    id: "dm-sans",
    name: "DM Sans",
    description: "Geometric sans",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap",
    stacks: {
      sans: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
      heading: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
      mono: 'var(--font-geist-mono), ui-monospace, monospace',
    },
  },
  {
    id: "jetbrains",
    name: "JetBrains Mono",
    description: "Mono-forward pairing",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&family=Inter:wght@400..600&display=swap",
    stacks: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      heading: '"Inter", ui-sans-serif, system-ui, sans-serif',
      mono: '"JetBrains Mono", ui-monospace, monospace',
    },
  },
  {
    id: "newsreader",
    name: "Newsreader",
    description: "Editorial headings",
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Newsreader:ital,opsz,wght@0,6..72,400..800;1,6..72,400..800&display=swap",
    stacks: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      heading: '"Newsreader", ui-serif, Georgia, serif',
      mono: 'var(--font-geist-mono), ui-monospace, monospace',
    },
  },
  {
    id: "system",
    name: "System",
    description: "Native system UI",
    stacks: {
      sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      heading: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
    },
  },
];

export function getFontPreset(id: string): FontPreset {
  return fontPresets.find((p) => p.id === id) ?? fontPresets[0];
}