/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    alias: {
      "@styles": path.join(__dirname, "styles"),
    },
  },
};

module.exports = nextConfig;
