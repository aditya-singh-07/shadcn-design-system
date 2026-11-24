"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export default function Demo() {
  return (
    <UiDemoShell title="Resizable" importPath="@/components/ui/resizable">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-32 max-w-lg rounded-xl border border-border"
      >
        <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-muted/40 p-4 text-sm">
          Panel A
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4 text-sm text-muted-foreground">
          Panel B
        </ResizablePanel>
      </ResizablePanelGroup>
    </UiDemoShell>
  );
}
