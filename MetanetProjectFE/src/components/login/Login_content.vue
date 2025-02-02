<template>
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <Login_background />
    <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <div class="w-lg-500px p-10">
          <Login_form />
        </div>
      </div>
      <div class="w-lg-500px d-flex flex-stack px-10 mx-auto">
        <div class="me-10 position-relative">
          <!-- 언어 선택 버튼 -->
          <button
            class="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
            @click="toggleMenu"
          >
            <img
              class="w-20px h-20px rounded me-3"
              :src="
                currentLang === 'English'
                  ? '../../../public/assets/media/flags/united-states.svg'
                  : '../../../public/assets/media/flags/south-korea.svg'
              "
              alt=""
            />
            <span class="me-1">{{ currentLang }}</span>
            <span class="d-flex flex-center rotate-180">
              <i class="ki-duotone ki-down fs-5 text-muted m-0"></i>
            </span>
          </button>
          <!-- 언어 선택 메뉴 -->
          <div
            v-if="menuVisible"
            class="position-absolute"
            style="
              z-index: 100;
              background-color: #fff;
              border: 1px solid #ddd;
              width: 150px;
              padding: 1rem;
              font-size: 0.875rem;
              border-radius: 15px;
            "
          >
            <div class="menu-item px-3">
              <a href="#" class="menu-link d-flex px-5" @click.prevent="selectLanguage('English')">
                <span class="symbol symbol-20px me-4">
                  <img class="rounded-1" src="../../../public/assets/media/flags/united-states.svg" alt="English" />
                </span>
                <span>English</span>
              </a>
            </div>
            <div class="menu-item px-3">
              <a href="#" class="menu-link d-flex px-5" @click.prevent="selectLanguage('Korean')">
                <span class="symbol symbol-20px me-4">
                  <img class="rounded-1" src="../../../public/assets/media/flags/south-korea.svg" alt="Korean" />
                </span>
                <span>Korean</span>
              </a>
            </div>
          </div>
        </div>
        <div class="d-flex fw-semibold text-primary fs-base gap-5">
          <a href="#" target="_blank">Terms</a>
          <a href="#" target="_blank">Plans</a>
          <a href="#" target="_blank">Contact Us</a>
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
