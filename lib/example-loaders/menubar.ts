// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "menubar1": () => import("@/examples/components/menubar/menubar1") as Promise<{ default: ComponentType }>,
};
