// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "accordion1": () => import("@/examples/components/accordion/accordion1") as Promise<{ default: ComponentType }>,
  "accordion10": () => import("@/examples/components/accordion/accordion10") as Promise<{ default: ComponentType }>,
  "accordion11": () => import("@/examples/components/accordion/accordion11") as Promise<{ default: ComponentType }>,
  "accordion12": () => import("@/examples/components/accordion/accordion12") as Promise<{ default: ComponentType }>,
  "accordion2": () => import("@/examples/components/accordion/accordion2") as Promise<{ default: ComponentType }>,
  "accordion3": () => import("@/examples/components/accordion/accordion3") as Promise<{ default: ComponentType }>,
  "accordion4": () => import("@/examples/components/accordion/accordion4") as Promise<{ default: ComponentType }>,
  "accordion5": () => import("@/examples/components/accordion/accordion5") as Promise<{ default: ComponentType }>,
  "accordion6": () => import("@/examples/components/accordion/accordion6") as Promise<{ default: ComponentType }>,
  "accordion7": () => import("@/examples/components/accordion/accordion7") as Promise<{ default: ComponentType }>,
  "accordion8": () => import("@/examples/components/accordion/accordion8") as Promise<{ default: ComponentType }>,
  "accordion9": () => import("@/examples/components/accordion/accordion9") as Promise<{ default: ComponentType }>,
};
