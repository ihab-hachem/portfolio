import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works whether it's deployed at a domain root
// (Vercel/Netlify/custom domain) or under a GitHub Pages project path
// (https://<user>.github.io/<repo>/). No manual base-path editing needed.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
