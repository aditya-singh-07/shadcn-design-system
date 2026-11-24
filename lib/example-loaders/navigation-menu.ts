// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "navigation-menu-component3/navigation-menu-component3": () => import("@/examples/components/navigation-menu/navigation-menu-component3/navigation-menu-component3") as Promise<{ default: ComponentType }>,
  "navigation-menu2": () => import("@/examples/components/navigation-menu/navigation-menu2") as Promise<{ default: ComponentType }>,
  "navigation-menu3": () => import("@/examples/components/navigation-menu/navigation-menu3") as Promise<{ default: ComponentType }>,
  "navigation-menu4/navigation-menu4": () => import("@/examples/components/navigation-menu/navigation-menu4/navigation-menu4") as Promise<{ default: ComponentType }>,
};
