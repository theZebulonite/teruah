import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Esto habilita la exportación estática
  basePath: "/teruah", // Cambia esto al nombre de tu repo en GitHub si es necesario
  images: {
    unoptimized: true, // Necesario porque GitHub Pages no soporta optimización de imágenes Next.js
  },
};

export default nextConfig;

