import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    conditions: ["pkg-a", "@package/comps", "@package/shared"],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
