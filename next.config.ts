const nextConfig = {
  //output: "export",
  basePath: "/teruah", // ✅ Define el basePath correctamente
  images: {
    unoptimized: true, // ✅ Necesario para GitHub Pages
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/teruah", // ✅ Permite acceder a esto en frontend
  },
};

export default nextConfig;
