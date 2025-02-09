<template>
  <div id="app">
    <div class="app-wrapper flex-column flex-row-fluid ms-0 ps-0" id="kt_app_wrapper">
      <!-- Header 컴포넌트에 notifications와 userData를 전달 -->
      <Header :userData="myUserData" />
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      myUserData: {
        id: 1,
        name: "홍길동",
        email: "hong@example.com",
        role: "관리자",
        profile: "../../../public/assets/media/avatars/300-3.jpg",
        courseCount: 5,
        language: "영어",
      },
    };
  },
};
</script>
