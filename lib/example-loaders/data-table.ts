// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "data-table1": () => import("@/examples/components/data-table/data-table1") as Promise<{ default: ComponentType }>,
  "data-table2": () => import("@/examples/components/data-table/data-table2") as Promise<{ default: ComponentType }>,
  "data-table3": () => import("@/examples/components/data-table/data-table3") as Promise<{ default: ComponentType }>,
  "data-table4": () => import("@/examples/components/data-table/data-table4") as Promise<{ default: ComponentType }>,
  "data-table5": () => import("@/examples/components/data-table/data-table5") as Promise<{ default: ComponentType }>,
  "data-table6": () => import("@/examples/components/data-table/data-table6") as Promise<{ default: ComponentType }>,
};
