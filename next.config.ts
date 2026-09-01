import type { NextConfig } from "next";
import path from "path";

const isPages = process.env.PAGES_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  // Custom domain (tysontranthai.site) serves at root, so no basePath needed.
  // If deploying back to tysontranthai.github.io/portfolio, re-add basePath there.
  ...(isPages ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
