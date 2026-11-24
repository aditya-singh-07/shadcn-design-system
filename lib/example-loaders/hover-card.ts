// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "hover-card1": () => import("@/examples/components/hover-card/hover-card1") as Promise<{ default: ComponentType }>,
  "hover-card2": () => import("@/examples/components/hover-card/hover-card2") as Promise<{ default: ComponentType }>,
  "hover-card3": () => import("@/examples/components/hover-card/hover-card3") as Promise<{ default: ComponentType }>,
};
