// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "drawer1": () => import("@/examples/components/drawer/drawer1") as Promise<{ default: ComponentType }>,
  "drawer2": () => import("@/examples/components/drawer/drawer2") as Promise<{ default: ComponentType }>,
  "drawer3": () => import("@/examples/components/drawer/drawer3") as Promise<{ default: ComponentType }>,
  "drawer4": () => import("@/examples/components/drawer/drawer4") as Promise<{ default: ComponentType }>,
  "drawer5": () => import("@/examples/components/drawer/drawer5") as Promise<{ default: ComponentType }>,
  "drawer6": () => import("@/examples/components/drawer/drawer6") as Promise<{ default: ComponentType }>,
};
