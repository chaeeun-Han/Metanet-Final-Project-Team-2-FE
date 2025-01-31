<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
      <Account_ToolBar />
      <Account_content />
    </div>
  </div>
</template>

<script>
import Account_ToolBar from "./Account_ToolBar.vue";
import Account_content from "./Account_content.vue";

export default {
  name: "Account_main",
  components: {
    Account_ToolBar,
    Account_content,
  },
};
</script>
