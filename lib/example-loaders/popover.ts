// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "popover1": () => import("@/examples/components/popover/popover1") as Promise<{ default: ComponentType }>,
  "popover2": () => import("@/examples/components/popover/popover2") as Promise<{ default: ComponentType }>,
  "popover3": () => import("@/examples/components/popover/popover3") as Promise<{ default: ComponentType }>,
  "popover4": () => import("@/examples/components/popover/popover4") as Promise<{ default: ComponentType }>,
  "popover5": () => import("@/examples/components/popover/popover5") as Promise<{ default: ComponentType }>,
  "popover6": () => import("@/examples/components/popover/popover6") as Promise<{ default: ComponentType }>,
};
