"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Demo() {
  return (
    <UiDemoShell title="Toggle Group" importPath="@/components/ui/toggle-group">
      <ToggleGroup type="single" defaultValue="center" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </UiDemoShell>
  );
}
