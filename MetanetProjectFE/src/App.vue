<template>
  <div id="app">
    <div class="app-wrapper flex-column flex-row-fluid ms-0 ps-0" id="kt_app_wrapper">
      <Header
        :userData="userData"
        :isLogin="isLogin"
        @update-login-status="isLogin = $event"
        @search="updateSearchKeyword"
      />
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main" style="overflow-x: hidden">
        <router-view :key="$route.fullPath" :searchKeyword="searchKeyword" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import { onMounted, onBeforeUnmount, provide, ref, watch, nextTick } from "vue";
import { jwtDecode } from "jwt-decode";
import Stomp from "stompjs";
import axios from "axios";
import { useRouter } from "vue-router";
import api from "./apis/api.js";

export default {
  name: "App",
  components: { Header },
  setup() {
    const router = useRouter();
    const initData = {
      id: null,
      name: "로그인 후 이용 가능",
      email: null,
      role: null,
      profile: "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/profile.png",
    };

    // const userData = storedData ? JSON.parse(storedData) : initData;
    const userData = ref({
      name: "로그인 후 이용 가능",
      profile: "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/profile.png",
    });

    const loadUserData = () => {
      const storedData = sessionStorage.getItem("userData");
      if (storedData) {
        userData.value = JSON.parse(storedData);
      } else {
        userData.value = initData; // 기본 값 설정
      }
    };

    // 최초 마운트 시 `sessionStorage`에서 데이터 불러오기
    onMounted(loadUserData);

    // sessionStorage 값이 변경되면 자동으로 업데이트
    window.addEventListener("storage", loadUserData);

    const isLogin = ref(!!sessionStorage.getItem("accessToken"));
    const searchKeyword = ref(""); // 검색어 상태 추가
    const stompClient = ref(null);

    const updateSearchKeyword = (keyword) => {
      searchKeyword.value = keyword;
    };

    const updateLoginStatus = async (status) => {
      isLogin.value = status;
      await nextTick();
    };

    const logout = async () => {
      sessionStorage.clear();
      console.log("로그아웃됨");
      userData.value = initData;
      sessionStorage.setItem("userData", JSON.stringify(userData.value));
      updateLoginStatus(false);
      if (router.currentRoute.value.fullPath === "/") {
        router.push({ path: "/", query: { refresh: Date.now() } });
      } else {
        router.push("/");
      }
    };

    const getMember = async () => {
      try {
        // const token = sessionStorage.getItem("accessToken");
        // if (!token) return;

        const response = await api.get("/account");

        const member = response.data.data.members;
        userData.value = {
          id: member.id,
          name: member.name,
          email: member.email,
          role: member.role === "Admin" ? "관리자" : member.role === "Teacher" ? "선생님" : "학생",
          profile: member.profile || "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/profile.png",
        };

        sessionStorage.setItem("userData", JSON.stringify(userData.value));
      } catch (error) {
        console.error("회원 정보 불러오기 실패:", error);
      }
    };

    const connectWebSocket = () => {
      const token = sessionStorage.getItem("accessToken");
      if (!token) return console.error("WebSocket 연결 실패: 토큰 없음");

      console.log("WebSocket 연결 시도 - JWT:", token);
      const decoded = jwtDecode(token);
      const userId = decoded.sub;

      if (stompClient.value) disconnectWebSocket();

      const socket = new WebSocket("wss://bamjun.click/ws");
      stompClient.value = Stomp.over(socket);

      stompClient.value.connect(
        { Authorization: `Bearer ${token}` },
        (frame) => {
          console.log("WebSocket Connected:", frame);
          stompClient.value.subscribe("/user/queue/notifications", (message) => {
            const notification = JSON.parse(message.body);
            console.log("알림 수신:", notification.message);
            window.dispatchEvent(new CustomEvent("new-notification", { detail: notification }));
          });
        },
        (error) => {
          console.log("WebSocket 연결 실패:", error);
        }
      );
    };

    const disconnectWebSocket = () => {
      if (stompClient.value) {
        console.log("WebSocket 연결 해제 중...");
        stompClient.value.disconnect(() => console.log("WebSocket 연결 해제됨"));
        stompClient.value = null;
      }
    };

    watch(isLogin, (newValue) => {
      console.log("isLogin 변경됨: ", newValue);
      // if (newValue) connectWebSocket();
      // else disconnectWebSocket();
      if (!newValue) disconnectWebSocket();
    });

    provide("userData", userData);
    provide("getMember", getMember);
    provide("updateLoginStatus", updateLoginStatus);
    provide("isLogin", isLogin);
    provide("connectWebSocket", connectWebSocket);
    provide("disconnectWebSocket", disconnectWebSocket);
    provide("logout", logout);
    provide("searchKeyword", searchKeyword); // 검색어 상태 provide

    onMounted(() => {
      if (isLogin.value) connectWebSocket();
    });

    onBeforeUnmount(() => {
      disconnectWebSocket();
    });

    // myUserData
    return { isLogin, getMember, logout, searchKeyword, updateSearchKeyword, userData, loadUserData };
  },
};
</script>
