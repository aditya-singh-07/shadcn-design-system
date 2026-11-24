"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";

export default function Demo() {
  return (
    <UiDemoShell title="Progress" importPath="@/components/ui/progress">
      <Progress value={62} className="max-w-sm">
        <ProgressLabel>Uploading</ProgressLabel>
        <ProgressValue />
      </Progress>
    </UiDemoShell>
  );
}
