// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "stepper1": () => import("@/examples/components/stepper/stepper1") as Promise<{ default: ComponentType }>,
  "stepper10": () => import("@/examples/components/stepper/stepper10") as Promise<{ default: ComponentType }>,
  "stepper11": () => import("@/examples/components/stepper/stepper11") as Promise<{ default: ComponentType }>,
  "stepper12": () => import("@/examples/components/stepper/stepper12") as Promise<{ default: ComponentType }>,
  "stepper13": () => import("@/examples/components/stepper/stepper13") as Promise<{ default: ComponentType }>,
  "stepper14": () => import("@/examples/components/stepper/stepper14") as Promise<{ default: ComponentType }>,
  "stepper2": () => import("@/examples/components/stepper/stepper2") as Promise<{ default: ComponentType }>,
  "stepper3": () => import("@/examples/components/stepper/stepper3") as Promise<{ default: ComponentType }>,
  "stepper4": () => import("@/examples/components/stepper/stepper4") as Promise<{ default: ComponentType }>,
  "stepper5": () => import("@/examples/components/stepper/stepper5") as Promise<{ default: ComponentType }>,
  "stepper6": () => import("@/examples/components/stepper/stepper6") as Promise<{ default: ComponentType }>,
  "stepper7": () => import("@/examples/components/stepper/stepper7") as Promise<{ default: ComponentType }>,
  "stepper8": () => import("@/examples/components/stepper/stepper8") as Promise<{ default: ComponentType }>,
  "stepper9": () => import("@/examples/components/stepper/stepper9") as Promise<{ default: ComponentType }>,
};
