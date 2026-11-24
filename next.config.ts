import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isPages && {
    output: "export",
    basePath: process.env.BASE_PATH ?? "",
    assetPrefix: process.env.BASE_PATH ?? "",
    trailingSlash: true,
  }),
  images: {
    ...(isPages && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    // Kit examples target alternate shadcn APIs; preview loads them at runtime.
    ignoreBuildErrors: true,
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: !isPages,
  partialPrefetching: !isPages,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
