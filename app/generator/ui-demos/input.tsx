"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Input } from "@/components/ui/input";

export default function Demo() {
  return (
    <UiDemoShell title="Input" importPath="@/components/ui/input">
      <div className="flex max-w-sm flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" disabled />
        <Input aria-invalid placeholder="Invalid state" defaultValue="bad@" />
      </div>
    </UiDemoShell>
  );
}
