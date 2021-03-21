import reactRefresh from "@vitejs/plugin-react-refresh";
import tsResolver from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import eslint from "@rollup/plugin-eslint";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    { ...eslint({ include: "src/**/*.+(js|jsx|ts|tsx)" }), enforce: "pre" },
    tsResolver(), // https://github.com/aleclarson/vite-tsconfig-paths
    reactRefresh(),
    svgr(),
  ],
  optimizeDeps: {
    include: [
      "react-dom/server",
      "leaflet.markercluster",
      "leaflet.markercluster/dist/leaflet.markercluster",
    ],
  },
  build: {
    outDir: "build",
  },
});
