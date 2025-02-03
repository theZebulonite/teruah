/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Agrega autoprefixer para asegurarte de que el código CSS sea compatible con más navegadores.
  },
};

export default config;

