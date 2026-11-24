// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "separator1": () => import("@/examples/components/separator/separator1") as Promise<{ default: ComponentType }>,
  "separator10": () => import("@/examples/components/separator/separator10") as Promise<{ default: ComponentType }>,
  "separator11": () => import("@/examples/components/separator/separator11") as Promise<{ default: ComponentType }>,
  "separator12": () => import("@/examples/components/separator/separator12") as Promise<{ default: ComponentType }>,
  "separator13": () => import("@/examples/components/separator/separator13") as Promise<{ default: ComponentType }>,
  "separator14": () => import("@/examples/components/separator/separator14") as Promise<{ default: ComponentType }>,
  "separator15": () => import("@/examples/components/separator/separator15") as Promise<{ default: ComponentType }>,
  "separator16": () => import("@/examples/components/separator/separator16") as Promise<{ default: ComponentType }>,
  "separator2": () => import("@/examples/components/separator/separator2") as Promise<{ default: ComponentType }>,
  "separator3": () => import("@/examples/components/separator/separator3") as Promise<{ default: ComponentType }>,
  "separator4": () => import("@/examples/components/separator/separator4") as Promise<{ default: ComponentType }>,
  "separator5": () => import("@/examples/components/separator/separator5") as Promise<{ default: ComponentType }>,
  "separator6": () => import("@/examples/components/separator/separator6") as Promise<{ default: ComponentType }>,
  "separator7": () => import("@/examples/components/separator/separator7") as Promise<{ default: ComponentType }>,
  "separator8": () => import("@/examples/components/separator/separator8") as Promise<{ default: ComponentType }>,
  "separator9": () => import("@/examples/components/separator/separator9") as Promise<{ default: ComponentType }>,
};
