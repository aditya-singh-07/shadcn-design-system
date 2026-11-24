export type GeneratorSelection =
  | { kind: "ui"; componentId: string }
  | { kind: "example"; categoryId: string; variant: string };

export function selectionKey(selection: GeneratorSelection): string {
  if (selection.kind === "ui") return `ui:${selection.componentId}`;
  return `example:${selection.categoryId}:${selection.variant}`;
}