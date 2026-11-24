// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "skeleton1": () => import("@/examples/components/skeleton/skeleton1") as Promise<{ default: ComponentType }>,
  "skeleton2": () => import("@/examples/components/skeleton/skeleton2") as Promise<{ default: ComponentType }>,
  "skeleton3": () => import("@/examples/components/skeleton/skeleton3") as Promise<{ default: ComponentType }>,
  "skeleton4": () => import("@/examples/components/skeleton/skeleton4") as Promise<{ default: ComponentType }>,
  "skeleton5": () => import("@/examples/components/skeleton/skeleton5") as Promise<{ default: ComponentType }>,
  "skeleton6": () => import("@/examples/components/skeleton/skeleton6") as Promise<{ default: ComponentType }>,
  "skeleton7": () => import("@/examples/components/skeleton/skeleton7") as Promise<{ default: ComponentType }>,
};
