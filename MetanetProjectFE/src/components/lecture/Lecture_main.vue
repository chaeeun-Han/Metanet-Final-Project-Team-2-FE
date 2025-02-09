<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
      <Lecture_content />
    </div>
  </div>
</template>

<script>
import Lecture_content from "./Lecture_content.vue";

export default {
  name: "Account_main",
  components: {
    Lecture_content,
  },
};
</script>
