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
    <div
      class="app-container container-fluid d-flex align-items-stretch justify-content-between"
      id="kt_app_header_container"
    >
      <!-- Mobile Logo -->
      <div class="px-6" id="" style="display: flex; align-items: center; justify-self: center">
        <!--begin::Logo image-->
        <a href="/">
          <img
            alt="Logo"
            src="../../../public/assets/media/logos/default-dark.svg"
            class="h-25px app-sidebar-logo-default"
          />
          <img
            alt="Logo"
            src="../../../public/assets/media/logos/default-small.svg"
            class="h-20px app-sidebar-logo-minimize"
          />
        </a>
      </div>

      <!-- Header Wrapper -->
      <div class="d-flex align-items-center justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
        <!-- Menu Wrapper -->
        <div
          class="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="250px"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        >
          <!-- Menu -->
          <div
            class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
            id="kt_app_header_menu"
            data-kt-menu="true"
          >
            <!-- Menu Item: Pages -->
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              class="menu-item here show"
            >
              <span class="menu-link">
                <span class="menu-title">Pages</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <!-- Menu Sub -->
              <div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                <div class="menu-active-bg px-4 px-lg-0">
                  <!-- Tabs Nav -->
                  <div class="d-flex w-100 overflow-auto">
                    <ul
                      class="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1"
                      role="tablist"
                    >
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 active text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_account"
                          aria-selected="true"
                          role="tab"
                          >Account</a
                        >
                      </li>
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_widgets"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                          >Widgets</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- Tabs Nav End -->
                  <!-- Tabs Content -->
                  <div class="tab-content py-4 py-lg-8 px-lg-7">
                    <div class="tab-pane active w-lg-600px" id="kt_app_header_menu_pages_account" role="tabpanel">
                      <div class="row">
                        <div class="col-lg-5 mb-6 mb-lg-0">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="menu-item p-0 m-0">
                                <a href="account/overview.html" class="menu-link active">
                                  <span class="menu-title">Overview</span>
                                </a>
                              </div>
                              <div class="menu-item p-0 m-0">
                                <a href="account/settings.html" class="menu-link">
                                  <span class="menu-title">Settings</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <img
                            src="../../../public/assets/media/stock/900x600/46.jpg"
                            class="rounded mw-100"
                            alt="Menu Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets" role="tabpanel">
                      <div class="row">
                        <div class="col-lg-4 mb-6 mb-lg-0">
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/lists.html" class="menu-link">
                              <span class="menu-title">Lists</span>
                            </a>
                          </div>
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/statistics.html" class="menu-link">
                              <span class="menu-title">Statistics</span>
                            </a>
                          </div>
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/charts.html" class="menu-link">
                              <span class="menu-title">Charts</span>
                            </a>
                          </div>
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/mixed.html" class="menu-link">
                              <span class="menu-title">Mixed</span>
                            </a>
                          </div>
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/tables.html" class="menu-link">
                              <span class="menu-title">Tables</span>
                            </a>
                          </div>
                          <div class="menu-item p-0 m-0">
                            <a href="widgets/feeds.html" class="menu-link">
                              <span class="menu-title">Feeds</span>
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <img
                            src="../../../public/assets/media/stock/900x600/44.jpg"
                            class="rounded mw-100"
                            alt="Menu Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Tabs Content End -->
                </div>
              </div>
              <!-- Menu Sub End -->
            </div>
            <!-- End Menu Item -->
          </div>
          <!-- End Menu -->
        </div>

        <div class="herehere" style="flex-grow: 0.3; position: relative">
          <form data-kt-search-element="form" class="w-100 position-relative mb-3" autocomplete="off">
            <input
              type="text"
              v-model="searchQuery"
              name="company"
              class="form-control form-control-lg form-control-solid"
              placeholder="강의를 검색해 보세요"
              style="padding: 0px 30px"
            />
          </form>

          <!-- searchQuery 값이 있을 때만 표시 -->
          <div
            v-if="searchQuery"
            style="position: absolute; width: 100%; height: 100px"
            id="kt_profile_details_view"
            class="card mb-5 mb-xl-10"
          >
            <div>asdfasfadfsdf</div>
          </div>
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
            <div
              class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
              data-kt-menu="true"
              id="kt_menu_notifications"
            >
              <div
                class="d-flex flex-column bgi-no-repeat rounded-top"
                :style="{ backgroundImage: 'url(../../../public/assets/media/misc/menu-header-bg.jpg)' }"
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
                      >알림</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="kt_topbar_notifications_1" role="tabpanel">
                  <div class="scroll-y mh-325px my-5 px-8">
                    <div
                      v-if="userData"
                      v-for="(item, index) in truncatedNotifications"
                      :key="index"
                      class="d-flex flex-stack py-4"
                    >
                      <div class="d-flex align-items-center">
                        <div class="fs-6 text-gray-800 text-hover-primary fw-bold cursor-pointer"
                            @click="removeNotification(index); closeNotification(); handleNotificationClick(item.lectureId, item.questionId)">
                          {{ item.shortMessage }}
                        </div>
                      </div>
                    </div>
                    <div v-if="!userData">asdf</div>
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
                    <img :src="userData.profile" alt="프로필" />
                  </div>
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">
                      {{ userData.name }}
                      <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">{{ userData.role }}</span>
                    </div>
                    <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">{{ userData.email }}</a>
                  </div>
                </div>
              </div>
              <div class="separator my-2"></div>
              <div class="menu-item px-5">
                <router-link to="/account" class="menu-link px-5">내 프로필</router-link>
              </div>
              <div class="menu-item px-5">
                <a href="apps/projects/list.html" class="menu-link px-5">
                  <span class="menu-text">내가 수강한 강의</span>
                  <span class="menu-badge">
                    <span class="badge badge-light-danger badge-circle fw-bold fs-7">{{ userData.courseCount }}</span>
                  </span>
                </a>
              </div>
              <div
                class="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative">
                    언어
                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                      {{ userData.language }}
                      <img
                        class="w-15px h-15px rounded-1 ms-2"
                        src="../../../public/assets/media/flags/united-states.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </a>
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5 active">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/united-states.svg" alt="" />
                      </span>
                      영어
                    </a>
                  </div>
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/spain.svg" alt="" />
                      </span>
                      한국어
                    </a>
                  </div>
                </div>
              </div>
              <div class="menu-item px-5 my-1">
                <a href="account/settings.html" class="menu-link px-5">회원 정보 변경하기</a>
              </div>
              <div class="menu-item px-5">
                <!-- <a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5" @click="logout">로그 아웃</a> -->
                <a v-if="isLogin" @click="logout" class="menu-link px-5">로그아웃</a>
                <router-link v-else to="/login" class="menu-link px-5">로그인</router-link>
              </div>
            </div>
          </div>
          <!-- Mobile Header Menu Toggle -->
          <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
            <div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
              <i class="ki-duotone ki-element-4 fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
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
import axios from "axios";
import { inject, watch } from "vue";

export default {
  name: "Header",
  props: {
    // 사용자 정보를 객체 형태로 전달받음 (부모(App.vue)에서 넘김)
    userData: {
      type: Object,
    },
    isLogin: Boolean,
  },
  data() {
    return {
      notifications: [],
      searchQuery: "",
      isNotificationOpen: false,
    };
  },
  setup() {
    const isLogin = inject("isLogin");
    const updateLoginStatus = inject("updateLoginStatus");
    watch(isLogin, (newValue) => {
      console.log("🔄 Header - isLogin 변경 감지:", newValue);
    });
    return { isLogin, updateLoginStatus };
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
    return this.notifications.map(item => ({
        ...item,
        shortMessage: item.message.length > 100 ? item.message.substring(0, 100) + "..." : item.message
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
    logout() {
      sessionStorage.clear();
      console.log("로그아웃됨");
      this.updateLoginStatus(false);
      if (this.$route.fullPath === "/") {
        this.$router.push({ path: "/", query: { refresh: Date.now() } });
      } else {
        this.$router.push("/");
      }
    }
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