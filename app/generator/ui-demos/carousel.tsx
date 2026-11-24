"use client";

import { UiDemoShell } from "@/app/generator/ui-demos/shell";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Demo() {
  return (
    <UiDemoShell title="Carousel" importPath="@/components/ui/carousel">
      <Carousel className="mx-auto w-full max-w-xs">
        <CarouselContent>
          {["Design", "Build", "Ship"].map((step) => (
            <CarouselItem key={step}>
              <div className="flex aspect-square items-center justify-center rounded-xl border border-border bg-muted text-sm font-medium">
                {step}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </UiDemoShell>
  );
}
