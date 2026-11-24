// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "tabs1": () => import("@/examples/components/tabs/tabs1") as Promise<{ default: ComponentType }>,
  "tabs10": () => import("@/examples/components/tabs/tabs10") as Promise<{ default: ComponentType }>,
  "tabs11": () => import("@/examples/components/tabs/tabs11") as Promise<{ default: ComponentType }>,
  "tabs12": () => import("@/examples/components/tabs/tabs12") as Promise<{ default: ComponentType }>,
  "tabs13": () => import("@/examples/components/tabs/tabs13") as Promise<{ default: ComponentType }>,
  "tabs14": () => import("@/examples/components/tabs/tabs14") as Promise<{ default: ComponentType }>,
  "tabs15": () => import("@/examples/components/tabs/tabs15") as Promise<{ default: ComponentType }>,
  "tabs2": () => import("@/examples/components/tabs/tabs2") as Promise<{ default: ComponentType }>,
  "tabs3": () => import("@/examples/components/tabs/tabs3") as Promise<{ default: ComponentType }>,
  "tabs4": () => import("@/examples/components/tabs/tabs4") as Promise<{ default: ComponentType }>,
  "tabs5": () => import("@/examples/components/tabs/tabs5") as Promise<{ default: ComponentType }>,
  "tabs6": () => import("@/examples/components/tabs/tabs6") as Promise<{ default: ComponentType }>,
  "tabs7": () => import("@/examples/components/tabs/tabs7") as Promise<{ default: ComponentType }>,
  "tabs8": () => import("@/examples/components/tabs/tabs8") as Promise<{ default: ComponentType }>,
  "tabs9": () => import("@/examples/components/tabs/tabs9") as Promise<{ default: ComponentType }>,
};
