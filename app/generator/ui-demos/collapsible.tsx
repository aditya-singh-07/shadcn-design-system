"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const [open, setOpen] = React.useState(false);

export default function Demo() {
  return (
    <UiDemoShell title="Collapsible" importPath="@/components/ui/collapsible">
      <Collapsible open={open} onOpenChange={setOpen} className="w-full space-y-2">
        <CollapsibleTrigger
          type="button"
          className="inline-flex h-8 w-full items-center justify-between rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Toggle details
        </CollapsibleTrigger>
        <CollapsibleContent className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
          Hidden content revealed when expanded.
        </CollapsibleContent>
      </Collapsible>
    </UiDemoShell>
  );
}
