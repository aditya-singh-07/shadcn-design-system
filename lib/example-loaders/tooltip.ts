// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "tooltip1": () => import("@/examples/components/tooltip/tooltip1") as Promise<{ default: ComponentType }>,
  "tooltip2": () => import("@/examples/components/tooltip/tooltip2") as Promise<{ default: ComponentType }>,
  "tooltip3": () => import("@/examples/components/tooltip/tooltip3") as Promise<{ default: ComponentType }>,
  "tooltip4": () => import("@/examples/components/tooltip/tooltip4") as Promise<{ default: ComponentType }>,
  "tooltip5": () => import("@/examples/components/tooltip/tooltip5") as Promise<{ default: ComponentType }>,
  "tooltip6": () => import("@/examples/components/tooltip/tooltip6") as Promise<{ default: ComponentType }>,
  "tooltip7": () => import("@/examples/components/tooltip/tooltip7") as Promise<{ default: ComponentType }>,
  "tooltip8": () => import("@/examples/components/tooltip/tooltip8") as Promise<{ default: ComponentType }>,
};
