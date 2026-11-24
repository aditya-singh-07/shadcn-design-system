// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "alert1": () => import("@/examples/components/alert/alert1") as Promise<{ default: ComponentType }>,
  "alert10": () => import("@/examples/components/alert/alert10") as Promise<{ default: ComponentType }>,
  "alert11": () => import("@/examples/components/alert/alert11") as Promise<{ default: ComponentType }>,
  "alert12": () => import("@/examples/components/alert/alert12") as Promise<{ default: ComponentType }>,
  "alert13": () => import("@/examples/components/alert/alert13") as Promise<{ default: ComponentType }>,
  "alert14": () => import("@/examples/components/alert/alert14") as Promise<{ default: ComponentType }>,
  "alert15": () => import("@/examples/components/alert/alert15") as Promise<{ default: ComponentType }>,
  "alert2": () => import("@/examples/components/alert/alert2") as Promise<{ default: ComponentType }>,
  "alert3": () => import("@/examples/components/alert/alert3") as Promise<{ default: ComponentType }>,
  "alert4": () => import("@/examples/components/alert/alert4") as Promise<{ default: ComponentType }>,
  "alert5": () => import("@/examples/components/alert/alert5") as Promise<{ default: ComponentType }>,
  "alert6": () => import("@/examples/components/alert/alert6") as Promise<{ default: ComponentType }>,
  "alert7": () => import("@/examples/components/alert/alert7") as Promise<{ default: ComponentType }>,
  "alert8": () => import("@/examples/components/alert/alert8") as Promise<{ default: ComponentType }>,
  "alert9": () => import("@/examples/components/alert/alert9") as Promise<{ default: ComponentType }>,
};
