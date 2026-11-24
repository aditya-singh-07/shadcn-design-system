// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "checkbox1": () => import("@/examples/components/checkbox/checkbox1") as Promise<{ default: ComponentType }>,
  "checkbox10": () => import("@/examples/components/checkbox/checkbox10") as Promise<{ default: ComponentType }>,
  "checkbox11": () => import("@/examples/components/checkbox/checkbox11") as Promise<{ default: ComponentType }>,
  "checkbox12": () => import("@/examples/components/checkbox/checkbox12") as Promise<{ default: ComponentType }>,
  "checkbox13": () => import("@/examples/components/checkbox/checkbox13") as Promise<{ default: ComponentType }>,
  "checkbox2": () => import("@/examples/components/checkbox/checkbox2") as Promise<{ default: ComponentType }>,
  "checkbox3": () => import("@/examples/components/checkbox/checkbox3") as Promise<{ default: ComponentType }>,
  "checkbox4": () => import("@/examples/components/checkbox/checkbox4") as Promise<{ default: ComponentType }>,
  "checkbox5": () => import("@/examples/components/checkbox/checkbox5") as Promise<{ default: ComponentType }>,
  "checkbox6": () => import("@/examples/components/checkbox/checkbox6") as Promise<{ default: ComponentType }>,
  "checkbox7": () => import("@/examples/components/checkbox/checkbox7") as Promise<{ default: ComponentType }>,
  "checkbox8": () => import("@/examples/components/checkbox/checkbox8") as Promise<{ default: ComponentType }>,
  "checkbox9": () => import("@/examples/components/checkbox/checkbox9") as Promise<{ default: ComponentType }>,
};
