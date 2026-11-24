"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Demo() {
  return (
    <UiDemoShell title="Accordion" importPath="@/components/ui/accordion">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="one">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. It uses semantic disclosure patterns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger>Is it styled with tokens?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Colors map to your theme variables.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </UiDemoShell>
  );
}
