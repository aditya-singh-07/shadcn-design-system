"use client";

import { loadExample } from "@/lib/load-example";
import { Spinner } from "@/components/ui/spinner";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";

type ExamplePreviewProps = {
  categoryId: string;
  variant: string;
  refreshKey: string;
};

export function ExamplePreview({
  categoryId,
  variant,
  refreshKey,
}: ExamplePreviewProps) {
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

    loadExample(categoryId, variant)
      .then((mod) => {
        if (!cancelled) {
          setComponent(() => mod.default);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load example.");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [categoryId, variant, refreshKey]);

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
        {error ?? "Unable to preview this example."}
      </div>
    );
  }

  return (
    <div className="w-full p-6 md:p-10">
      <Component />
    </div>
  );
}