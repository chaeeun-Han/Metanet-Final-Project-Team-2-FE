<template>
  <div class="text-center mb-11">
    <h1 class="text-gray-900 fw-bolder mb-3">로그인</h1>
  </div>

  <Login_input :fields="loginFormFields" v-model="loginFormData" @submit="handleSubmit" />

  <div class="text-gray-500 text-center fw-semibold fs-6">
    아직 회원정보가 없으시나요?
    <router-link to="/signup" class="link-primary">회원가입</router-link>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../apis/api.js";
import { inject, nextTick } from "vue";
import Login_input from "./Login_Input.vue";

export default {
  name: "Login_form",
  components: {
    Login_input,
  },
  setup() {
    const connectWebSocket = inject("connectWebSocket");
    const updateLoginStatus = inject("updateLoginStatus");
    const getMember = inject("getMember");
    const isLogin = inject("isLogin");

    if (!connectWebSocket) {
      console.error("❌ WebSocket 함수 로드 실패: connectWebSocket이 undefined입니다.");
    }

    return {
      connectWebSocket, updateLoginStatus, getMember, isLogin
    };
  },
  data() {
    return {
      loginFormFields: [
        { type: "text", placeholder: "아이디", name: "id", required: true },
        { type: "password", placeholder: "비밀번호", name: "password", required: true },
      ],
      loginFormData: {},
    };
  },
  methods: {
    async handleSubmit() {
      console.log("Submitting form data:", this.loginFormData.id, this.loginFormData.password);
      try {
        const response = await api.post(
          "/auth/login",
          { id: this.loginFormData.id, password: this.loginFormData.password },
          { headers: { "Content-Type": "application/json", "skipInterceptor": "true" },
          withCredentials: true }
        );
        console.log("Response from server:", response.data);

        const authHeader = response.headers["authorization"];
        if (authHeader && authHeader.startsWith("Bearer ")) {
          const accessToken = authHeader.split(" ")[1];
          console.log("Extracted Token:", accessToken);

          sessionStorage.setItem("accessToken", accessToken);

          await this.getMember();
          

          if (this.connectWebSocket) {
            this.connectWebSocket();
          } else {
            console.error("❌ WebSocket 연결 실패: connectWebSocket 함수가 존재하지 않음.");
          }
          
          await nextTick();
          this.updateLoginStatus(true);
          this.$router.push("/");
        } else {
          console.warn("❌ 액세스 토큰이 없거나 올바르지 않음");
        }
      } catch (error) {
        Swal.fire('로그인 실패', 'ID 비밀번호를 확인해주세요.', 'error');                         
        console.error("로그인 실패:", error.response ? error.response.data : error);
      }
    },
  },
};
</script>