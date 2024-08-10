/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["pages", "utils"],
  },
  images: {
    domains: [
      "www.apple.com",
      "images.unsplash.com",
      "assets.aceternity.com",
      "plus.unsplash.com",
    ],
  },
};

export default nextConfig;
