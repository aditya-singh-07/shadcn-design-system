"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";

export default function Demo() {
  return (
    <UiDemoShell title="Input Group" importPath="@/components/ui/input-group">
      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="yoursite.com" />
      </InputGroup>
    </UiDemoShell>
  );
}
