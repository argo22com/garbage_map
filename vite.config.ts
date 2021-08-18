import reactRefresh from "@vitejs/plugin-react-refresh";
import tsResolver from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import eslintPlugin from "vite-plugin-eslint";
import reactJsx from "vite-react-jsx";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    reactJsx(),
    eslintPlugin(),
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
