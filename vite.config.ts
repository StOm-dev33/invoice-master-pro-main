import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ... (imports remain the same)

export default defineConfig(({ mode }) => ({
  base: "/invoice-master-pro-main/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  // Removed componentTagger from here
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
