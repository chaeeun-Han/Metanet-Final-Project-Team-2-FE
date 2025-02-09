<template>
  <div class="lecture-intro">
    <div class="intro-container" v-if="lectureData">
      <div class="left-panel" style="margin-bottom: 30px; padding: 30px">
        <img :src="lectureData.descriptionPic" alt="강의 설명 이미지" />
      </div>

      <div class="card card-flush mb-5 mb-xl-10 cartbox" style="padding: 30px">
        <!-- 가격 & 좋아요 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-2 fw-bold">₩{{ formatPrice(lectureData.price) }}</span>
          <button class="like-button" @click="toggleLike">
            <i :class="['fas', isLiked ? 'fa-heart text-danger' : 'fa-heart text-muted']"></i> {{ likes }}
          </button>
        </div>

        <!-- 강사 정보 -->
        <div class="text-muted mb-3">
          <span class="fw-bold">강사 <br /></span> - {{ lectureData.teacher || "정보 없음" }}
        </div>

        <!-- 강의 일정 -->
        <div class="text-muted mb-3">
          <span class="fw-bold">강의 일정 <br /></span> - {{ lectureData.lectureDate || "정보 없음" }}
        </div>

        <!-- 상세 강의 일정 -->
        <div class="text-muted">
          <span class="fw-bold">상세 강의 일정 <br /> </span>- {{ lectureData.startDate || "정보 없음" }} ~
          {{ lectureData.endDate || "정보 없음" }}
          <ul class="mt-2 mb-0">
            <li v-for="(schedule, index) in lectureData.detailSchedule" :key="index">
              {{ schedule }}
            </li>
          </ul>
        </div>
        <!-- 수강신청 버튼 -->
        <div class="d-flex gap-3 mb-4" style="margin-top: 30px">
          <button class="btn btn-primary flex-grow-1" :disabled="isDeadlinePassed">수강신청</button>
        </div>
      </div>
    </div>

    <div v-else class="loading">데이터 로딩 중...</div>

    <!-- 리뷰 테이블 섹션 -->
    <div class="card card-flush mb-5 mb-xl-10" style="padding: 30px; margin-top: 30px">
      <h3 class="reviews-title">리뷰</h3>
      <div v-if="reviewsLoaded && reviews.length">
        <table class="table align-middle table-row-dashed fs-6 gy-5">
          <thead>
            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
              <th class="min-w-10%">.</th>
              <th class="min-w-10%">사진</th>
              <!-- 프로필 -->
              <th class="min-w-10%">멤버</th>
              <th class="min-w-60%">코멘트</th>
              <th class="min-w-10% text-end">작성 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="review in reviews" :key="review.reviewId">
              <!-- 답글이면 'ㄴ' 표시 -->
              <td v-if="review.answerId"><span class="badge badge-light-warning ms-2">답글</span></td>
              <td v-else></td>

              <!-- 프로필 -->
              <td>
                <div class="symbol symbol-circle symbol-50px overflow-hidden">
                  <img :src="review.profile || defaultProfile" class="symbol-label" alt="Profile" />
                </div>
              </td>
              <!-- 멤버 정보 -->
              <td>
                <div class="d-flex align-items-center">
                  <span v-if="!isTeacher(review)" class="badge badge-light-warning ms-2">학생</span>
                  <span v-if="isTeacher(review)" class="badge badge-light-primary ms-2">강사</span>
                </div>
              </td>
              <!-- 리뷰 내용 -->
              <td class="fw-semibold text-gray-600">{{ review.content }}</td>
              <!-- 작성 시간 -->
              <td class="text-end">{{ formatDate(review.reviewDate) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="reviewsLoaded && !reviews.length" class="loading" style="margin-top: 20px">리뷰 없음</div>
      <div v-else class="loading" style="margin-top: 20px">리뷰 데이터 로딩 중...</div>
    </div>
  </div>
</template>

<script>
import api from "../../../apis/api";

export default {
  name: "Lecture_Intro",
  props: {
    lectureData: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data() {
    return {
      likes: this.lectureData?.likes || 0, // 좋아요 수 관리
      isLiked: false, // 좋아요 여부
      reviews: [], // 리뷰 목록
      reviewsLoaded: false, // 리뷰 로딩 여부
      defaultProfile: "assets/media/default-profile.jpg", // 기본 프로필 이미지
    };
  },
  computed: {
    isDeadlinePassed() {
      if (!this.lectureData.deadlineTime) return false;
      return new Date(this.lectureData.deadlineTime) < new Date();
    },
  },
  methods: {
    formatPrice(price) {
      return Number(price).toLocaleString();
    },
    formatDate(dateStr) {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    async toggleLike() {
      try {
        await api.post(`/lectures/likes/${this.lectureData.lectureId}`);

        // 좋아요 상태 토글
        this.isLiked = !this.isLiked;

        // 좋아요 개수 반영
        this.likes = this.isLiked ? this.likes + 1 : this.likes - 1;
      } catch (error) {
        console.error("좋아요 처리 실패:", error);
      }
    },
    async fetchReviews() {
      try {
        const response = await api.get(`/lecture/${this.lectureData.lectureId}/reviews`);
        this.reviews = response.data.data || [];
        this.reviewsLoaded = true;
      } catch (error) {
        console.error("리뷰 데이터 가져오기 실패:", error);
        this.reviewsLoaded = true;
      }
    },
    isTeacher(review) {
      return String(review.memberId) === String(this.lectureData.memberId);
    },
  },
  watch: {
    lectureData: {
      handler(newVal) {
        if (newVal) {
          this.fetchReviews();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.intro-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: start;
}

@media (max-width: 768px) {
  .intro-container {
    grid-template-columns: 1fr;
  }
}

.left-panel {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.left-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 좋아요 버튼 */
.like-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.like-button .fa-heart {
  transition: color 0.3s ease-in-out;
}

.like-button .fa-heart.text-danger {
  color: red;
}

/* ❌ 마감된 강의 버튼 스타일 */
button:disabled {
  background-color: #ccc !important;
  cursor: not-allowed !important;
  color: #666 !important;
}

/* 테이블 스타일 */
.table th {
  white-space: nowrap;
}

.table td {
  vertical-align: middle;
}
.like-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.like-button .fa-heart {
  transition: color 0.3s ease-in-out;
}

.like-button .fa-heart.text-danger {
  color: red; /* 좋아요 눌렀을 때 빨갛게 */
}

.like-button .fa-heart.text-muted {
  color: gray; /* 좋아요 안 눌렀을 때 회색 */
}
</style>
