import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'png.pngtree.com'],
  },
};

export default nextConfig;
