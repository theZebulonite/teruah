const nextConfig = {
  output: "export", // Necesario para GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/teruah" : "", // Solo en producción
  images: {
    unoptimized: true, // Necesario para GitHub Pages
  },
};

export default nextConfig;

