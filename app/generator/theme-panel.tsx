"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { GoogleFontLoader } from "@/app/generator/google-font-loader";
import { cssColorToHex } from "@/lib/css-color";
import { fontPresets, getFontPreset } from "@/lib/font-presets";
import {
  THEME_COLOR_CUSTOM_KEYS,
  applyThemeAccentColor,
  getActiveThemeAccentName,
  themeAccentColors,
} from "@/lib/theme-accent-colors";
import { themePresets } from "@/lib/theme-presets";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  TOKEN_GROUPS,
  applyThemeToElement,
  createDefaultThemeState,
  exportThemeCss,
  formatTokenLabel,
  type AppearanceMode,
  type ThemeState,
  type ThemeTokenKey,
} from "@/lib/theme";
import { ChevronDownIcon, CopyIcon, RotateCcwIcon } from "lucide-react";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { cn } from "cn";

type ThemePanelProps = {
  state: ThemeState;
  onChange: (state: ThemeState) => void;
  previewRootId?: string;
  className?: string;
};

function radiusToSlider(value: string): number {
  const num = Number.parseFloat(value);
  return Number.isFinite(num) ? num * 100 : 62.5;
}

function sliderToRadius(value: number): string {
  return `${(value / 100).toFixed(3)}rem`;
}

