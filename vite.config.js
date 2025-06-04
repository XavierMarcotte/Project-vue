import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { visualizer } from "rollup-plugin-visualizer";
import Components from "unplugin-vue-components/vite";
import RekaResolver from "reka-ui/resolver";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    visualizer({
      open: true,
      filename: "./stats.html", // ← ici, on le met dans la racine
      gzipSize: true,
      brotliSize: true,
    }),
    Components({
      dts: true,
      resolvers: [RekaResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  optimizeDeps: {
    include: ["vue", "swiper"],
  },
  server: {
    compress: true,
  },
});
