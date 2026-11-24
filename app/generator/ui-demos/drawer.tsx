"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";

export default function Demo() {
  return (
    <UiDemoShell title="Drawer" importPath="@/components/ui/drawer">
      <Drawer>
        <DrawerTrigger
          type="button"
          className="inline-flex h-8 items-center rounded-lg border border-border bg-background px-2.5 text-sm hover:bg-muted"
        >
          Open drawer
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription className="text-muted-foreground">
              Drag the slider to set a daily target.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button
              type="button"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground"
            >
              Submit
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </UiDemoShell>
  );
}
