<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
      <!-- 강의 헤더 -->
      <LectureHeader v-if="lectureData" :data="lectureData" />
      <div v-else class="text-center py-5"><span class="spinner-border text-primary"></span> 데이터 로딩 중...</div>
      <!-- 네비게이션 탭 -->
      <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
        <li class="nav-item mt-2">
          <router-link
            class="nav-link text-active-primary ms-0 me-10 py-5"
            :to="`/lectures/${$route.params.lectureId}`"
            exact-active-class="active"
          >
            강의 소개
          </router-link>
        </li>
        <li class="nav-item mt-2">
          <router-link
            class="nav-link text-active-primary ms-0 me-10 py-5"
            :to="`/lectures/${$route.params.lectureId}/questions`"
            exact-active-class="active"
          >
            Q&A 게시판
          </router-link>
        </li>
        <li class="nav-item mt-2">
          <router-link
            class="nav-link text-active-primary ms-0 me-10 py-5"
            :to="`/lectures/${$route.params.lectureId}/file`"
            exact-active-class="active"
            :data="lectureData"
          >
            강의 자료
          </router-link>
        </li>
      </ul>
      <!-- 자식 컴포넌트에 lectureData prop 전달 -->
      <router-view :lectureData="lectureData"></router-view>
    </div>
  </div>
</template>

<script>
import LectureHeader from "./LectuerHeader.vue";
import api from "../../apis/api";

export default {
  name: "Lecture_content",
  components: {
    LectureHeader,
  },
  data() {
    return {
      lectureData: null,
      default: () => ({}),
    };
  },
  methods: {
    async fetchLectureData() {
      const lectureId = this.$route.params.lectureId;
      try {
        const response = await api.get(`/lectures/${lectureId}`);
        console.log(response);
        this.lectureData = { ...response.data.data };
      } catch (error) {
        console.error("강의 데이터 가져오기 실패:", error);
      }
    },
  },
  created() {
    this.fetchLectureData();
  },
  watch: {
    "$route.params.lectureId": "fetchLectureData",
  },
};
</script>
