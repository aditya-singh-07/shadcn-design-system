"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Toggle } from "@/components/ui/toggle";

export default function Demo() {
  return (
    <UiDemoShell title="Toggle" importPath="@/components/ui/toggle">
      <div className="flex flex-wrap gap-2">
        <Toggle aria-label="Toggle italic">Italic</Toggle>
        <Toggle variant="outline" aria-label="Toggle bold">
          Bold
        </Toggle>
        <Toggle size="sm" aria-label="Toggle underline">
          Underline
        </Toggle>
      </div>
    </UiDemoShell>
  );
}
