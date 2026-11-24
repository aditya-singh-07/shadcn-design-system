"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export default function Demo() {
  return (
    <UiDemoShell title="Tooltip" importPath="@/components/ui/tooltip">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            type="button"
            className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
          >
            Hover me
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </UiDemoShell>
  );
}
