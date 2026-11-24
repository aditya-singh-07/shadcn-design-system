// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "dropdown-menu1": () => import("@/examples/components/dropdown-menu/dropdown-menu1") as Promise<{ default: ComponentType }>,
  "dropdown-menu10": () => import("@/examples/components/dropdown-menu/dropdown-menu10") as Promise<{ default: ComponentType }>,
  "dropdown-menu11": () => import("@/examples/components/dropdown-menu/dropdown-menu11") as Promise<{ default: ComponentType }>,
  "dropdown-menu12": () => import("@/examples/components/dropdown-menu/dropdown-menu12") as Promise<{ default: ComponentType }>,
  "dropdown-menu2": () => import("@/examples/components/dropdown-menu/dropdown-menu2") as Promise<{ default: ComponentType }>,
  "dropdown-menu3": () => import("@/examples/components/dropdown-menu/dropdown-menu3") as Promise<{ default: ComponentType }>,
  "dropdown-menu4": () => import("@/examples/components/dropdown-menu/dropdown-menu4") as Promise<{ default: ComponentType }>,
  "dropdown-menu5": () => import("@/examples/components/dropdown-menu/dropdown-menu5") as Promise<{ default: ComponentType }>,
  "dropdown-menu6": () => import("@/examples/components/dropdown-menu/dropdown-menu6") as Promise<{ default: ComponentType }>,
  "dropdown-menu7": () => import("@/examples/components/dropdown-menu/dropdown-menu7") as Promise<{ default: ComponentType }>,
  "dropdown-menu8": () => import("@/examples/components/dropdown-menu/dropdown-menu8") as Promise<{ default: ComponentType }>,
  "dropdown-menu9": () => import("@/examples/components/dropdown-menu/dropdown-menu9") as Promise<{ default: ComponentType }>,
};
