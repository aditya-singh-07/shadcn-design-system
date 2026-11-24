// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "table1": () => import("@/examples/components/table/table1") as Promise<{ default: ComponentType }>,
  "table10": () => import("@/examples/components/table/table10") as Promise<{ default: ComponentType }>,
  "table11": () => import("@/examples/components/table/table11") as Promise<{ default: ComponentType }>,
  "table12": () => import("@/examples/components/table/table12") as Promise<{ default: ComponentType }>,
  "table2": () => import("@/examples/components/table/table2") as Promise<{ default: ComponentType }>,
  "table3": () => import("@/examples/components/table/table3") as Promise<{ default: ComponentType }>,
  "table4": () => import("@/examples/components/table/table4") as Promise<{ default: ComponentType }>,
  "table5": () => import("@/examples/components/table/table5") as Promise<{ default: ComponentType }>,
  "table6": () => import("@/examples/components/table/table6") as Promise<{ default: ComponentType }>,
  "table7": () => import("@/examples/components/table/table7") as Promise<{ default: ComponentType }>,
  "table8": () => import("@/examples/components/table/table8") as Promise<{ default: ComponentType }>,
  "table9": () => import("@/examples/components/table/table9") as Promise<{ default: ComponentType }>,
};
