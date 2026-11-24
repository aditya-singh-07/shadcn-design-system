"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Button } from "@/components/ui/button";

export default function Demo() {
  return (
    <UiDemoShell title="Button" importPath="@/components/ui/button">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Default</Button>
          <Button size="lg">LG</Button>
          <Button size="icon" aria-label="Icon">
            +
          </Button>
        </div>
        <Button disabled>Disabled</Button>
      </div>
    </UiDemoShell>
  );
}
