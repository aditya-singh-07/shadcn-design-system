"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Toaster, toast } from "@/components/ui/toast";

export default function Demo() {
  return (
    <UiDemoShell title="Toast" importPath="@/components/ui/toast">
      <div className="space-y-3">
        <button
          type="button"
          className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          onClick={() =>
            toast.add({
              title: "Saved",
              description: "Your changes have been stored.",
            })
          }
        >
          Show toast
        </button>
        <Toaster />
      </div>
    </UiDemoShell>
  );
}
