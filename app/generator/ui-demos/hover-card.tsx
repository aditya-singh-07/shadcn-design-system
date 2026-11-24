"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

export default function Demo() {
  return (
    <UiDemoShell title="Hover Card" importPath="@/components/ui/hover-card">
      <HoverCard>
        <HoverCardTrigger
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          href="#"
        >
          @nextjs
        </HoverCardTrigger>
        <HoverCardContent className="w-64 text-sm">
          <p className="font-medium">Next.js</p>
          <p className="text-muted-foreground">
            The React framework for production.
          </p>
        </HoverCardContent>
      </HoverCard>
    </UiDemoShell>
  );
}
