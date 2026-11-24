"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Demo() {
  return (
    <UiDemoShell title="Avatar" importPath="@/components/ui/avatar">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-muted text-foreground">SC</AvatarFallback>
        </Avatar>
        <Avatar className="size-10">
          <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
      </div>
    </UiDemoShell>
  );
}
