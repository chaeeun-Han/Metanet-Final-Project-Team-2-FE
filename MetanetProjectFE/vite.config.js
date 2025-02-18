import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    https: true,
    proxy: {
      "/auth": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/email": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/cart": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/admin": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/lecture": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/account": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/excel": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      "/zoom": {
        target: "https://bamjun.click",
        changeOrigin: true,
        secure: true,
      },
      // 웹소켓의 경우 별도로 wss:// 를 사용하도록 설정해야 합니다.
      "/ws": {
        target: "ws://bamjun.click",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  define: {
    global: {},
  },
});
