// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "slider1": () => import("@/examples/components/slider/slider1") as Promise<{ default: ComponentType }>,
  "slider10": () => import("@/examples/components/slider/slider10") as Promise<{ default: ComponentType }>,
  "slider11": () => import("@/examples/components/slider/slider11") as Promise<{ default: ComponentType }>,
  "slider12": () => import("@/examples/components/slider/slider12") as Promise<{ default: ComponentType }>,
  "slider13": () => import("@/examples/components/slider/slider13") as Promise<{ default: ComponentType }>,
  "slider2": () => import("@/examples/components/slider/slider2") as Promise<{ default: ComponentType }>,
  "slider3": () => import("@/examples/components/slider/slider3") as Promise<{ default: ComponentType }>,
  "slider4": () => import("@/examples/components/slider/slider4") as Promise<{ default: ComponentType }>,
  "slider5": () => import("@/examples/components/slider/slider5") as Promise<{ default: ComponentType }>,
  "slider6": () => import("@/examples/components/slider/slider6") as Promise<{ default: ComponentType }>,
  "slider7": () => import("@/examples/components/slider/slider7") as Promise<{ default: ComponentType }>,
  "slider8": () => import("@/examples/components/slider/slider8") as Promise<{ default: ComponentType }>,
  "slider9": () => import("@/examples/components/slider/slider9") as Promise<{ default: ComponentType }>,
};
