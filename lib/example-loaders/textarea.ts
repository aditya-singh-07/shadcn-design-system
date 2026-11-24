// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "textarea1": () => import("@/examples/components/textarea/textarea1") as Promise<{ default: ComponentType }>,
  "textarea10": () => import("@/examples/components/textarea/textarea10") as Promise<{ default: ComponentType }>,
  "textarea11": () => import("@/examples/components/textarea/textarea11") as Promise<{ default: ComponentType }>,
  "textarea2": () => import("@/examples/components/textarea/textarea2") as Promise<{ default: ComponentType }>,
  "textarea3": () => import("@/examples/components/textarea/textarea3") as Promise<{ default: ComponentType }>,
  "textarea4": () => import("@/examples/components/textarea/textarea4") as Promise<{ default: ComponentType }>,
  "textarea5": () => import("@/examples/components/textarea/textarea5") as Promise<{ default: ComponentType }>,
  "textarea6": () => import("@/examples/components/textarea/textarea6") as Promise<{ default: ComponentType }>,
  "textarea7": () => import("@/examples/components/textarea/textarea7") as Promise<{ default: ComponentType }>,
  "textarea8": () => import("@/examples/components/textarea/textarea8") as Promise<{ default: ComponentType }>,
  "textarea9": () => import("@/examples/components/textarea/textarea9") as Promise<{ default: ComponentType }>,
};
