<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
      <Login_background />
      <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div class="d-flex flex-center flex-column flex-lg-row-fluid">
          <div class="text-center mb-11">
            <h1 class="text-gray-900 fw-bolder mb-3">회원가입</h1>
          </div>
          <div class="w-lg-500px p-10">
            <signup_input ref="signupInput" :fields="signupFormFields" v-model="signupFormData" @submit="handleSubmit" />
          </div>

          <div class="separator separator-content my-14"></div>

          <!-- Signup_input 컴포넌트에 필드 및 v-model, submit 이벤트 전달 -->

          <div class="text-gray-500 text-center fw-semibold fs-6">
            이미 회원정보가 있으신가요?
            <a href="#" class="link-primary">로그인</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signup_input from "./signup_input.vue";
import Login_background from "../login/Login_background.vue";
import api from '../../apis/api';

export default {
  name: "Signup",
  components: {
    signup_input,
    Login_background,
  },
  data() {
    return {
      signupFormFields: [
        { type: "text", placeholder: "아이디", name: "id", required: true },
        { type: "password", placeholder: "비밀번호", name: "password", required: true },
        { type: "password", placeholder: "비밀번호 재입력", name: "passwordConfirm", required: true},
        { type: "text", placeholder: "전화번호 (예: 010-5123-1232)", name: "phone", required: true },
        { type: "email", placeholder: "이메일", name: "email", required: true },
        { type: "text", placeholder: "인증코드", name: "code", required: true },
        { type: "date", placeholder: "생년월일", name: "birth", required: true },
        { type: "text", placeholder: "이름", name: "name", required: true },
        { type: "email", placeholder: "ZOOM 계정(이메일)", name: "attendId", required: true},
        {
          type: "radio",
          placeholder: "역할",
          name: "role",
          required: true,
          options: [
            { label: "Student", value: "Student" },
            { label: "Teacher", value: "Teacher" },
          ],
        },
        { type: "text", placeholder: "은행 정보", name: "bank", required: true },
      ],
      signupFormData: {
        role: "",
      },
    };
  },

  methods: {
    async handleSubmit(formData) {
      this.$nextTick(async () => {
        const requestData = {
          id: this.signupFormData.id,
          password: this.signupFormData.password,
          phone: this.signupFormData.phone,
          email: this.signupFormData.email,
          birth: this.signupFormData.birth,
          name: this.signupFormData.name,
          role: this.signupFormData.role,
          bank: this.signupFormData.bank || "",
          attendId: this.signupFormData.attendId,
        }
        console.log("회원가입 폼 데이터 제출:", requestData);
        console.log("역할 : " + requestData.role);
        console.log("이메일 : " + requestData.email);
        console.log("비밀번호 : " + requestData.password);

        try {
          const response = await api.post("/auth/join", requestData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("회원가입 성공:", response);
          this.$router.push("/login");
        } catch (error) {
          console.error("회원가입 실패:", error.response ? error.response.data : error);
          if (error.response && error.response.data && error.response.data.code) {
            const errorCode = error.response.data.code;

            if (errorCode === "DUPLICATED_EMAIL") {
              alert("이미 가입된 이메일입니다. 다른 이메일을 사용해주세요.");
              this.resetEmailState();
            }
          }
        }
      })
    },
    resetEmailState() {
      console.log("📢 resetEmailState() 호출됨 (Signup.vue)");

      if (this.$refs.signupInput) {
        this.$refs.signupInput.resetEmailVerification();
      }
    },
  },
  mounted() {
    console.log("✅ Signup_input 컴포넌트가 제대로 등록됐는지 확인:", Signup_input);
  }
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>
