// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "attachment1": () => import("@/examples/components/attachment/attachment1") as Promise<{ default: ComponentType }>,
  "attachment4": () => import("@/examples/components/attachment/attachment4") as Promise<{ default: ComponentType }>,
};
