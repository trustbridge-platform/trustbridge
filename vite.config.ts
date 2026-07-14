import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
plugins: [tanstackStart(), tailwindcss(), viteTsConfigPaths(), react()],
build: {
minify: false,
cssMinify: false,
ssr: true,
outDir: ".output/public",
},
});
