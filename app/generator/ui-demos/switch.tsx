"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Switch } from "@/components/ui/switch";

export default function Demo() {
  return (
    <UiDemoShell title="Switch" importPath="@/components/ui/switch">
      <div className="flex items-center gap-2 text-sm">
        <Switch id="airplane" defaultChecked />
        <label htmlFor="airplane">Airplane mode</label>
      </div>
    </UiDemoShell>
  );
}
