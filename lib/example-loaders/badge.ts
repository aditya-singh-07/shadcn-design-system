// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "badge1": () => import("@/examples/components/badge/badge1") as Promise<{ default: ComponentType }>,
  "badge10": () => import("@/examples/components/badge/badge10") as Promise<{ default: ComponentType }>,
  "badge11": () => import("@/examples/components/badge/badge11") as Promise<{ default: ComponentType }>,
  "badge12": () => import("@/examples/components/badge/badge12") as Promise<{ default: ComponentType }>,
  "badge13": () => import("@/examples/components/badge/badge13") as Promise<{ default: ComponentType }>,
  "badge14": () => import("@/examples/components/badge/badge14") as Promise<{ default: ComponentType }>,
  "badge15": () => import("@/examples/components/badge/badge15") as Promise<{ default: ComponentType }>,
  "badge16": () => import("@/examples/components/badge/badge16") as Promise<{ default: ComponentType }>,
  "badge17": () => import("@/examples/components/badge/badge17") as Promise<{ default: ComponentType }>,
  "badge2": () => import("@/examples/components/badge/badge2") as Promise<{ default: ComponentType }>,
  "badge3": () => import("@/examples/components/badge/badge3") as Promise<{ default: ComponentType }>,
  "badge4": () => import("@/examples/components/badge/badge4") as Promise<{ default: ComponentType }>,
  "badge5": () => import("@/examples/components/badge/badge5") as Promise<{ default: ComponentType }>,
  "badge6": () => import("@/examples/components/badge/badge6") as Promise<{ default: ComponentType }>,
  "badge7": () => import("@/examples/components/badge/badge7") as Promise<{ default: ComponentType }>,
  "badge8": () => import("@/examples/components/badge/badge8") as Promise<{ default: ComponentType }>,
};
