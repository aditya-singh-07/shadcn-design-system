"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Label } from "@/components/ui/label";

export default function Demo() {
  return (
    <UiDemoShell title="Label" importPath="@/components/ui/label">
      <div className="flex max-w-sm flex-col gap-2">
        <Label htmlFor="demo-input">Email address</Label>
        <input
          id="demo-input"
          className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
          placeholder="you@example.com"
        />
      </div>
    </UiDemoShell>
  );
}
