// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "card1": () => import("@/examples/components/card/card1") as Promise<{ default: ComponentType }>,
  "card2": () => import("@/examples/components/card/card2") as Promise<{ default: ComponentType }>,
  "card3": () => import("@/examples/components/card/card3") as Promise<{ default: ComponentType }>,
  "card4": () => import("@/examples/components/card/card4") as Promise<{ default: ComponentType }>,
  "card5": () => import("@/examples/components/card/card5") as Promise<{ default: ComponentType }>,
  "card6": () => import("@/examples/components/card/card6") as Promise<{ default: ComponentType }>,
  "card7": () => import("@/examples/components/card/card7") as Promise<{ default: ComponentType }>,
  "card8": () => import("@/examples/components/card/card8") as Promise<{ default: ComponentType }>,
  "card9": () => import("@/examples/components/card/card9") as Promise<{ default: ComponentType }>,
};
