import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ correct hostname
        pathname: "/**", // allow all paths from Unsplash images
      },
    ],
  },
};

export default nextConfig;
