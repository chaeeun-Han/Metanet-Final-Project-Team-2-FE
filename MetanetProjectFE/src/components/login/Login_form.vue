<template>
  <div class="text-center mb-11">
    <h1 class="text-gray-900 fw-bolder mb-3">로그인</h1>
  </div>

  <div class="separator separator-content my-14">
    <span class="w-125px text-gray-500 fw-semibold fs-7">이메일로 로그인</span>
  </div>

  <Login_input :fields="loginFormFields" v-model="loginFormData" @submit="handleSubmit" />

  <div class="text-gray-500 text-center fw-semibold fs-6">
    아직 회원정보가 없으시나요?
    <a href="#" class="link-primary">회원가입</a>
  </div>
</template>

<script>
import axios from "axios";
import { inject } from "vue";
import Login_input from "./Login_Input.vue";
import { login } from "../../apis/apiService";

export default {
  name: "Login_form",
  components: {
    Login_input,
  },
  setup() {
    const connectWebSocket = inject("connectWebSocket"); // ✅ WebSocket 함수 가져오기

    if (!connectWebSocket) {
      console.error("❌ WebSocket 함수 로드 실패: connectWebSocket이 undefined입니다.");
    }

    return {
      connectWebSocket,
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
        const response = await axios.post(
          "http://localhost:8080/auth/login",
          { id: this.loginFormData.id, password: this.loginFormData.password },
          { headers: { "Content-Type": "application/json; charset=UTF-8" } }
        );
        console.log("Response from server:", response.data);

        const authHeader = response.headers["authorization"];
        if (authHeader && authHeader.startsWith("Bearer ")) {
          const accessToken = authHeader.split(" ")[1];
          console.log("Extracted Token:", accessToken);

          localStorage.setItem("accessToken", accessToken);

          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

          // ✅ 로그인 성공 시 WebSocket 연결
          if (this.connectWebSocket) {
            this.connectWebSocket();
          } else {
            console.error("❌ WebSocket 연결 실패: connectWebSocket 함수가 존재하지 않음.");
          }
        } else {
          console.warn("❌ 액세스 토큰이 없거나 올바르지 않음");
        }
      } catch (error) {
        console.error("로그인 실패:", error.response ? error.response.data : error);
      }
    },
  },
};
</script>
