// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "pagination1": () => import("@/examples/components/pagination/pagination1") as Promise<{ default: ComponentType }>,
  "pagination10": () => import("@/examples/components/pagination/pagination10") as Promise<{ default: ComponentType }>,
  "pagination11": () => import("@/examples/components/pagination/pagination11") as Promise<{ default: ComponentType }>,
  "pagination12": () => import("@/examples/components/pagination/pagination12") as Promise<{ default: ComponentType }>,
  "pagination2": () => import("@/examples/components/pagination/pagination2") as Promise<{ default: ComponentType }>,
  "pagination3": () => import("@/examples/components/pagination/pagination3") as Promise<{ default: ComponentType }>,
  "pagination4": () => import("@/examples/components/pagination/pagination4") as Promise<{ default: ComponentType }>,
  "pagination5": () => import("@/examples/components/pagination/pagination5") as Promise<{ default: ComponentType }>,
  "pagination6": () => import("@/examples/components/pagination/pagination6") as Promise<{ default: ComponentType }>,
  "pagination7": () => import("@/examples/components/pagination/pagination7") as Promise<{ default: ComponentType }>,
  "pagination8": () => import("@/examples/components/pagination/pagination8") as Promise<{ default: ComponentType }>,
  "pagination9": () => import("@/examples/components/pagination/pagination9") as Promise<{ default: ComponentType }>,
};
