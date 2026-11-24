"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { DirectionProvider } from "@/components/ui/direction";

export default function Demo() {
  return (
    <UiDemoShell title="Direction" importPath="@/components/ui/direction">
      <DirectionProvider direction="rtl">
        <p className="rounded-lg border border-border bg-muted/40 p-3 text-sm text-muted-foreground">
          Content inside a right-to-left direction context.
        </p>
      </DirectionProvider>
    </UiDemoShell>
  );
}
