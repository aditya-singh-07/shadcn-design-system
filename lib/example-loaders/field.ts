// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "field1": () => import("@/examples/components/field/field1") as Promise<{ default: ComponentType }>,
  "field10": () => import("@/examples/components/field/field10") as Promise<{ default: ComponentType }>,
  "field2": () => import("@/examples/components/field/field2") as Promise<{ default: ComponentType }>,
  "field3": () => import("@/examples/components/field/field3") as Promise<{ default: ComponentType }>,
  "field4": () => import("@/examples/components/field/field4") as Promise<{ default: ComponentType }>,
  "field5": () => import("@/examples/components/field/field5") as Promise<{ default: ComponentType }>,
  "field6": () => import("@/examples/components/field/field6") as Promise<{ default: ComponentType }>,
  "field7": () => import("@/examples/components/field/field7") as Promise<{ default: ComponentType }>,
  "field8": () => import("@/examples/components/field/field8") as Promise<{ default: ComponentType }>,
  "field9": () => import("@/examples/components/field/field9") as Promise<{ default: ComponentType }>,
};
