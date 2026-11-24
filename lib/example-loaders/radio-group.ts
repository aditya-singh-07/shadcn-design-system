// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "radio-group1": () => import("@/examples/components/radio-group/radio-group1") as Promise<{ default: ComponentType }>,
  "radio-group10": () => import("@/examples/components/radio-group/radio-group10") as Promise<{ default: ComponentType }>,
  "radio-group11": () => import("@/examples/components/radio-group/radio-group11") as Promise<{ default: ComponentType }>,
  "radio-group12": () => import("@/examples/components/radio-group/radio-group12") as Promise<{ default: ComponentType }>,
  "radio-group13": () => import("@/examples/components/radio-group/radio-group13") as Promise<{ default: ComponentType }>,
  "radio-group14": () => import("@/examples/components/radio-group/radio-group14") as Promise<{ default: ComponentType }>,
  "radio-group15": () => import("@/examples/components/radio-group/radio-group15") as Promise<{ default: ComponentType }>,
  "radio-group2": () => import("@/examples/components/radio-group/radio-group2") as Promise<{ default: ComponentType }>,
  "radio-group3": () => import("@/examples/components/radio-group/radio-group3") as Promise<{ default: ComponentType }>,
  "radio-group4": () => import("@/examples/components/radio-group/radio-group4") as Promise<{ default: ComponentType }>,
  "radio-group5": () => import("@/examples/components/radio-group/radio-group5") as Promise<{ default: ComponentType }>,
  "radio-group6": () => import("@/examples/components/radio-group/radio-group6") as Promise<{ default: ComponentType }>,
  "radio-group7": () => import("@/examples/components/radio-group/radio-group7") as Promise<{ default: ComponentType }>,
  "radio-group8": () => import("@/examples/components/radio-group/radio-group8") as Promise<{ default: ComponentType }>,
  "radio-group9": () => import("@/examples/components/radio-group/radio-group9") as Promise<{ default: ComponentType }>,
};
