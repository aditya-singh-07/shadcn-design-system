"use client";

import { useEffect } from "react";

const LOADED = new Set<string>();

type GoogleFontLoaderProps = {
  href?: string;
};

export function GoogleFontLoader({ href }: GoogleFontLoaderProps) {
  useEffect(() => {
    if (!href || LOADED.has(href)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.generatorFont = "true";
    document.head.appendChild(link);
    LOADED.add(href);
  }, [href]);

  return null;
}