<template>
  <div id="app">
    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
      <Header></Header>
      <div class="app-main flex-column flex-row-fluid" id="kt_app_wrapper">
        <Sidebar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>
