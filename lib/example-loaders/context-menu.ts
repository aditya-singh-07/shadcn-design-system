// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "context-menu1": () => import("@/examples/components/context-menu/context-menu1") as Promise<{ default: ComponentType }>,
};
