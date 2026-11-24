// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "scroll-area1": () => import("@/examples/components/scroll-area/scroll-area1") as Promise<{ default: ComponentType }>,
  "scroll-area3": () => import("@/examples/components/scroll-area/scroll-area3") as Promise<{ default: ComponentType }>,
  "scroll-area4": () => import("@/examples/components/scroll-area/scroll-area4") as Promise<{ default: ComponentType }>,
  "scroll-area5": () => import("@/examples/components/scroll-area/scroll-area5") as Promise<{ default: ComponentType }>,
  "scroll-area6": () => import("@/examples/components/scroll-area/scroll-area6") as Promise<{ default: ComponentType }>,
};
