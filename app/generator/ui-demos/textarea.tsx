"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Textarea } from "@/components/ui/textarea";

export default function Demo() {
  return (
    <UiDemoShell title="Textarea" importPath="@/components/ui/textarea">
      <Textarea
        className="max-w-sm"
        placeholder="Type your message here."
        rows={4}
      />
    </UiDemoShell>
  );
}
