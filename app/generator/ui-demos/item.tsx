"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item";

export default function Demo() {
  return (
    <UiDemoShell title="Item" importPath="@/components/ui/item">
      <Item className="max-w-sm">
        <ItemMedia className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm font-medium">
          A
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Analytics report</ItemTitle>
          <ItemDescription className="text-muted-foreground">
            Updated 2 hours ago
          </ItemDescription>
        </ItemContent>
      </Item>
    </UiDemoShell>
  );
}
