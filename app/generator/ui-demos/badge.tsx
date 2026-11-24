"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Badge } from "@/components/ui/badge";

export default function Demo() {
  return (
    <UiDemoShell title="Badge" importPath="@/components/ui/badge">
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </UiDemoShell>
  );
}
