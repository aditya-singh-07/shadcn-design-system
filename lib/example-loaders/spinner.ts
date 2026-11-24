// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "spinner1": () => import("@/examples/components/spinner/spinner1") as Promise<{ default: ComponentType }>,
  "spinner10": () => import("@/examples/components/spinner/spinner10") as Promise<{ default: ComponentType }>,
  "spinner11": () => import("@/examples/components/spinner/spinner11") as Promise<{ default: ComponentType }>,
  "spinner12": () => import("@/examples/components/spinner/spinner12") as Promise<{ default: ComponentType }>,
  "spinner13": () => import("@/examples/components/spinner/spinner13") as Promise<{ default: ComponentType }>,
  "spinner14": () => import("@/examples/components/spinner/spinner14") as Promise<{ default: ComponentType }>,
  "spinner2": () => import("@/examples/components/spinner/spinner2") as Promise<{ default: ComponentType }>,
  "spinner3": () => import("@/examples/components/spinner/spinner3") as Promise<{ default: ComponentType }>,
  "spinner4": () => import("@/examples/components/spinner/spinner4") as Promise<{ default: ComponentType }>,
  "spinner5": () => import("@/examples/components/spinner/spinner5") as Promise<{ default: ComponentType }>,
  "spinner6": () => import("@/examples/components/spinner/spinner6") as Promise<{ default: ComponentType }>,
  "spinner7": () => import("@/examples/components/spinner/spinner7") as Promise<{ default: ComponentType }>,
  "spinner8": () => import("@/examples/components/spinner/spinner8") as Promise<{ default: ComponentType }>,
  "spinner9": () => import("@/examples/components/spinner/spinner9") as Promise<{ default: ComponentType }>,
};
