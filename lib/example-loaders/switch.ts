// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "switch1": () => import("@/examples/components/switch/switch1") as Promise<{ default: ComponentType }>,
  "switch10": () => import("@/examples/components/switch/switch10") as Promise<{ default: ComponentType }>,
  "switch2": () => import("@/examples/components/switch/switch2") as Promise<{ default: ComponentType }>,
  "switch3": () => import("@/examples/components/switch/switch3") as Promise<{ default: ComponentType }>,
  "switch4": () => import("@/examples/components/switch/switch4") as Promise<{ default: ComponentType }>,
  "switch5": () => import("@/examples/components/switch/switch5") as Promise<{ default: ComponentType }>,
  "switch6": () => import("@/examples/components/switch/switch6") as Promise<{ default: ComponentType }>,
  "switch7": () => import("@/examples/components/switch/switch7") as Promise<{ default: ComponentType }>,
  "switch8": () => import("@/examples/components/switch/switch8") as Promise<{ default: ComponentType }>,
  "switch9": () => import("@/examples/components/switch/switch9") as Promise<{ default: ComponentType }>,
};
