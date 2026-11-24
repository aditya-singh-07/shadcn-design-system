"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";

export default function Demo() {
  return (
    <UiDemoShell title="Select" importPath="@/components/ui/select">
      <Select defaultValue="apple">
        <SelectTrigger className="w-full max-w-xs">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </UiDemoShell>
  );
}
