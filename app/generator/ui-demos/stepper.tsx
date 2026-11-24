"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Stepper, StepperItem, StepperTrigger, StepperIndicator, StepperTitle, StepperDescription, StepperNav } from "@/components/ui/stepper";

export default function Demo() {
  return (
    <UiDemoShell title="Stepper" importPath="@/components/ui/stepper">
      <Stepper defaultValue={2} className="max-w-md">
        <StepperNav>
          <StepperItem step={1}>
            <StepperTrigger>
              <StepperIndicator />
              <div className="flex flex-col items-start text-left">
                <StepperTitle>Account</StepperTitle>
                <StepperDescription className="text-muted-foreground">
                  Sign in
                </StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
          <StepperItem step={2}>
            <StepperTrigger>
              <StepperIndicator />
              <div className="flex flex-col items-start text-left">
                <StepperTitle>Details</StepperTitle>
                <StepperDescription className="text-muted-foreground">
                  Profile info
                </StepperDescription>
              </div>
            </StepperTrigger>
          </StepperItem>
        </StepperNav>
      </Stepper>
    </UiDemoShell>
  );
}
