import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  ...(isProd ? { output: "export" as const, basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

export default nextConfig;
