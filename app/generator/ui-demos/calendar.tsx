"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

const [date, setDate] = React.useState<Date | undefined>(new Date());

export default function Demo() {
  return (
    <UiDemoShell title="Calendar" importPath="@/components/ui/calendar">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border border-border bg-background"
      />
    </UiDemoShell>
  );
}
