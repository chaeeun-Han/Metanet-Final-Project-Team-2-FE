<template>
  <div class="lecture-qna">
    <h3>Q&A 게시판</h3>
    <div v-if="qnaData && qnaData.length">
      <div v-for="item in qnaData" :key="item.questionId" class="qna-item">
        <!-- 제목을 클릭하면 /lecture/{lectureId}/QNA/{questionId}로 이동 -->
        <router-link :to="`/lecture/${$route.params.lectureId}/QNA/${item.questionId}`" class="qna-title-link">
          <h4 class="qna-title">{{ item.title }}</h4>
        </router-link>
        <p class="qna-meta">
          작성자: {{ item.writer }} | 작성일: {{ formatDate(item.date) }} | 답변 수: {{ item.answerCount }}
        </p>
      </div>
    </div>
    <div v-else class="text-center py-5"><span class="spinner-border text-primary"></span> Q&A 데이터 로딩 중...</div>
  </div>
</template>

<script>
import api from "../../../apis/api";
export default {
  name: "LectureQnA",
  data() {
    return {
      qnaData: [],
    };
  },
  methods: {
    async fetchQnaData() {
      const lectureId = this.$route.params.lectureId;
      try {
        const response = await api.get(`/lectures/${lectureId}/questions`);
        // API 응답 구조에 따라 수정: 여기서는 response.data.data가 Q&A 배열이라고 가정
        this.qnaData = response.data.data;
      } catch (error) {
        console.error("Q&A 데이터 가져오기 실패:", error);
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleString();
    },
  },
  created() {
    this.fetchQnaData();
  },
  watch: {
    "$route.params.lectureId": "fetchQnaData",
  },
};
</script>

<style scoped>
.qna-item {
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
.qna-title-link {
  text-decoration: none;
  color: inherit;
}
.qna-title {
  font-weight: bold;
  margin-bottom: 0.25rem;
  cursor: pointer;
}
.qna-title:hover {
  color: #1d4ed8;
}
.qna-meta {
  font-size: 0.9rem;
  color: #555;
}
</style>
