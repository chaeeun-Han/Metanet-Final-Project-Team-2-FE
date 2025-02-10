<template>
  <div id="app">
    <div class="app-wrapper flex-column flex-row-fluid ms-0 ps-0" id="kt_app_wrapper">
      <Header :userData="myUserData" />
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import { provide, onMounted, onBeforeUnmount } from "vue";
import SockJS from "sockjs-client";
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
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("❌ WebSocket 연결 실패: 토큰 없음");
        return;
      }

      console.log("📡 WebSocket 연결 시도 - JWT:", token);

      const socket = new WebSocket("ws://localhost:8080/ws");
      this.stompClient = Stomp.over(socket);

      this.stompClient.connect(
        { Authorization: `Bearer ${token}` },
        (frame) => {
          console.log("✅ WebSocket Connected:", frame);

          this.stompClient.subscribe("/user/queue/notifications", (message) => {
            const notification = JSON.parse(message.body);
            console.log("📩 알림 수신:", notification.message);
          });
        },
        (error) => {
          console.error("❌ WebSocket 연결 실패:", error);
        }
      );
    },
    disconnectWebSocket() {
      if (this.stompClient) {
        this.stompClient.disconnect(() => {
          console.log("❌ WebSocket 연결 해제됨");
        });
        this.stompClient = null;
      }
    },
  },
  beforeUnmount() {
    this.disconnectWebSocket();
  },
  mounted() {
    provide("connectWebSocket", this.connectWebSocket); // ✅ WebSocket 함수 제공
    provide("disconnectWebSocket", this.disconnectWebSocket);
  },
};
</script>
