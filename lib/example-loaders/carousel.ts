// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "carousel1": () => import("@/examples/components/carousel/carousel1") as Promise<{ default: ComponentType }>,
  "carousel10": () => import("@/examples/components/carousel/carousel10") as Promise<{ default: ComponentType }>,
  "carousel11": () => import("@/examples/components/carousel/carousel11") as Promise<{ default: ComponentType }>,
  "carousel12": () => import("@/examples/components/carousel/carousel12") as Promise<{ default: ComponentType }>,
  "carousel13": () => import("@/examples/components/carousel/carousel13") as Promise<{ default: ComponentType }>,
  "carousel2": () => import("@/examples/components/carousel/carousel2") as Promise<{ default: ComponentType }>,
  "carousel3": () => import("@/examples/components/carousel/carousel3") as Promise<{ default: ComponentType }>,
  "carousel4": () => import("@/examples/components/carousel/carousel4") as Promise<{ default: ComponentType }>,
  "carousel5": () => import("@/examples/components/carousel/carousel5") as Promise<{ default: ComponentType }>,
  "carousel6": () => import("@/examples/components/carousel/carousel6") as Promise<{ default: ComponentType }>,
  "carousel7": () => import("@/examples/components/carousel/carousel7") as Promise<{ default: ComponentType }>,
  "carousel8": () => import("@/examples/components/carousel/carousel8") as Promise<{ default: ComponentType }>,
  "carousel9": () => import("@/examples/components/carousel/carousel9") as Promise<{ default: ComponentType }>,
};
