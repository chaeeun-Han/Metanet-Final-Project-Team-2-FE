<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="fv-row mb-3">
        <!-- 라디오 버튼 타입 -->
        <div v-if="field.type === 'radio'">
          <label class="fw-bold mb-3 d-block">{{ field.placeholder }}</label>
          <div v-for="(option, idx) in field.options" :key="idx" class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              :name="field.name"
              :value="option.value"
              :checked="modelValue[field.name] === option.value"
              @change="updateField(field.name, option.value)"
              :required="field.required"
            />
            <label class="form-check-label ms-2">{{ option.label }}</label>
          </div>
        </div>

        <!-- 은행 정보 필드는 role이 'Teacher'일 때에만 표시 -->
        <div v-else-if="field.name === 'bank'">
          <div v-if="modelValue.role === 'Teacher'">
            <input
              :type="field.type"
              :placeholder="field.placeholder"
              :name="field.name"
              :required="field.required"
              autocomplete="off"
              class="form-control bg-transparent"
              :value="modelValue[field.name] || ''"
              @input="updateField(field.name, $event.target.value)"
            />
          </div>
        </div>
        
        <!-- 이메일 -->
        <div v-else-if="field.name === 'email'" class="position-relative">
          <label class="fw-bold mb-2">이메일</label>
          <div class="d-flex">
            <input
              type="email"
              class="form-control bg-transparent me-2"
              :name="field.name"
              :required="field.required"
              autocomplete="off"
              :disabled="emailSent"
              v-model="modelValue[field.name]"
              @input="updateField(field.name, $event.target.value)"
            />
            <button 
              type="button" 
              class="btn-outline-primary"
              :class="{ 'btn-disabled':emailSent }"
              :disabled="!modelValue[field.name] || emailSent" 
              @click="sendVerificationCode(modelValue[field.name])"
            >
              인증번호 발송
            </button>
          </div>
        </div>

        <!-- 이메일 인증 코드 입력 필드 -->
        <div v-else-if="field.name === 'code'" class="position-relative">
          <label class="fw-bold mb-2">인증코드</label>
          <div class="d-flex">
            <input
              type="text"
              class="form-control bg-transparent me-2"
              :name="field.name"
              :required="field.required"
              autocomplete="off"
              :disabled="codeChecked"
              v-model="modelValue[field.name]"
              @input="updateField(field.name, $event.target.value)"
            />
            <button 
              type="button" 
              class="btn-outline-primary"
              :class="{ 'btn-disabled':codeChecked }"
              :disabled="!modelValue[field.name] || codeChecked" 
              @click="verify()"
            >
              확인
            </button>
          </div>
        </div>

        <!-- 생년월일 (날짜 입력 필드) -->
        <div v-else-if="field.name === 'birth'">
          <label class="fw-bold mb-2">생년월일</label>
          <input
            type="date"
            class="form-control bg-transparent"
            :name="field.name"
            :required="field.required"
            v-model="modelValue[field.name]"
            @input="updateField(field.name, $event.target.value)"
          />
        </div>

        <!-- 비밀번호 입력 필드 -->
        <div v-else-if="field.name === 'password'">
          <div class="fv-row mb-8">
            <label class="fw-bold mb-2">비밀번호</label>
            <div class="position-relative">
              <input
                class="form-control bg-transparent pe-5"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                autocomplete="off"
                v-model="modelValue[field.name]"
                @input="validatePasswordStrength"
              />
              <span 
                class="position-absolute end-0 top-50 translate-middle-y me-3"
                @click="togglePasswordVisibility"
                style="cursor: pointer;"
              >
                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
              </span>
            </div>

            <div class="d-flex align-items-center mt-2">
              <div class="flex-grow-1 rounded h-5px me-2" :class="hasLetter ? 'bg-success' : 'bg-secondary'"></div>
              <div class="flex-grow-1 rounded h-5px me-2" :class="hasNumber ? 'bg-success' : 'bg-secondary'"></div>
              <div class="flex-grow-1 rounded h-5px" :class="hasSpecialChar ? 'bg-success' : 'bg-secondary'"></div>
            </div>
            <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
            <div class="text-muted">영어, 숫자, 특수문자를 포함해야 합니다 (8~16자리)</div>
          </div>
        </div>

        <!-- 비밀번호 확인 필드 -->
        <div v-else-if="field.name === 'passwordConfirm'">
          <label class="fw-bold mb-2">비밀번호 확인</label>
          <input
            type="password"
            class="form-control bg-transparent"
            name="passwordConfirm"
            required
            autocomplete="off"
            v-model="modelValue[field.name]"
            @input="validatePasswordConfirm"
          />
          <p v-if="passwordConfirmError" class="text-danger">{{ passwordConfirmError }}</p>
        </div>

        <!-- 일반 입력 필드 -->
        <div v-else>
          <label class="fw-bold mb-2">{{ field.placeholder }}</label>
          <input
            :type="field.type"
            class="form-control bg-transparent"
            :name="field.name"
            :required="field.required"
            autocomplete="off"
            :value="modelValue[field.name] || ''"
            @input="updateField(field.name, $event.target.value)"
          />
        </div>
      </div>

      <div class="d-grid mb-10">
        <input 
          type="submit" 
          id="kt_sign_in_submit" 
          class="btn btn-primary" 
          :disabled="!!passwordError || !!passwordConfirmError"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup_input",
  props: {
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      password: "",
      passwordConfirm: "",
      passwordError: "",
      passwordConfirmError: "",
      showPassword: false,
      emailSent: false,
      verificationCode: "",
      codeChecked: false,
    };
  },
  computed: {
    hasLetter() {
      return /[A-Za-z]/.test(this.modelValue.password);
    },
    hasNumber() {
      return /\d/.test(this.modelValue.password);
    },
    hasSpecialChar() {
      return /[^A-Za-z0-9]/.test(this.modelValue.password);
    },
    showBankField() {
      return this.modelValue.role === "Teacher";
    },
  },
  methods: {
    resetEmailVerification() {
      console.log("📢 이메일 인증 상태 초기화 실행됨 (Signup_input.vue)");
      this.emailSent = false;
      this.codeChecked = false;
    },
    updateField(fieldName, value) {
      const updated = { ...this.modelValue, [fieldName]: value };
      this.$emit("update:modelValue", updated);
    },
    validatePasswordStrength() {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,16}$/;

      if (!this.modelValue.password || !this.modelValue.password.match(passwordRegex)) {
        this.passwordError = "비밀번호는 영어, 숫자, 특수문자를 포함한 8~16자리여야 합니다.";
      } else {
        this.passwordError = "";
      }
    },
    validatePasswordConfirm() {
      if (this.modelValue.password !== this.modelValue.passwordConfirm) {
        this.passwordConfirmError = "비밀번호가 일치하지 않습니다.";
      } else {
        this.passwordConfirmError = "";
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.passwordError || this.passwordConfirmError) {
        alert("비밀번호가 올바르지 않습니다.");
        return;
      }
      if (!this.codeChecked) {
        alert("이메일 인증이 완료되지 않았습니다.");
        return;
      }
      this.$emit("submit", this.modelValue);
      console.log("Submitted form data:", this.modelValue);
    },
    async sendVerificationCode(email) {
      this.emailSent = true;
      try {
        const response = await axios.post(
            "http://localhost:8080/email/send",
            { email: email },
        );
        if (response.status !== 200) {
          this.emailSent = false;
          console.log(response.status);
        }
      } catch (error) {
        this.emailSent = false;
        console.error("Failed to insert answer:", error.response?.data || error.message);
      }
    },
    async verify() {
      try {
        console.log("이메일 : ", this.modelValue.email);
        console.log("코드 : ", this.modelValue.code);
        const response = await axios.post(
          "http://localhost:8080/email/verify",
          {
            email: this.modelValue.email,
            verifyCode: this.modelValue.code
          }
        );
        if (response.status === 200) {
          this.codeChecked = true;
        }
      } catch (error) {
        this.codeChecked = false;
        console.error("Failed to insert answer:", error.response?.data || error.message);
        if (error.response && error.response.data && error.response.data.code) {
          const errorCode = error.response.data.code;

          if (errorCode === "CF") {
            alert("인증코드가 올바르지 않습니다.");
          }
        }
      }
    }
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
.bg-secondary {
  background-color: #e0e0e0;
}
.bg-success {
  background-color: #28a745;
}
.fas {
  cursor: pointer;
}
.btn-outline-primary {
  background-color: #1B84FF;
  border: none;
  border-radius: 5px;
  min-width: 90px;
  color: white;
  height: 40px;
}
.btn-disabled {
  background-color: #A0A0A0 !important;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
