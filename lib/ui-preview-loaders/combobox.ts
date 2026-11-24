// Generated — run: node scripts/generate-ui-catalog.mjs
import type { ComponentType } from "react";

export const loader = () =>
  import("@/app/generator/ui-demos/combobox") as Promise<{
    default: ComponentType<Record<string, unknown>>;
  }>;
