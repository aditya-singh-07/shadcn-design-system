"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from "@/components/ui/empty";

export default function Demo() {
  return (
    <UiDemoShell title="Empty" importPath="@/components/ui/empty">
      <Empty className="border border-border">
        <EmptyHeader>
          <EmptyMedia variant="icon">📭</EmptyMedia>
          <EmptyTitle>No messages yet</EmptyTitle>
          <EmptyDescription className="text-muted-foreground">
            Start a conversation to see messages here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </UiDemoShell>
  );
}
