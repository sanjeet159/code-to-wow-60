import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { TanStackStartViteServerFn } from "@tanstack/start-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    TanStackRouterVite(),
    TanStackStartViteServerFn({
      env: mode === "production" ? "client" : "server",
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
}));
