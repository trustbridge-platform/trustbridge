import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: { enabled: true },
    }),
    tailwindcss(),
    viteTsConfigPaths(),
    react(),
  ],
  build: {
    minify: false,
    cssMinify: false,
    outDir: ".output/public",
  },
});
