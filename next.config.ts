import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
  allowedDevOrigins: ["localhost:3000", "192.168.1.102:3000"],
};

export default nextConfig;
