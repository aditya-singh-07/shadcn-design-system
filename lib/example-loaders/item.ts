// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "item1": () => import("@/examples/components/item/item1") as Promise<{ default: ComponentType }>,
  "item10": () => import("@/examples/components/item/item10") as Promise<{ default: ComponentType }>,
  "item2": () => import("@/examples/components/item/item2") as Promise<{ default: ComponentType }>,
  "item3": () => import("@/examples/components/item/item3") as Promise<{ default: ComponentType }>,
  "item4": () => import("@/examples/components/item/item4") as Promise<{ default: ComponentType }>,
  "item5": () => import("@/examples/components/item/item5") as Promise<{ default: ComponentType }>,
  "item6": () => import("@/examples/components/item/item6") as Promise<{ default: ComponentType }>,
  "item7": () => import("@/examples/components/item/item7") as Promise<{ default: ComponentType }>,
  "item8": () => import("@/examples/components/item/item8") as Promise<{ default: ComponentType }>,
  "item9": () => import("@/examples/components/item/item9") as Promise<{ default: ComponentType }>,
};
