"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { BubbleGroup, Bubble, BubbleContent } from "@/components/ui/bubble";

export default function Demo() {
  return (
    <UiDemoShell title="Bubble" importPath="@/components/ui/bubble">
      <BubbleGroup className="max-w-md">
        <Bubble variant="secondary">
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
        <Bubble variant="default" align="end">
          <BubbleContent>Show me the dashboard.</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </UiDemoShell>
  );
}
