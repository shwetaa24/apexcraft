import type { NextConfig } from "next";

const nextConfig = { // Remove the explicit ': NextConfig' here
  output: "standalone", 

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

  typescript: {
    ignoreBuildErrors: true, 
  },
  
  eslint: {
    ignoreDuringBuilds: true, 
  }
};

export default nextConfig as any; // Cast it as any here