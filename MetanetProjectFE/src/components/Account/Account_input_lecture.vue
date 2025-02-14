<template>
  <div class="card card-xl-stretch mb-xl-8">
    <div class="d-flex flex-column flex-root" id="kt_app_root">
      <div class="text-center mb-11">
        <h1 class="text-gray-900 fw-bolder mb-3" style="margin-top: 30px">강의 등록</h1>
      </div>
      <div style="margin: 0 auto 100px auto">
        <div style="max-width: 700px">
          <!-- Account_input 컴포넌트에 v-model과 submit 이벤트 바인딩 -->
          <Account_input :fields="loginFormFields" v-model="loginFormData" />
        </div>
      </div>
      <div class="text-gray-500 text-center fw-semibold fs-6">
        아직 회원정보가 없으시나요?
        <a href="#" class="link-primary">회원가입</a>
      </div>

      <!-- 제출한 데이터를 화면에 표시 (데이터가 있을 때만 보임) -->
      <div v-if="submittedData" class="mt-5">
        <h3>제출한 데이터:</h3>
        <pre>{{ submittedData }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import axios from "axios";
import api from "../../apis/api";
import Account_input from "./Account_input.vue";

export default {
  components: {
    Account_input,
  },
  setup() {
    const connectWebSocket = inject("connectWebSocket");
    if (!connectWebSocket) {
      console.error("❌ WebSocket 함수 로드 실패: connectWebSocket이 undefined입니다.");
    }
    return {
      connectWebSocket,
    };
  },
  data() {
    return {
      loginFormFields: [
        { type: "file", placeholder: "강의 대표 이미지", name: "profileFile", required: true },
        { type: "text", placeholder: "강의 명", name: "title", required: true },
        { type: "text", placeholder: "카테고리", name: "category", required: true },
        { type: "text", placeholder: "강의 소개", name: "description", required: true },
        { type: "text", placeholder: "가격", name: "price", required: true },
        { type: "text", placeholder: "제한 인원", name: "limitStudent", required: true },
        { type: "date", placeholder: "강의 시작일", name: "startDate", required: true },
        { type: "date", placeholder: "강의 종료일", name: "endDate", required: true },
        { type: "date", placeholder: "강의 예약 마감일", name: "deadlineTime", required: true },
        { type: "tags", placeholder: "수업과 관련된 태그", name: "tags", required: true },
        { type: "lists", placeholder: "강의 상세 일정", name: "lists", required: true },
        { type: "file", placeholder: "강의 상세 설정 이미지", name: "descriptionPicFile", required: true },
      ],
      loginFormData: {},
      submittedData: null, // 이 속성을 추가합니다.
    };
  },
  methods: {
    handleCodeReceived(code) {
      console.log("받은 code:", code);
      this.code = code;
    },
  },
};
</script>
