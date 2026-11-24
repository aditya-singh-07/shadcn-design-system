// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "calendar1": () => import("@/examples/components/calendar/calendar1") as Promise<{ default: ComponentType }>,
  "calendar10": () => import("@/examples/components/calendar/calendar10") as Promise<{ default: ComponentType }>,
  "calendar11": () => import("@/examples/components/calendar/calendar11") as Promise<{ default: ComponentType }>,
  "calendar12": () => import("@/examples/components/calendar/calendar12") as Promise<{ default: ComponentType }>,
  "calendar13": () => import("@/examples/components/calendar/calendar13") as Promise<{ default: ComponentType }>,
  "calendar14": () => import("@/examples/components/calendar/calendar14") as Promise<{ default: ComponentType }>,
  "calendar15": () => import("@/examples/components/calendar/calendar15") as Promise<{ default: ComponentType }>,
  "calendar2": () => import("@/examples/components/calendar/calendar2") as Promise<{ default: ComponentType }>,
  "calendar3": () => import("@/examples/components/calendar/calendar3") as Promise<{ default: ComponentType }>,
  "calendar4": () => import("@/examples/components/calendar/calendar4") as Promise<{ default: ComponentType }>,
  "calendar5": () => import("@/examples/components/calendar/calendar5") as Promise<{ default: ComponentType }>,
  "calendar6": () => import("@/examples/components/calendar/calendar6") as Promise<{ default: ComponentType }>,
  "calendar7": () => import("@/examples/components/calendar/calendar7") as Promise<{ default: ComponentType }>,
  "calendar8": () => import("@/examples/components/calendar/calendar8") as Promise<{ default: ComponentType }>,
  "calendar9": () => import("@/examples/components/calendar/calendar9") as Promise<{ default: ComponentType }>,
};
