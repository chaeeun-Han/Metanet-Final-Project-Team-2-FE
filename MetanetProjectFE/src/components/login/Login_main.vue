<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <Login_content />
  </div>
</template>

<script>
import Login_content from "./Login_content.vue";

export default {
  name: "Login_main",
  components: {
    Login_content,
  },
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>
