// Generated — run: node scripts/generate-example-registry.mjs
import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

export const loaders: Record<string, Loader> = {
  "file-upload1": () => import("@/examples/components/file-upload/file-upload1") as Promise<{ default: ComponentType }>,
  "file-upload10": () => import("@/examples/components/file-upload/file-upload10") as Promise<{ default: ComponentType }>,
  "file-upload2": () => import("@/examples/components/file-upload/file-upload2") as Promise<{ default: ComponentType }>,
  "file-upload3": () => import("@/examples/components/file-upload/file-upload3") as Promise<{ default: ComponentType }>,
  "file-upload4": () => import("@/examples/components/file-upload/file-upload4") as Promise<{ default: ComponentType }>,
  "file-upload5": () => import("@/examples/components/file-upload/file-upload5") as Promise<{ default: ComponentType }>,
  "file-upload6": () => import("@/examples/components/file-upload/file-upload6") as Promise<{ default: ComponentType }>,
  "file-upload7": () => import("@/examples/components/file-upload/file-upload7") as Promise<{ default: ComponentType }>,
  "file-upload8": () => import("@/examples/components/file-upload/file-upload8") as Promise<{ default: ComponentType }>,
  "file-upload9": () => import("@/examples/components/file-upload/file-upload9") as Promise<{ default: ComponentType }>,
};
