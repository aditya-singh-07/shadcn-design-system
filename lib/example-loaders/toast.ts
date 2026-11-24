// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "toast-component1": () => import("@/examples/components/toast/toast-component1") as Promise<{ default: ComponentType }>,
  "toast1": () => import("@/examples/components/toast/toast1") as Promise<{ default: ComponentType }>,
  "toast10": () => import("@/examples/components/toast/toast10") as Promise<{ default: ComponentType }>,
  "toast11": () => import("@/examples/components/toast/toast11") as Promise<{ default: ComponentType }>,
  "toast12": () => import("@/examples/components/toast/toast12") as Promise<{ default: ComponentType }>,
  "toast2": () => import("@/examples/components/toast/toast2") as Promise<{ default: ComponentType }>,
  "toast3": () => import("@/examples/components/toast/toast3") as Promise<{ default: ComponentType }>,
  "toast4": () => import("@/examples/components/toast/toast4") as Promise<{ default: ComponentType }>,
  "toast5": () => import("@/examples/components/toast/toast5") as Promise<{ default: ComponentType }>,
  "toast6": () => import("@/examples/components/toast/toast6") as Promise<{ default: ComponentType }>,
  "toast7": () => import("@/examples/components/toast/toast7") as Promise<{ default: ComponentType }>,
  "toast8": () => import("@/examples/components/toast/toast8") as Promise<{ default: ComponentType }>,
  "toast9": () => import("@/examples/components/toast/toast9") as Promise<{ default: ComponentType }>,
};
