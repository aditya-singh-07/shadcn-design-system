"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar";

export default function Demo() {
  return (
    <UiDemoShell title="Sidebar" importPath="@/components/ui/sidebar">
      <SidebarProvider>
        <div className="flex min-h-48 w-full overflow-hidden rounded-xl border border-border">
          <Sidebar>
            <SidebarHeader className="px-2 py-3 text-sm font-medium">
              Workspace
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Home</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Inbox</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="flex flex-1 items-center justify-center p-4 text-sm text-muted-foreground">
            Main content
          </SidebarInset>
        </div>
      </SidebarProvider>
    </UiDemoShell>
  );
}
