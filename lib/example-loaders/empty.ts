// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "empty1": () => import("@/examples/components/empty/empty1") as Promise<{ default: ComponentType }>,
  "empty2": () => import("@/examples/components/empty/empty2") as Promise<{ default: ComponentType }>,
  "empty3": () => import("@/examples/components/empty/empty3") as Promise<{ default: ComponentType }>,
  "empty4": () => import("@/examples/components/empty/empty4") as Promise<{ default: ComponentType }>,
  "empty5": () => import("@/examples/components/empty/empty5") as Promise<{ default: ComponentType }>,
  "empty6": () => import("@/examples/components/empty/empty6") as Promise<{ default: ComponentType }>,
  "empty7": () => import("@/examples/components/empty/empty7") as Promise<{ default: ComponentType }>,
  "empty8": () => import("@/examples/components/empty/empty8") as Promise<{ default: ComponentType }>,
};
