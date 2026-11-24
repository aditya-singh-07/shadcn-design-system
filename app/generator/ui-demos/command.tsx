"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

export default function Demo() {
  return (
    <UiDemoShell title="Command" importPath="@/components/ui/command">
      <Command className="rounded-xl border border-border shadow-sm">
        <CommandInput placeholder="Search actions..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </UiDemoShell>
  );
}
