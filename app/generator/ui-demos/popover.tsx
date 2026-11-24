"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function Demo() {
  return (
    <UiDemoShell title="Popover" importPath="@/components/ui/popover">
      <Popover>
        <PopoverTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open popover
        </PopoverTrigger>
        <PopoverContent className="w-64 text-sm">
          <p className="font-medium">Dimensions</p>
          <p className="text-muted-foreground">Set the width and height.</p>
        </PopoverContent>
      </Popover>
    </UiDemoShell>
  );
}
