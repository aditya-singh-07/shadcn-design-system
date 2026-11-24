"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group";

export default function Demo() {
  return (
    <UiDemoShell title="Button Group" importPath="@/components/ui/button-group">
      <ButtonGroup aria-label="Actions">
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          Save
        </button>
        <ButtonGroupSeparator />
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Cancel
        </button>
        <ButtonGroupText className="text-muted-foreground">Draft</ButtonGroupText>
      </ButtonGroup>
    </UiDemoShell>
  );
}
