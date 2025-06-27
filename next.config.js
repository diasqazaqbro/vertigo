const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@app": path.resolve(__dirname, "app"),
      "@pages": path.resolve(__dirname, "pages"),
      "@pagesComponents": path.resolve(__dirname, "pagesComponents"),
      "@shared": path.resolve(__dirname, "shared"),
      "@widgets": path.resolve(__dirname, "widgets"),
      "@entities": path.resolve(__dirname, "entities"),
      "@features": path.resolve(__dirname, "features"),
    };
    return config;
  },
};

module.exports = nextConfig;
