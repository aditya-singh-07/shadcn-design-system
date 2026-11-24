// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

export async function loadExample(
  categoryId: string,
  variant: string,
): Promise<{ default: ComponentType<Record<string, unknown>> }> {
  const mod = await import(`@/lib/example-loaders/${categoryId}`);
  const loader = mod.loaders[variant];
  if (!loader) {
    throw new Error(`Example not found: ${categoryId}/${variant}`);
  }
  return loader();
}
