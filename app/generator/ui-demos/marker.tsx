"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Marker, MarkerIcon, MarkerContent } from "@/components/ui/marker";

export default function Demo() {
  return (
    <UiDemoShell title="Marker" importPath="@/components/ui/marker">
      <div className="flex w-full flex-col gap-3">
        <Marker>
          <MarkerIcon>★</MarkerIcon>
          <MarkerContent>Today</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Section</MarkerContent>
        </Marker>
      </div>
    </UiDemoShell>
  );
}
