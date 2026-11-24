// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "sheet1": () => import("@/examples/components/sheet/sheet1") as Promise<{ default: ComponentType }>,
  "sheet2": () => import("@/examples/components/sheet/sheet2") as Promise<{ default: ComponentType }>,
  "sheet3": () => import("@/examples/components/sheet/sheet3") as Promise<{ default: ComponentType }>,
  "sheet4": () => import("@/examples/components/sheet/sheet4") as Promise<{ default: ComponentType }>,
  "sheet5": () => import("@/examples/components/sheet/sheet5") as Promise<{ default: ComponentType }>,
  "sheet6": () => import("@/examples/components/sheet/sheet6") as Promise<{ default: ComponentType }>,
  "sheet7": () => import("@/examples/components/sheet/sheet7") as Promise<{ default: ComponentType }>,
  "sheet8": () => import("@/examples/components/sheet/sheet8") as Promise<{ default: ComponentType }>,
};
