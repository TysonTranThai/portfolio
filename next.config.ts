import type { NextConfig } from "next";
import path from "path";

const isPages = process.env.PAGES_EXPORT === "1";
const repo = "portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  ...(isPages
    ? {
        output: "export" as const,
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
