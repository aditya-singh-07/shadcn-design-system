"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Demo() {
  return (
    <UiDemoShell title="Navigation Menu" importPath="@/components/ui/navigation-menu">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-64 gap-2 p-2 text-sm">
                <li>
                  <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-muted">
                    Introduction
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#" className="block rounded-md p-2 hover:bg-muted">
                    Installation
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </UiDemoShell>
  );
}
