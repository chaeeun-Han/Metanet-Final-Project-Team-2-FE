<template>
  <div class="text-center mb-11">
    <h1 class="text-gray-900 fw-bolder mb-3">로그인</h1>
  </div>

  <div class="separator separator-content my-14">
    <span class="w-125px text-gray-500 fw-semibold fs-7">이메일로 로그인</span>
  </div>

  <!-- Login_input 컴포넌트에 필드 설정과 v-model 바인딩 -->
  <Login_input :fields="loginFormFields" v-model="loginFormData" @submit="handleSubmit" />

  <div class="text-gray-500 text-center fw-semibold fs-6">
    아직 회원정보가 없으시나요?
    <a href="#" class="link-primary">회원가입</a>
  </div>
</template>

<script>
import axios from "axios";
import Login_input from "./Login_input.vue";

export default {
  name: "Login_form",
  components: {
    Login_input,
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
          "http://localhost:8080/login",
          { id: this.loginFormData.id, password: this.loginFormData.password },
          { headers: { "Content-Type": "application/json; charset=UTF-8" } }
        );
        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error during login:", error.response ? error.response.data : error);
      }
    },
  },
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>
