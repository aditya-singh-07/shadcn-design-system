"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function Demo() {
  return (
    <UiDemoShell title="Kbd" importPath="@/components/ui/kbd">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </UiDemoShell>
  );
}
