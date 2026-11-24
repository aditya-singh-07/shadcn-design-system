// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "progress1": () => import("@/examples/components/progress/progress1") as Promise<{ default: ComponentType }>,
  "progress10": () => import("@/examples/components/progress/progress10") as Promise<{ default: ComponentType }>,
  "progress2": () => import("@/examples/components/progress/progress2") as Promise<{ default: ComponentType }>,
  "progress3": () => import("@/examples/components/progress/progress3") as Promise<{ default: ComponentType }>,
  "progress4": () => import("@/examples/components/progress/progress4") as Promise<{ default: ComponentType }>,
  "progress5": () => import("@/examples/components/progress/progress5") as Promise<{ default: ComponentType }>,
  "progress6": () => import("@/examples/components/progress/progress6") as Promise<{ default: ComponentType }>,
  "progress7": () => import("@/examples/components/progress/progress7") as Promise<{ default: ComponentType }>,
  "progress8": () => import("@/examples/components/progress/progress8") as Promise<{ default: ComponentType }>,
  "progress9": () => import("@/examples/components/progress/progress9") as Promise<{ default: ComponentType }>,
};
