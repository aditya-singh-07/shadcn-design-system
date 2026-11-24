"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Demo() {
  return (
    <UiDemoShell title="Card" importPath="@/components/ui/card">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Project overview</CardTitle>
          <CardDescription className="text-muted-foreground">
            Deployments and activity for this workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          12 open tasks · 3 reviewers assigned
        </CardContent>
        <CardFooter>
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          >
            View details
          </button>
        </CardFooter>
      </Card>
    </UiDemoShell>
  );
}
