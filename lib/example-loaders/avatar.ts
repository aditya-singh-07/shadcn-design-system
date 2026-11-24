// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "avatar16": () => import("@/examples/components/avatar/avatar16") as Promise<{ default: ComponentType }>,
  "avatar17": () => import("@/examples/components/avatar/avatar17") as Promise<{ default: ComponentType }>,
  "avatar18": () => import("@/examples/components/avatar/avatar18") as Promise<{ default: ComponentType }>,
  "avatar19": () => import("@/examples/components/avatar/avatar19") as Promise<{ default: ComponentType }>,
  "avatar2": () => import("@/examples/components/avatar/avatar2") as Promise<{ default: ComponentType }>,
  "avatar20": () => import("@/examples/components/avatar/avatar20") as Promise<{ default: ComponentType }>,
  "avatar21": () => import("@/examples/components/avatar/avatar21") as Promise<{ default: ComponentType }>,
  "avatar3": () => import("@/examples/components/avatar/avatar3") as Promise<{ default: ComponentType }>,
  "avatar4": () => import("@/examples/components/avatar/avatar4") as Promise<{ default: ComponentType }>,
  "avatar5": () => import("@/examples/components/avatar/avatar5") as Promise<{ default: ComponentType }>,
  "avatar6": () => import("@/examples/components/avatar/avatar6") as Promise<{ default: ComponentType }>,
  "avatar7": () => import("@/examples/components/avatar/avatar7") as Promise<{ default: ComponentType }>,
  "avatar8": () => import("@/examples/components/avatar/avatar8") as Promise<{ default: ComponentType }>,
  "avatar9": () => import("@/examples/components/avatar/avatar9") as Promise<{ default: ComponentType }>,
};
