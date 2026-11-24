// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "alert-dialog1": () => import("@/examples/components/alert-dialog/alert-dialog1") as Promise<{ default: ComponentType }>,
  "alert-dialog10": () => import("@/examples/components/alert-dialog/alert-dialog10") as Promise<{ default: ComponentType }>,
  "alert-dialog11": () => import("@/examples/components/alert-dialog/alert-dialog11") as Promise<{ default: ComponentType }>,
};
