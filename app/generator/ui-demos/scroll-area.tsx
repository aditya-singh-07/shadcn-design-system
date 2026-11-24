"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Demo() {
  return (
    <UiDemoShell title="Scroll Area" importPath="@/components/ui/scroll-area">
      <ScrollArea className="h-32 w-full max-w-sm rounded-xl border border-border p-3">
        <div className="space-y-2 pr-3 text-sm text-muted-foreground">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i}>Scrollable line {i + 1}</p>
          ))}
        </div>
      </ScrollArea>
    </UiDemoShell>
  );
}
