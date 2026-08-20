import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin";
import { TanStackStartViteServerFn } from "@tanstack/start-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    tanstackRouter(),
    TanStackStartViteServerFn({
      env: mode === "production" ? "client" : "server",
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
}));
