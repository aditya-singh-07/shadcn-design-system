"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Demo() {
  return (
    <UiDemoShell title="Aspect Ratio" importPath="@/components/ui/aspect-ratio">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl bg-muted">
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          16:9 media frame
        </div>
      </AspectRatio>
    </UiDemoShell>
  );
}
