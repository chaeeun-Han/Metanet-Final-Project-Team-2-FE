<template>
  <div
    id="kt_app_header"
    class="app-header"
    data-kt-sticky="true"
    data-kt-sticky-activate="{default: true, lg: true}"
    data-kt-sticky-name="app-header-minimize"
    data-kt-sticky-offset="{default: '200px', lg: '0'}"
    data-kt-sticky-animation="false"
  >
    <!-- Header Container -->
    <div class="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
      <!-- Mobile Logo -->
      <div class="px-6" id="" style="display: flex; align-items: center; justify-self: center">
        <!--begin::Logo image-->
        <router-link to="/">
          <img alt="Logo" src="../../../assets/media/classpick_logo.png" class="h-35px app-sidebar-logo-default" />
          <img alt="Logo" src="../../../assets/media/classpick_logo.png" class="h-25px app-sidebar-logo-minimize" />
        </router-link>
      </div>

      <!-- Header Wrapper -->
      <div class="d-flex align-items-center justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
        <div class="d-flex align-items-center position-relative w-100">
          <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
          <input
            type="text"
            @keyup.enter="sendToMain"
            v-model="searchQuery"
            data-kt-ecommerce-edit-order-filter="search"
            class="form-control form-control-solid w-100 w-lg-50 ps-12 d-none d-lg-block"
            placeholder="강의명, 강사명으로 검색하세요"
          />
          <input
            type="text"
            @keyup.enter="sendToMain"
            v-model="searchQuery"
            data-kt-ecommerce-edit-order-filter="search"
            class="form-control form-control-solid w-100 ps-12 d-lg-none"
            placeholder="검색"
          />
        </div>

        <!-- Navbar -->
        <div class="app-navbar flex-shrink-0">
          <!-- 알림 아이콘 및 메뉴 -->
          <div class="app-navbar-item ms-1 ms-md-4">
            <div
              class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
              id="kt_menu_item_notifications"
            >
              <i :class="['ki-duotone', 'ki-notification-status', 'fs-2', { 'notification-icon': true, 'has-notifications': hasNotifications }]">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
              </i>
            </div>
            <div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
              <div
                class="d-flex flex-column bgi-no-repeat rounded-top"
                :style="{ backgroundImage: 'url(https://zebal-buket.s3.ap-northeast-2.amazonaws.com/bg7-dark.jpg)' }"
              >
                <h3 class="text-white fw-semibold px-9 mt-10 mb-6">
                  알림 창 <span class="fs-8 opacity-75 ps-3">({{ notifications.length }}개)</span>
                </h3>
                <ul class="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link text-white opacity-75 opacity-state-100 pb-4"
                      data-bs-toggle="tab"
                      href="#kt_topbar_notifications_1"
                      aria-selected="true"
                      tabindex="0"
                      role="tab"
                      >알림</a
                    >
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_topbar_notifications_1" role="tabpanel">
                  <div class="scroll-y mh-325px my-5 px-8">
                    <div v-for="(item, index) in truncatedNotifications" :key="index" class="d-flex flex-stack py-4">
                      <div class="d-flex align-items-center">
                        <div
                          class="fs-6 text-gray-800 text-hover-primary fw-bold cursor-pointer"
                          @click="
                            removeNotification(index);
                            closeNotification();
                            handleNotificationClick(item.lectureId, item.questionId);
                          "
                        >
                          {{ item.shortMessage }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 text-center border-top"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Theme Mode -->
          <div class="app-navbar-item ms-1 ms-md-4">
            <a
              href="#"
              class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <i class="ki-duotone ki-night-day theme-light-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                <span class="path5"></span>
                <span class="path6"></span>
                <span class="path7"></span>
                <span class="path8"></span>
                <span class="path9"></span>
                <span class="path10"></span>
              </i>
              <i class="ki-duotone ki-moon theme-dark-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </a>
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
              data-kt-menu="true"
              data-kt-element="theme-mode-menu"
            >
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-night-day fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                      <span class="path7"></span>
                      <span class="path8"></span>
                      <span class="path9"></span>
                      <span class="path10"></span>
                    </i>
                  </span>
                  <span class="menu-title">Light</span>
                </a>
              </div>
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-moon fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">Dark</span>
                </a>
              </div>
            </div>
          </div>
          <!-- cart -->
          <div class="app-navbar-item ms-1 ms-md-4" v-show="isLogin">
            <router-link to="/cart" class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px">
              <i class="ki-duotone ki-handcart fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
              </i>
            </router-link>
          </div>

          <!-- User Menu -->
          <div class="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
            <div
              class="cursor-pointer symbol symbol-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <img :src="userData.profile" class="rounded-3" alt="user" />
            </div>
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
            >
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <div class="symbol symbol-50px me-5">
                    <img
                      :src="userData.profile || 'https://zebal-buket.s3.ap-northeast-2.amazonaws.com/profile.png'"
                      class="rounded-3"
                      alt="프로필"
                    />
                  </div>
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">
                      {{ userData.name || "로그인 후 이용 가능" }}
                      <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2" v-show="isLogin">{{ userData.role }}</span>
                    </div>
                    <a href="#" class="fw-semibold text-muted text-hover-primary fs-7" v-show="isLogin">{{ userData.email }}</a>
                  </div>
                </div>
              </div>
              <div class="separator my-2"></div>
              <div class="menu-item px-5">
                <router-link to="/account" class="menu-link px-5" v-show="isLogin">{{ t("header.profile") }}</router-link>
              </div>
              <div
                class="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative">
                    {{ t("header.language") }}
                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                      {{ language }}
                      <img class="w-15px h-15px rounded-1 ms-2" :src="flagSrc" alt="" />
                    </span>
                  </span>
                </a>
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <div class="menu-item px-3">
                    <a class="menu-link d-flex px-5" :class="{ active: isEnglishActive }" @click.prevent="changeLanguage('en')">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="https://zebal-buket.s3.ap-northeast-2.amazonaws.com/united-states.svg" alt="" />
                      </span>
                      {{ t("header.en") }}
                    </a>
                  </div>
                  <div class="menu-item px-3">
                    <a class="menu-link d-flex px-5" :class="{ active: isKoreanActive }" @click.prevent="changeLanguage('ko')">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="https://zebal-buket.s3.ap-northeast-2.amazonaws.com/south-korea.svg" alt="" />
                      </span>
                      {{ t("header.ko") }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="menu-item px-5">
                <!-- <a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5" @click="logout">로그 아웃</a> -->
                <a v-if="isLogin" @click="logout" class="menu-link px-5">{{ t("header.signout") }}</a>
                <router-link v-else to="/login" class="menu-link px-5">{{ t("header.signin") }}</router-link>
              </div>
              <div class="menu-item px-5">
                <router-link v-if="!isLogin" to="/signup" class="menu-link px-5">{{ t("header.signup") }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- End Navbar -->
      </div>
      <!-- End Header Wrapper -->
    </div>
    <!-- End Header Container -->
  </div>
</template>

<script>
import { inject, watch, ref, computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default {
  name: "Header",
  emits: ["search"],
  props: { isLogin: Boolean },
  data() {
    return {
      notifications: [],
      isNotificationOpen: false,
    };
  },
  setup(props, { emit }) {
    const userData = inject("userData"); // App.vue에서 제공한 `userData` 가져오기
    const searchQuery = ref("");
    const router = useRouter();

    const sendToMain = () => {
      emit("search", searchQuery.value);

      // 현재 페이지가 main_main.vue가 아니라면 이동
      if (router.currentRoute.value.path !== "/") {
        router.push({ path: "/", query: { search: searchQuery.value } });
      }
    };

    //언어
    const { t, locale } = useI18n();
    locale.value = sessionStorage.getItem("locale") || "ko";
    const changeLanguage = (lang) => {
      locale.value = lang;
      sessionStorage.setItem("locale", lang);
    };
    const language = ref(locale.value === "en" ? "English" : "한국어");
    const flagSrc = ref(
      locale.value === "en"
        ? "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/united-states.svg"
        : "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/south-korea.svg"
    );
    const isKoreanActive = computed(() => locale.value === "ko");
    const isEnglishActive = computed(() => locale.value === "en");

    watchEffect(() => {
      language.value = locale.value === "en" ? "English" : "한국어";
      flagSrc.value =
        locale.value === "en"
          ? "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/united-states.svg"
          : "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/south-korea.svg";
    });

    //로그인
    const isLogin = inject("isLogin");
    const logout = inject("logout");
    const updateLoginStatus = inject("updateLoginStatus");

    watch(isLogin, (newValue) => {
      console.log("Header - isLogin 변경 감지:", newValue);
    });
    return {
      t,
      locale,
      changeLanguage,
      language,
      flagSrc,
      isKoreanActive,
      isEnglishActive,
      isLogin,
      updateLoginStatus,
      ref,
      userData,
      logout,
      searchQuery,
      sendToMain,
    };
  },
  created() {
    if (window.websocketInstance) {
      console.log("헤더 - 기존 웹소켓 사용");
    } else {
      console.log("웹소켓 연결되지 않음 - 로그인 필요");
    }
    window.addEventListener("new-notification", this.addNotification);
  },
  computed: {
    hasNotifications() {
      return this.notifications.length > 0;
    },
    truncatedNotifications() {
      return this.notifications.map((item) => ({
        ...item,
        shortMessage: item.message.length > 100 ? item.message.substring(0, 100) + "..." : item.message,
      }));
    },
  },
  methods: {
    loadNotifications() {
      const savedNotifications = sessionStorage.getItem("notifications");
      if (savedNotifications) {
        this.notifications = JSON.parse(savedNotifications);
      }
    },
    addNotification(event) {
      const data = event.detail;
      console.log("새로운 알림 : ", data);
      this.notifications.unshift(data);
      sessionStorage.setItem("notifications", JSON.stringify(this.notifications));
    },
    removeNotification(index) {
      this.notifications.splice(index, 1);
      sessionStorage.setItem("notifications", JSON.stringify(this.notifications));
    },
    closeNotification() {
      const notificationTab = document.getElementById("kt_menu_notifications");
      if (notificationTab) {
        const bsTab = bootstrap.Tab.getInstance(notificationTab);
        if (bsTab) {
          bsTab.hide();
        }
      }
    },
    handleNotificationClick(lectureId, questionId) {
      const newPath = `/lectures/${lectureId}/questions/${questionId}`;
      if (this.$route.fullPath === newPath) {
        this.$router.push({ path: newPath, query: { refresh: Date.now() } });
      } else {
        this.$router.push(newPath);
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener("new-notification", this.addNotification);
  },
};
</script>
<style>
.notification-icon {
  color: gray;
}

.ki-duotone.has-notifications {
  color: red !important;
}
</style>
