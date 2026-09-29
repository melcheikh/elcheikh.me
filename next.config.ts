import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true, // Requerido para exportación estática en GitHub Pages
  },
};

export default nextConfig;
