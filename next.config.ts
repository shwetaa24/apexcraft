import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // CRITICAL for your Jenkins/Docker assignment

  // In newer Next.js versions, turbo is a TOP-LEVEL property
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": ["./src/visual-edits/component-tagger-loader.js"]
  //   }
  // },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;