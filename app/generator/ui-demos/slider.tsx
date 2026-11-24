"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import * as React from "react";
import { Slider } from "@/components/ui/slider";

const [value, setValue] = React.useState([42]);

export default function Demo() {
  return (
    <UiDemoShell title="Slider" importPath="@/components/ui/slider">
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        className="max-w-sm"
      />
    </UiDemoShell>
  );
}
