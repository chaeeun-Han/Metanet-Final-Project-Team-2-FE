<template>
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <Login_background />
    <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <div class="w-lg-500px p-10">
          <Login_form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login_background from "./Login_background.vue";
import Login_form from "./Login_form.vue";

export default {
  name: "Login_content",
  components: {
    Login_background,
    Login_form,
  },
  data() {
    return {
      currentLang: "English",
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("toggleMenu clicked");
      this.menuVisible = !this.menuVisible;
    },
    selectLanguage(lang) {
      console.log("Language selected:", lang);
      this.currentLang = lang;
      this.menuVisible = false;
    },
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
