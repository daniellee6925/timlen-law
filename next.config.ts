import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/timlen-law",
  images: { unoptimized: true },
};

export default nextConfig;
