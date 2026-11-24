"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Spinner } from "@/components/ui/spinner";

export default function Demo() {
  return (
    <UiDemoShell title="Spinner" importPath="@/components/ui/spinner">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Spinner />
        Loading
      </div>
    </UiDemoShell>
  );
}
