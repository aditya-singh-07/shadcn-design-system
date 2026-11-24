"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Skeleton } from "@/components/ui/skeleton";

export default function Demo() {
  return (
    <UiDemoShell title="Skeleton" importPath="@/components/ui/skeleton">
      <div className="flex w-full max-w-sm items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </UiDemoShell>
  );
}
