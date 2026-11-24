// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "code-block1": () => import("@/examples/components/code-block/code-block1") as Promise<{ default: ComponentType }>,
  "code-block18": () => import("@/examples/components/code-block/code-block18") as Promise<{ default: ComponentType }>,
};
