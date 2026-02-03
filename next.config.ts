import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // DO NOT REMOVE THIS LINE
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
} as any;

export default nextConfig;