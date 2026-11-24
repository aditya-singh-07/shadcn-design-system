"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox";

const fruits = ["Apple", "Banana", "Cherry", "Date"] as const;

export default function Demo() {
  return (
    <UiDemoShell title="Combobox" importPath="@/components/ui/combobox">
      <Combobox defaultValue="Apple">
        <ComboboxInput placeholder="Pick a fruit" className="w-full max-w-xs" />
        <ComboboxContent>
          <ComboboxEmpty>No results</ComboboxEmpty>
          <ComboboxList>
            {fruits.map((fruit) => (
              <ComboboxItem key={fruit} value={fruit}>
                {fruit}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </UiDemoShell>
  );
}