export function ThemePanel({
  state,
  onChange,
  previewRootId,
  className,
}: ThemePanelProps) {
  const syncDom = useCallback(
    (next: ThemeState) => {
      const root = document.documentElement;
      applyThemeToElement(root, next);
      if (previewRootId) {
        const el = document.getElementById(previewRootId);
        if (el) applyThemeToElement(el, next);
      }
    },
    [previewRootId],
  );

  useLayoutEffect(() => {
    syncDom(state);
  }, [state, syncDom]);

  const setAppearance = (appearance: AppearanceMode) => {
    onChange({ ...state, appearance });
  };

  const updateToken = (
    mode: AppearanceMode,
    key: ThemeTokenKey,
    value: string,
  ) => {
    const bucket = mode === "dark" ? "dark" : "light";
    onChange({
      ...state,
      [bucket]: { ...state[bucket], [key]: value },
    });
  };

  const activeTokens =
    state.appearance === "dark" ? state.dark : state.light;

  const themeColorLabel = useMemo(() => getActiveThemeAccentName(state), [state]);

  const applyAccent = (accentId: string) => {
    const accent = themeAccentColors.find((item) => item.id === accentId);
    if (accent) onChange(applyThemeAccentColor(state, accent));
  };

  const copyCss = async () => {
    await navigator.clipboard.writeText(exportThemeCss(state));
  };

  const reset = () => onChange(createDefaultThemeState());

  const activeFont = getFontPreset(state.typography.fontPresetId);

  const setFontPreset = (id: string) => {
    const preset = getFontPreset(id);
    onChange({
      ...state,
      typography: {
        fontPresetId: id,
        sans: preset.stacks.sans,
        heading: preset.stacks.heading,
        mono: preset.stacks.mono,
        letterSpacing: state.typography.letterSpacing,
      },
    });
  };

  return (
    <>
      <GoogleFontLoader href={activeFont.googleUrl} />
    <div
      className={cn(
        "border-border bg-card flex h-full min-h-0 flex-col overflow-hidden border-l",
        className,
      )}
    >
      <div className="border-border space-y-1 border-b p-4">
        <h2 className="text-sm font-semibold">Theme</h2>
        <p className="text-muted-foreground text-xs">
          Customize tokens like the Shadcn UI Kit generator.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="space-y-6 p-4">
          <div className="space-y-2">
            <Label>Appearance</Label>
            <div className="bg-muted flex rounded-lg p-1">
              {(["light", "dark"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setAppearance(mode)}
                  className={cn(
                    "flex-1 rounded-md px-3 py-1.5 text-sm capitalize transition-colors",
                    state.appearance === mode
                      ? "bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Theme color</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="border-border hover:bg-muted/60 flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors"
                >
                  <span
                    className="border-border size-6 shrink-0 rounded-full border"
                    style={{ background: activeTokens.primary }}
                    aria-hidden
                  />
                  <span className="flex-1 font-medium">{themeColorLabel}</span>
                  <ChevronDownIcon className="text-muted-foreground size-4 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[min(20rem,calc(100vw-2rem))]" align="start">
                <PopoverHeader>
                  <PopoverTitle>Customize theme</PopoverTitle>
                  <PopoverDescription>
                    Pick an accent color or fine-tune brand tokens.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="mt-2 grid grid-cols-6 gap-2">
                  {themeAccentColors.map((accent) => (
                    <button
                      key={accent.id}
                      type="button"
                      title={accent.name}
                      aria-label={accent.name}
                      onClick={() => applyAccent(accent.id)}
                      className={cn(
                        "border-border size-8 rounded-full border transition-transform hover:scale-105",
                        state.light.primary === accent.light.primary &&
                          "ring-primary ring-2 ring-offset-2 ring-offset-popover",
                      )}
                      style={{
                        background:
                          state.appearance === "dark"
                            ? accent.dark.primary
                            : accent.light.primary,
                      }}
                    />
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="max-h-64 space-y-3 overflow-y-auto overscroll-contain pr-1">
                  {THEME_COLOR_CUSTOM_KEYS.map((key) => (
                    <ColorTokenField
                      key={key}
                      tokenKey={key}
                      value={activeTokens[key]}
                      onChange={(value) =>
                        updateToken(state.appearance, key, value)
                      }
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Presets</Label>
            <div className="grid grid-cols-2 gap-2">
              {themePresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() =>
                    onChange({
                      ...preset.state,
                      appearance: state.appearance,
                      typography: state.typography,
                      light: { ...preset.state.light },
                      dark: { ...preset.state.dark },
                    })
                  }
                  className="border-border hover:bg-muted/60 rounded-lg border px-3 py-2 text-left text-sm transition-colors"
                >
                  <span className="font-medium">{preset.name}</span>
                  <span className="text-muted-foreground mt-0.5 block text-xs leading-snug">
                    {preset.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Label>Radius</Label>
              <span className="text-muted-foreground text-xs tabular-nums">
                {state.radius}
              </span>
            </div>
            <Slider
              value={[radiusToSlider(state.radius)]}
              min={0}
              max={150}
              step={1}
              onValueChange={(v) => {
                const n = Array.isArray(v) ? v[0] : v;
                onChange({
                  ...state,
                  radius: sliderToRadius(typeof n === "number" ? n : 62.5),
                });
              }}
            />
          </div>

          <div className="space-y-2">
            <Label>Font</Label>
            <div className="grid grid-cols-2 gap-2">
              {fontPresets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setFontPreset(preset.id)}
                  className={cn(
                    "border-border rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                    state.typography.fontPresetId === preset.id
                      ? "border-primary bg-primary/5 ring-primary/30 ring-1"
                      : "hover:bg-muted/60",
                  )}
                >
                  <span
                    className="block font-medium"
                    style={{ fontFamily: preset.stacks.sans }}
                  >
                    {preset.name}
                  </span>
                  <span className="text-muted-foreground mt-0.5 block text-xs leading-snug">
                    {preset.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Label>Letter spacing</Label>
              <span className="text-muted-foreground text-xs tabular-nums">
                {state.typography.letterSpacing}
              </span>
            </div>
            <Slider
              value={[
                Math.round(
                  Number.parseFloat(state.typography.letterSpacing) * 1000,
                ) || 0,
              ]}
              min={-50}
              max={100}
              step={1}
              onValueChange={(v) => {
                const n = Array.isArray(v) ? v[0] : v;
                const em = (typeof n === "number" ? n : 0) / 1000;
                onChange({
                  ...state,
                  typography: {
                    ...state.typography,
                    letterSpacing: `${em.toFixed(3)}em`,
                  },
                });
              }}
            />
          </div>

          <Separator />

          {TOKEN_GROUPS.map((group) => (
            <Collapsible key={group.label} defaultOpen={group.label === "Primary"}>
              <CollapsibleTrigger className="hover:text-foreground text-muted-foreground flex w-full items-center justify-between py-1 text-sm font-medium">
                {group.label}
                <ChevronDownIcon className="size-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 pt-2">
                {group.keys.map((key) => (
                  <ColorTokenField
                    key={key}
                    tokenKey={key}
                    value={activeTokens[key]}
                    onChange={(value) =>
                      updateToken(state.appearance, key, value)
                    }
                  />
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>

      <div className="border-border bg-card flex shrink-0 gap-2 border-t p-4">
        <Button variant="outline" className="flex-1" onClick={reset}>
          <RotateCcwIcon />
          Reset
        </Button>
        <Button className="flex-1" onClick={copyCss}>
          <CopyIcon />
          Copy CSS
        </Button>
      </div>
    </div>
    </>
  );
}

function ColorTokenField({
  tokenKey,
  value,
  onChange,
}: {
  tokenKey: ThemeTokenKey;
  value: string;
  onChange: (value: string) => void;
}) {
  const hex = cssColorToHex(value);

  return (
    <div className="grid gap-1.5">
      <Label className="text-xs">{formatTokenLabel(tokenKey)}</Label>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label={`Pick ${formatTokenLabel(tokenKey)}`}
              className="border-border hover:ring-ring/40 size-8 shrink-0 rounded-md border transition-shadow hover:ring-2"
              style={{ background: value }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-56 p-3" align="start" side="left">
            <p className="text-muted-foreground mb-2 text-xs font-medium">
              Color picker
            </p>
            <input
              type="color"
              value={hex}
              onChange={(e) => onChange(e.target.value)}
              className="border-border size-full h-10 w-full cursor-pointer rounded-md border bg-transparent"
            />
          </PopoverContent>
        </Popover>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 font-mono text-xs"
        />
      </div>
    </div>
  );
}