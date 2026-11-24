"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Demo() {
  return (
    <UiDemoShell title="Radio Group" importPath="@/components/ui/radio-group">
      <RadioGroup defaultValue="comfortable" className="max-w-sm">
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="default" id="rg-default" />
          Default
        </label>
        <label className="flex items-center gap-2 text-sm">
          <RadioGroupItem value="comfortable" id="rg-comfortable" />
          Comfortable
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <RadioGroupItem value="compact" id="rg-compact" disabled />
          Compact (disabled)
        </label>
      </RadioGroup>
    </UiDemoShell>
  );
}
