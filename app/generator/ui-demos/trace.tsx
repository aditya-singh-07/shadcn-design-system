"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Trace, TraceLine, TraceTitle, TraceDescription, TraceCollapsible, TraceCollapsibleTrigger, TraceCollapsibleContent } from "@/components/ui/trace";

export default function Demo() {
  return (
    <UiDemoShell title="Trace" importPath="@/components/ui/trace">
      <Trace className="max-w-md">
        <TraceLine status="running">
          <TraceTitle>Fetching context</TraceTitle>
          <TraceDescription>240ms</TraceDescription>
        </TraceLine>
        <TraceCollapsible>
          <TraceCollapsibleTrigger>
            <TraceLine status="completed">
              <TraceTitle>Rendered response</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            Expanded trace details for the selected step.
          </TraceCollapsibleContent>
        </TraceCollapsible>
      </Trace>
    </UiDemoShell>
  );
}
