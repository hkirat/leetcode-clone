import mdx from '@mdx-js/rollup'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ enforce: "pre", ...mdx() }, react()],
});
