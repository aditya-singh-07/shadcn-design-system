// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "combobox1": () => import("@/examples/components/combobox/combobox1") as Promise<{ default: ComponentType }>,
  "combobox10": () => import("@/examples/components/combobox/combobox10") as Promise<{ default: ComponentType }>,
  "combobox11": () => import("@/examples/components/combobox/combobox11") as Promise<{ default: ComponentType }>,
  "combobox12": () => import("@/examples/components/combobox/combobox12") as Promise<{ default: ComponentType }>,
  "combobox2": () => import("@/examples/components/combobox/combobox2") as Promise<{ default: ComponentType }>,
  "combobox3": () => import("@/examples/components/combobox/combobox3") as Promise<{ default: ComponentType }>,
  "combobox4": () => import("@/examples/components/combobox/combobox4") as Promise<{ default: ComponentType }>,
  "combobox5": () => import("@/examples/components/combobox/combobox5") as Promise<{ default: ComponentType }>,
  "combobox6": () => import("@/examples/components/combobox/combobox6") as Promise<{ default: ComponentType }>,
  "combobox7": () => import("@/examples/components/combobox/combobox7") as Promise<{ default: ComponentType }>,
  "combobox8": () => import("@/examples/components/combobox/combobox8") as Promise<{ default: ComponentType }>,
  "combobox9": () => import("@/examples/components/combobox/combobox9") as Promise<{ default: ComponentType }>,
};
