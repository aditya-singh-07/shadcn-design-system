"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Separator } from "@/components/ui/separator";

export default function Demo() {
  return (
    <UiDemoShell title="Separator" importPath="@/components/ui/separator">
      <div className="flex h-20 w-full max-w-sm items-center gap-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" className="h-8" />
        <span className="text-sm text-muted-foreground">Right</span>
      </div>
    </UiDemoShell>
  );
}
