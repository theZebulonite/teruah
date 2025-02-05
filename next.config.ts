const nextConfig = {
  output: "export",
  basePath: "/teruah", // Asegura que funcione bien en GitHub Pages
  publicRuntimeConfig: {
    basePath: "/teruah",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
