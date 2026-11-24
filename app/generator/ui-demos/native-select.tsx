"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "@/components/ui/native-select";

export default function Demo() {
  return (
    <UiDemoShell title="Native Select" importPath="@/components/ui/native-select">
      <NativeSelect className="max-w-xs">
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </UiDemoShell>
  );
}
