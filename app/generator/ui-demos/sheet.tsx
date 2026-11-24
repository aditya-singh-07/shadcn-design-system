"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export default function Demo() {
  return (
    <UiDemoShell title="Sheet" importPath="@/components/ui/sheet">
      <Sheet>
        <SheetTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open sheet
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription className="text-muted-foreground">
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </UiDemoShell>
  );
}
