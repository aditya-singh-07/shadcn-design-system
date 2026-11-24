"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert";

export default function Demo() {
  return (
    <UiDemoShell title="Alert" importPath="@/components/ui/alert">
      <div className="flex w-full flex-col gap-3">
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            You can add components to your app using the CLI.
          </AlertDescription>
          <AlertAction>
            <button
              type="button"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Learn more
            </button>
          </AlertAction>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Your session has expired.</AlertDescription>
        </Alert>
      </div>
    </UiDemoShell>
  );
}
