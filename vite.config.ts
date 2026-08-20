import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin";
import { tanstackStartVitePlugin } from "@tanstack/start-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouter(),
    tanstackStartVitePlugin(),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
