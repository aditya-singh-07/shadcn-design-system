"use client";

import { ExamplePreview } from "@/app/generator/example-preview";
import { ThemePanel } from "@/app/generator/theme-panel";
import { UiComponentPreview } from "@/app/generator/ui-component-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { exampleCatalog } from "@/lib/example-catalog";
import {
  type GeneratorSelection,
  selectionKey,
} from "@/lib/generator-selection";
import { uiCatalog } from "@/lib/ui-catalog";
import {
  applyThemeToElement,
  createDefaultThemeState,
  getThemePreviewRefreshKey,
} from "@/lib/theme";
import { cn } from "cn";
import { SearchIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

export const PREVIEW_ROOT_ID = "theme-preview-root";

export function GeneratorWorkspace() {
  const [themeState, setThemeState] = useState(createDefaultThemeState);
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState<GeneratorSelection>({
    kind: "ui",
    componentId: uiCatalog[0]?.id ?? "button",
  });

  const themeRefreshKey = useMemo(
    () => getThemePreviewRefreshKey(themeState),
    [themeState],
  );

  useLayoutEffect(() => {
    applyThemeToElement(document.documentElement, themeState);
    const preview = document.getElementById(PREVIEW_ROOT_ID);
    if (preview) applyThemeToElement(preview, themeState);
  }, [themeState]);

  const filteredUi = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return uiCatalog;
    return uiCatalog.filter(
      (c) => c.id.includes(q) || c.label.toLowerCase().includes(q),
    );
  }, [query]);

  const filteredExamples = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return exampleCatalog;
    return exampleCatalog.filter(
      (c) =>
        c.id.includes(q) ||
        c.label.toLowerCase().includes(q) ||
        c.variants.some((v) => v.toLowerCase().includes(q)),
    );
  }, [query]);

  const activeExample =
    selection.kind === "example"
      ? exampleCatalog.find((c) => c.id === selection.categoryId)
      : null;

  const selectUi = (componentId: string) => {
    setSelection({ kind: "ui", componentId });
  };

  const selectExample = (categoryId: string, variant?: string) => {
    const entry = exampleCatalog.find((c) => c.id === categoryId);
    setSelection({
      kind: "example",
      categoryId,
      variant: variant ?? entry?.variants[0] ?? "",
    });
  };

  const totalExamples = exampleCatalog.reduce(
    (n, c) => n + c.variants.length,
    0,
  );

  useEffect(() => {
    const { body, documentElement } = document;
    const prevBody = body.style.overflow;
    const prevHtml = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    return () => {
      body.style.overflow = prevBody;
      documentElement.style.overflow = prevHtml;
    };
  }, []);

  return (
    <div className="bg-background flex h-full min-h-0 flex-col overflow-hidden">
      <header className="border-border bg-card flex h-14 shrink-0 items-center justify-between gap-4 border-b px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="truncate text-sm font-semibold md:text-base">
            Theme Generator
          </h1>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            {uiCatalog.length} ui · {totalExamples} examples
          </Badge>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 overflow-hidden max-lg:grid-rows-[minmax(0,1fr)_minmax(11rem,38vh)] lg:grid-cols-[280px_minmax(0,1fr)_320px] lg:grid-rows-1">
        <aside className="border-border bg-card hidden min-h-0 flex-col overflow-hidden border-r lg:flex lg:h-full">
          <div className="border-border border-b p-3">
            <div className="relative">
              <SearchIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ui + examples..."
                className="h-9 pl-8"
              />
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="p-2">
              <p className="text-muted-foreground px-3 py-2 text-[11px] font-medium tracking-wide uppercase">
                @/components/ui
              </p>
              {filteredUi.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => selectUi(entry.id)}
                  className={cn(
                    "hover:bg-muted flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    selection.kind === "ui" &&
                      selection.componentId === entry.id &&
                      "bg-muted font-medium",
                  )}
                >
                  <span className="truncate">{entry.label}</span>
                  <Badge variant="outline" className="text-[10px]">
                    ui
                  </Badge>
                </button>
              ))}

              <p className="text-muted-foreground mt-3 px-3 py-2 text-[11px] font-medium tracking-wide uppercase">
                @/examples/components
              </p>
              {filteredExamples.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => selectExample(entry.id)}
                  className={cn(
                    "hover:bg-muted flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    selection.kind === "example" &&
                      selection.categoryId === entry.id &&
                      "bg-muted font-medium",
                  )}
                >
                  <span className="truncate capitalize">{entry.label}</span>
                  <span className="text-muted-foreground ml-2 shrink-0 text-xs tabular-nums">
                    {entry.variants.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex min-h-0 flex-col overflow-hidden">
          <div className="border-border bg-card/50 flex shrink-0 flex-wrap items-center gap-2 border-b px-4 py-2 md:px-6">
            <select
              data-testid="generator-selection"
              aria-label="Preview selection"
              className="border-input bg-background h-9 max-w-full rounded-lg border px-2 text-sm lg:hidden"
              value={selectionKey(selection)}
              onChange={(e) => {
                const v = e.target.value;
                if (v.startsWith("ui:")) {
                  selectUi(v.slice(3));
                  return;
                }
                const [, categoryId, variant] = v.split(":");
                if (categoryId && variant) {
                  setSelection({
                    kind: "example",
                    categoryId,
                    variant,
                  });
                }
              }}
            >
              <optgroup label="components/ui">
                {uiCatalog.map((c) => (
                  <option key={c.id} value={`ui:${c.id}`}>
                    {c.label}
                  </option>
                ))}
              </optgroup>
              <optgroup label="examples">
                {exampleCatalog.map((c) =>
                  c.variants.map((variant) => (
                    <option
                      key={`${c.id}-${variant}`}
                      value={`example:${c.id}:${variant}`}
                    >
                      {c.label} — {variant}
                    </option>
                  )),
                )}
              </optgroup>
            </select>

            {selection.kind === "ui" && (
              <Badge variant="secondary" className="font-mono text-[10px]">
                @/components/ui/{selection.componentId}
              </Badge>
            )}

            {selection.kind === "example" && activeExample && (
              <>
                <Badge variant="secondary" className="font-mono text-[10px]">
                  @/examples/.../{activeExample.id}
                </Badge>
                {activeExample.variants.length > 1 && (
                  <div className="max-w-full min-w-0 flex-1 overflow-x-auto overscroll-x-contain">
                    <div className="flex w-max min-w-full gap-1 pb-0.5">
                      {activeExample.variants.map((v) => (
                        <Button
                          key={v}
                          type="button"
                          size="xs"
                          variant={
                            selection.variant === v ? "default" : "outline"
                          }
                          onClick={() => selectExample(activeExample.id, v)}
                          className="shrink-0 font-mono text-[11px]"
                        >
                          {v.includes("/") ? v.split("/").pop() : v}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div
            id={PREVIEW_ROOT_ID}
            className={cn(
              "bg-background font-sans min-h-0 flex-1 overflow-y-auto overscroll-contain antialiased",
              themeState.appearance === "dark" && "dark",
            )}
          >
            {selection.kind === "ui" ? (
              <UiComponentPreview
                key={`ui-${selection.componentId}-${themeRefreshKey}`}
                componentId={selection.componentId}
                refreshKey={themeRefreshKey}
              />
            ) : (
              <ExamplePreview
                key={`ex-${selection.categoryId}-${selection.variant}-${themeRefreshKey}`}
                categoryId={selection.categoryId}
                variant={selection.variant}
                refreshKey={themeRefreshKey}
              />
            )}
          </div>
        </main>

        <ThemePanel
          className="min-h-0 max-lg:border-t lg:h-full"
          state={themeState}
          onChange={setThemeState}
          previewRootId={PREVIEW_ROOT_ID}
        />
      </div>
    </div>
  );
}