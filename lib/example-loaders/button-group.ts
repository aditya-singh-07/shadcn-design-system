// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "button-group1": () => import("@/examples/components/button-group/button-group1") as Promise<{ default: ComponentType }>,
  "button-group10": () => import("@/examples/components/button-group/button-group10") as Promise<{ default: ComponentType }>,
  "button-group11": () => import("@/examples/components/button-group/button-group11") as Promise<{ default: ComponentType }>,
  "button-group12": () => import("@/examples/components/button-group/button-group12") as Promise<{ default: ComponentType }>,
  "button-group13": () => import("@/examples/components/button-group/button-group13") as Promise<{ default: ComponentType }>,
  "button-group14": () => import("@/examples/components/button-group/button-group14") as Promise<{ default: ComponentType }>,
  "button-group15": () => import("@/examples/components/button-group/button-group15") as Promise<{ default: ComponentType }>,
  "button-group16": () => import("@/examples/components/button-group/button-group16") as Promise<{ default: ComponentType }>,
  "button-group17": () => import("@/examples/components/button-group/button-group17") as Promise<{ default: ComponentType }>,
  "button-group18": () => import("@/examples/components/button-group/button-group18") as Promise<{ default: ComponentType }>,
  "button-group19": () => import("@/examples/components/button-group/button-group19") as Promise<{ default: ComponentType }>,
  "button-group2": () => import("@/examples/components/button-group/button-group2") as Promise<{ default: ComponentType }>,
  "button-group20": () => import("@/examples/components/button-group/button-group20") as Promise<{ default: ComponentType }>,
  "button-group3": () => import("@/examples/components/button-group/button-group3") as Promise<{ default: ComponentType }>,
  "button-group4": () => import("@/examples/components/button-group/button-group4") as Promise<{ default: ComponentType }>,
  "button-group5": () => import("@/examples/components/button-group/button-group5") as Promise<{ default: ComponentType }>,
  "button-group6": () => import("@/examples/components/button-group/button-group6") as Promise<{ default: ComponentType }>,
  "button-group7": () => import("@/examples/components/button-group/button-group7") as Promise<{ default: ComponentType }>,
  "button-group8": () => import("@/examples/components/button-group/button-group8") as Promise<{ default: ComponentType }>,
  "button-group9": () => import("@/examples/components/button-group/button-group9") as Promise<{ default: ComponentType }>,
};
