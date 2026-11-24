// Generated — run: node scripts/generate-ui-catalog.mjs
import type { ComponentType } from "react";

export async function loadUiPreview(
  id: string,
): Promise<{ default: ComponentType<Record<string, unknown>> }> {
  const mod = await import(`@/lib/ui-preview-loaders/${id}`);
  return mod.loader();
}
