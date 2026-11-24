"use client";

import { Spinner } from "@/components/ui/spinner";
import { loadUiPreview } from "@/lib/load-ui-preview";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";

type UiComponentPreviewProps = {
  componentId: string;
  refreshKey: string;
};

export function UiComponentPreview({
  componentId,
  refreshKey,
}: UiComponentPreviewProps) {
  const [Component, setComponent] = useState<ComponentType<
    Record<string, unknown>
  > | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setComponent(null);

    loadUiPreview(componentId)
      .then((mod) => {
        if (!cancelled) {
          setComponent(() => mod.default);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load preview.");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [componentId, refreshKey]);

  if (loading) {
    return (
      <div className="flex min-h-48 items-center justify-center p-8">
        <Spinner className="size-6" />
      </div>
    );
  }

  if (error || !Component) {
    return (
      <div className="text-muted-foreground flex min-h-48 items-center justify-center p-8 text-sm">
        {error ?? "Unable to preview this component."}
      </div>
    );
  }

  return <Component />;
}