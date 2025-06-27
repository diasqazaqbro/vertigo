const path = require("path");
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
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
