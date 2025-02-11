<template>
  <div id="app">
    <div class="app-wrapper flex-column flex-row-fluid ms-0 ps-0" id="kt_app_wrapper">
      <Header :userData="myUserData" />
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import { provide, onMounted, onBeforeUnmount } from "vue";
import { jwtDecode } from "jwt-decode";
import Stomp from "stompjs";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      myUserData: {
        id: 1,
        name: "홍길동",
        email: "hong@example.com",
        role: "관리자",
        profile: "../../../public/assets/media/avatars/300-3.jpg",
        courseCount: 5,
        language: "영어",
      },
      stompClient: null,
    };
  },
  methods: {
    connectWebSocket() {
      const token = sessionStorage.getItem("accessToken");
      if (!token) {
        console.error("❌ WebSocket 연결 실패: 토큰 없음");
        return;
      }

      console.log("📡 WebSocket 연결 시도 - JWT:", token);

      const decoded = jwtDecode(token);
      const userId = decoded.sub;
      if (window.websocketInstance) {
        console.log("⚠️ 기존 WebSocket이 존재 -> 해제 후 재연결");
        this.disconnectWebSocket();
      }
      const socket = new WebSocket("ws://localhost:8080/ws");
      this.stompClient = Stomp.over(socket);
      window.websocketInstance = this.stompClient;

      this.stompClient.connect(
        { Authorization: `Bearer ${token}` },
        (frame) => {
          console.log("✅ WebSocket Connected:", frame);

          this.stompClient.subscribe("/user/queue/notifications", (message) => {
            const notification = JSON.parse(message.body);
            console.log("📩 알림 수신:", notification.message);

            window.dispatchEvent(new CustomEvent("new-notification", { detail: notification }));
          });
        },
        (error) => {
          console.error("❌ WebSocket 연결 실패:", error);
        }
      );
    },
    disconnectWebSocket() {
      if (window.websocketInstance) {
        console.log("🔌 WebSocket 연결 해제 중...");
        window.websocketInstance.disconnect(() => {
          console.log("❌ WebSocket 연결 해제됨");
        });

        this.stompClient = null;
        window.websocketInstance = null;
      }
    },
  },
  beforeUnmount() {
    this.disconnectWebSocket();
  },
  mounted() {
    provide("connectWebSocket", this.connectWebSocket);
    provide("disconnectWebSocket", this.disconnectWebSocket);

    const token = sessionStorage.getItem("accessToken");
    if (token) {
      this.connectWebSocket();
    }
  },
};
</script>