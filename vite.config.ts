// TrustBridge — Vite + TanStack Start config
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
  ],
  server: {
    port: 5173,
  },
});
