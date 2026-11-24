// Generated — run: node scripts/generate-ui-catalog.mjs
import type { ComponentType } from "react";

export const loader = () =>
  import("@/app/generator/ui-demos/scroll-area") as Promise<{
    default: ComponentType<Record<string, unknown>>;
  }>;
