"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Field, FieldLabel, FieldDescription, FieldGroup } from "@/components/ui/field";

export default function Demo() {
  return (
    <UiDemoShell title="Field" importPath="@/components/ui/field">
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <input
            id="username"
            className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            placeholder="shadcn"
          />
          <FieldDescription className="text-muted-foreground">
            Your public display name.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </UiDemoShell>
  );
}
