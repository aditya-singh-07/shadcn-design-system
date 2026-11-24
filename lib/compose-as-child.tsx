import * as React from "react"

/** Radix-style `asChild` for Base UI triggers that use `render`. */
export function pickRenderFromAsChild(
  asChild: boolean | undefined,
  children: React.ReactNode,
): { render?: React.ReactElement; child?: React.ReactNode } {
  if (asChild && React.isValidElement(children)) {
    return { render: children }
  }
  return { child: children }
}