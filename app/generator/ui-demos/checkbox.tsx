"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Checkbox } from "@/components/ui/checkbox";

export default function Demo() {
  return (
    <UiDemoShell title="Checkbox" importPath="@/components/ui/checkbox">
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox defaultChecked id="terms" />
          Accept terms and conditions
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <Checkbox disabled id="disabled" />
          Disabled option
        </label>
      </div>
    </UiDemoShell>
  );
}
