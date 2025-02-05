import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Habilita `next export`
  basePath: "/teruah", // Cambia esto al nombre de tu repo en GitHub
  images: {
    unoptimized: true, // Necesario porque GitHub Pages no soporta optimización de imágenes Next.js
  },
};

export default nextConfig;
