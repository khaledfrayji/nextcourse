import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com","pbs.twimg.com","aceternity.com","assets.aceternity.com"], // Add the hostname of the image source
  },
};

export default nextConfig;
