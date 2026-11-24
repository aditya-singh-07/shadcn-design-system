// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "toggle-component8": () => import("@/examples/components/toggle/toggle-component8") as Promise<{ default: ComponentType }>,
  "toggle1": () => import("@/examples/components/toggle/toggle1") as Promise<{ default: ComponentType }>,
  "toggle2": () => import("@/examples/components/toggle/toggle2") as Promise<{ default: ComponentType }>,
  "toggle3": () => import("@/examples/components/toggle/toggle3") as Promise<{ default: ComponentType }>,
  "toggle4": () => import("@/examples/components/toggle/toggle4") as Promise<{ default: ComponentType }>,
  "toggle5": () => import("@/examples/components/toggle/toggle5") as Promise<{ default: ComponentType }>,
  "toggle6": () => import("@/examples/components/toggle/toggle6") as Promise<{ default: ComponentType }>,
  "toggle7": () => import("@/examples/components/toggle/toggle7") as Promise<{ default: ComponentType }>,
};
