import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: false, // 소스 맵 비활성화
  },
  server: {
    port: 3000,
    strictPort: true,
    https: false,
    proxy: {
      "/ws": {
        target: "ws://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  define: {
    global: {},
  },
});
