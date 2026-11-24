// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "select11": () => import("@/examples/components/select/select11") as Promise<{ default: ComponentType }>,
  "select12": () => import("@/examples/components/select/select12") as Promise<{ default: ComponentType }>,
  "select13": () => import("@/examples/components/select/select13") as Promise<{ default: ComponentType }>,
  "select14": () => import("@/examples/components/select/select14") as Promise<{ default: ComponentType }>,
  "select15": () => import("@/examples/components/select/select15") as Promise<{ default: ComponentType }>,
  "select2": () => import("@/examples/components/select/select2") as Promise<{ default: ComponentType }>,
  "select3": () => import("@/examples/components/select/select3") as Promise<{ default: ComponentType }>,
  "select4": () => import("@/examples/components/select/select4") as Promise<{ default: ComponentType }>,
  "select5": () => import("@/examples/components/select/select5") as Promise<{ default: ComponentType }>,
  "select6": () => import("@/examples/components/select/select6") as Promise<{ default: ComponentType }>,
  "select7": () => import("@/examples/components/select/select7") as Promise<{ default: ComponentType }>,
  "select8": () => import("@/examples/components/select/select8") as Promise<{ default: ComponentType }>,
  "select9": () => import("@/examples/components/select/select9") as Promise<{ default: ComponentType }>,
};
