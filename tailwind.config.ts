import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // Asegúrate de que la ruta esté bien especificada
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // Si tienes componentes personalizados
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
