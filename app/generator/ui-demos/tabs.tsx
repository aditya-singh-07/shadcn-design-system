"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Demo() {
  return (
    <UiDemoShell title="Tabs" importPath="@/components/ui/tabs">
      <Tabs defaultValue="account" className="max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-sm text-muted-foreground">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password" className="text-sm text-muted-foreground">
          Change your password here.
        </TabsContent>
      </Tabs>
    </UiDemoShell>
  );
}
