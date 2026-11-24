// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "command1": () => import("@/examples/components/command/command1") as Promise<{ default: ComponentType }>,
  "command2": () => import("@/examples/components/command/command2") as Promise<{ default: ComponentType }>,
  "command3": () => import("@/examples/components/command/command3") as Promise<{ default: ComponentType }>,
  "command4": () => import("@/examples/components/command/command4") as Promise<{ default: ComponentType }>,
  "command5": () => import("@/examples/components/command/command5") as Promise<{ default: ComponentType }>,
  "command6": () => import("@/examples/components/command/command6") as Promise<{ default: ComponentType }>,
  "command7": () => import("@/examples/components/command/command7") as Promise<{ default: ComponentType }>,
  "command8": () => import("@/examples/components/command/command8") as Promise<{ default: ComponentType }>,
  "command9": () => import("@/examples/components/command/command9") as Promise<{ default: ComponentType }>,
};
