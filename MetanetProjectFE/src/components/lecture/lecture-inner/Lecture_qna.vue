<template>
  <div class="container">
    <div class="list-top">
      <button @click="handleClick" class="question-button">질문하기</button>
    </div>
    <table class="table" v-if="questions && questions.length > 0">
      <tbody>
        <tr v-for="(question, index) in paginatedQuestions" :key="index" class="questionList" @click="handleRowClick(question)">
          <td>
            <div class="left-content">
              <h3>{{ question.title }}</h3>
              <p>{{ question.writer }}</p>
            </div>
          </td>
          <td>
            <div class="right-content">
              <div class="comments-box">
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="icon-svg">
                    <path
                      d="M12 2C6.48 2 2 5.8 2 10c0 2.38 1.19 4.5 3.09 6l-1.07 4.28c-.1.38.27.72.63.53L9 18.87c.97.19 1.98.3 3 .3 5.52 0 10-3.8 10-8S17.52 2 12 2z"
                    />
                  </svg>
                </span>
                <span class="comments-count">{{ question.answerCount }}</span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="no-questions">
      <p>질문글이 없습니다.</p>
    </div>
    <div class="pagination-controls">
      <span @click="previousPage" :class="{ disabled: currentPage === 1 }" class="pagination-text"> &lt; </span>
      <span v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="['pagination-number', { active: page === currentPage }]">
        {{ page }}
      </span>
      <span @click="nextPage" :class="{ disabled: currentPage === totalPages }" class="pagination-text"> &gt; </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "../../../apis/api";

export default {
  data() {
    return {
      questions: [],
      currentPage: 1,
      pageSize: 10,
      maxVisiblePages: 5,
    };
  },
  props: {
    lectureData: Object,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.questions.length / this.pageSize);
    },
    paginatedQuestions() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.questions.slice(start, end);
    },
    visiblePages() {
      const half = Math.floor(this.maxVisiblePages / 2);
      let startPage = Math.max(1, this.currentPage - half);
      let endPage = Math.min(this.totalPages, startPage + this.maxVisiblePages - 1);

      if (endPage - startPage + 1 < this.maxVisiblePages) {
        startPage = Math.max(1, endPage - this.maxVisiblePages + 1);
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
  },
  methods: {
    async fetchQuestions() {
      try {
        const lectureId = this.$route.params.lectureId;
        const response = await api.get(`/lectures/${lectureId}/questions`);
        this.questions = response.data.data;
        console.log("Fetched questions:", this.questions);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    },
    handleRowClick(question) {
      const lectureId = this.$route.params.lectureId;
      this.$router.push(`/lectures/${lectureId}/questions/${question.questionId}`);
    },
    goToPage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    handleClick() {
        const lectureId = this.$route.params.lectureId;
        const token = sessionStorage.getItem("accessToken");
        if (!token) {
          Swal.fire('로그인 필요', '질문을 작성하려면 로그인해주세요', 'info');
          return;
        }
        this.$router.push(`/lectures/${lectureId}/questions/write`);
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  text-align: center;
  margin: 30px auto;
  width: 100%;
  max-width: 700px;
  padding: 0 15px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}
.list-top {
  text-align: right;
  margin-bottom: 20px;
}
.question-button {
  padding: 8px 15px 8px 15px;
  min-width: 100;
  height: auto;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  background-color: #0a72eb;
  color: white;
  border: none;
  box-shadow: none;
}

.left-content {
  text-align: left;
}

.left-content h3 {
  font-size: 16px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
  cursor: pointer;
}

.left-content p {
  font-size: 14px;
  color: gray;
}

.right-content {
  display: flex;
  justify-content: flex-end;
}

.comments-box {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
}

.icon {
  display: flex;
  align-items: center;
  margin-right: 5px;
}

.icon-svg {
  width: 20px;
  height: 20px;
  color: gray;
}

.comments-count {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.pagination-controls {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.pagination-text {
  font-size: 18px;
  cursor: pointer;
  color: grey;
  user-select: none;
  margin-left: 5px;
  margin-right: 5px;
}

.pagination-text.disabled {
  color: #cdd2df;
  cursor: not-allowed;
}

.pagination-number {
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
  user-select: none;
}

.pagination-number.active {
  background-color: #0a72eb;
  color: white;
  border: none;
}

.pagination-number:hover {
  background-color: #ddd;
}
.no-questions {
  font-size: 17px;
  font-weight: 600;
  color: #9aa2b8;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 10px;
  }
}
@media (max-width: 450px) {
  .left-content h3 {
    font-size: 16px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
}
</style>
