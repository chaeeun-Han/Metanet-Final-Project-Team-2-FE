<template>
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <Cart_content />
  </div>
</template>

<script>
import { onMounted } from "vue";
import Cart_content from "./Cart_content.vue";

export default {
  name: "Cart_main",
  components: {
    Cart_content,
  },
  setup() {
    onMounted(() => {
      // 동적으로 외부 스크립트 로드
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      };
    });
  },
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
