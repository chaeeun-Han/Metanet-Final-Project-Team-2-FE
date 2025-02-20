<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="fv-row mb-3">
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
      <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <router-link to="/password/confirm" class="link-primary">비밀번호를 잊으셨습니까?</router-link>
      </div>
      <div class="d-grid mb-10">
        <input type="submit" id="kt_sign_in_submit" class="btn btn-primary login-btn" :value="text" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login_input",
  props: {
    action: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      default: "로그인",
    },
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    updateField(fieldName, value) {
      const updated = { ...this.modelValue, [fieldName]: value };
      this.$emit("update:modelValue", updated);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("submit", this.modelValue);
      console.log("Submitted form data:", this.modelValue);
    },
  },
};
</script>

<style scoped>
.login-btn {
  width: 435px; /* 기본값 */
}

@media (max-width: 414px) {
  .login-btn {
    width: 250px; /* 415px 미만일 때 */
  }
}

</style>
