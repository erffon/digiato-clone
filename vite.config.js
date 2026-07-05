import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { dirname, resolve } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(__dirname, "src"),

  plugins: [injectHTML()],

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["global-builtin", "import"],
      },
    },
  },

  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/templates/index.html"),
        single: resolve(__dirname, "src/templates/single.html"),
      },
    },
  },
});
