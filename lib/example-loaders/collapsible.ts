// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "collapsible7": () => import("@/examples/components/collapsible/collapsible7") as Promise<{ default: ComponentType }>,
  "collapsible8": () => import("@/examples/components/collapsible/collapsible8") as Promise<{ default: ComponentType }>,
};
