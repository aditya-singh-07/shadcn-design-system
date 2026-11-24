// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "native-select1": () => import("@/examples/components/native-select/native-select1") as Promise<{ default: ComponentType }>,
  "native-select2": () => import("@/examples/components/native-select/native-select2") as Promise<{ default: ComponentType }>,
  "native-select3": () => import("@/examples/components/native-select/native-select3") as Promise<{ default: ComponentType }>,
  "native-select4": () => import("@/examples/components/native-select/native-select4") as Promise<{ default: ComponentType }>,
  "native-select5": () => import("@/examples/components/native-select/native-select5") as Promise<{ default: ComponentType }>,
  "native-select6": () => import("@/examples/components/native-select/native-select6") as Promise<{ default: ComponentType }>,
  "native-select7": () => import("@/examples/components/native-select/native-select7") as Promise<{ default: ComponentType }>,
  "native-select8": () => import("@/examples/components/native-select/native-select8") as Promise<{ default: ComponentType }>,
  "native-select9": () => import("@/examples/components/native-select/native-select9") as Promise<{ default: ComponentType }>,
};
