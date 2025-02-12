<template>
  <div class="lecture-intro">
    <!-- 강의 기본 정보 영역 -->
    <div class="intro-container" v-if="lectureData">
      <div class="left-panel" style="margin-bottom: 30px; padding: 30px">
        <img :src="lectureData.descriptionPic" alt="강의 설명 이미지" />
      </div>

      <div class="card card-flush mb-5 mb-xl-10 cartbox" style="padding: 30px">
        <!-- 가격 & 좋아요 -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <span class="fs-2 fw-bold">₩{{ formatPrice(lectureData.price) }}</span>
          <button class="like-button" @click="toggleLike">
            <i :class="['fas', isLiked ? 'fa-heart text-danger' : 'fa-heart text-muted']"></i>
            {{ lectureData.likes }}
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
          <span class="fw-bold">상세 강의 일정 <br /></span> - {{ lectureData.startDate || "정보 없음" }} ~ {{ lectureData.endDate || "정보 없음" }}
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
      <div style="display: flex; align-items: center; justify-content: space-between">
        <h3 class="reviews-title">리뷰</h3>
        <!-- 리뷰하기 버튼 (상단에 위치) -->
        <span class="badge badge-light-warning" style="margin-right: 4px; cursor: pointer" @click="startNewReview"> 리뷰하기 </span>
      </div>

      <!-- 새 리뷰 입력 영역 -->
      <div v-if="isNewReview" style="margin-bottom: 16px">
        <input type="text" v-model="newReviewContent" style="margin-bottom: 10px" class="form-control" placeholder="리뷰 내용을 입력하세요" />
        <span class="badge badge-light-primary large-action" style="margin-right: 4px; cursor: pointer" @click="submitNewReview"> 제출 </span>
        <span class="badge badge-light-secondary large-action" style="margin-right: 4px; cursor: pointer" @click="cancelNewReview"> 취소 </span>
      </div>

      <!-- 테이블 래퍼 -->
      <div v-if="reviewsLoaded && reviews.length" class="table-responsive">
        <table class="table align-middle table-row-dashed fs-6 gy-5">
          <thead>
            <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
              <th class="min-w-10%">.</th>
              <th class="min-w-10%">사진</th>
              <th class="min-w-10%">멤버</th>
              <th class="min-w-60%">코멘트</th>
              <th class="review-time min-w-10% text-end">작성 시간</th>
              <th class="min-w-10% text-end">액션</th>
            </tr>
          </thead>
          <tbody>
            <!-- 각 리뷰에 대해 review row와 (조건부) 답변 입력 row -->
            <template v-for="(review, index) in reviews" :key="review && review.reviewId ? review.reviewId : index">
              <tr>
                <!-- 답글이면 '답글' 표시 -->
                <td v-if="review.answerId">
                  <span class="badge badge-light-warning ms-2">답글</span>
                </td>
                <td v-else></td>

                <!-- 프로필 사진 -->
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

                <!-- 리뷰 내용: 편집 중이면 input, 아니면 텍스트 -->
                <td class="fw-semibold text-gray-600">
                  <template v-if="editingReviewId === review.reviewId">
                    <input style="min-width: 150px" type="text" v-model="editingContent" class="form-control" />
                  </template>
                  <template v-else>
                    {{ review.content }}
                  </template>
                </td>

                <!-- 작성 시간 -->
                <td class="review-time text-end">{{ formatDate(review.reviewDate) }}</td>

                <!-- 액션 버튼 -->
                <td class="text-end">
                  <div class="action-container">
                    <!-- 관리자 (ROLE_Admin)인 경우: 모든 액션 버튼 표시 -->
                    <template v-if="currentUserRole === 'ROLE_Admin'">
                      <template v-if="editingReviewId === review.reviewId">
                        <span class="badge badge-light-primary large-action" style="margin-right: 4px; cursor: pointer" @click="saveEdit(review)">
                          저장
                        </span>
                        <span class="badge badge-light-secondary large-action" style="margin-right: 4px; cursor: pointer" @click="cancelEdit">
                          취소
                        </span>
                      </template>
                      <template v-else>
                        <span class="badge badge-light-warning" style="margin-right: 4px; cursor: pointer" @click="startEditing(review)"> 수정 </span>
                        <span class="badge badge-light-danger" style="margin-right: 4px; cursor: pointer" @click="deleteReview(review)"> 삭제 </span>
                        <span class="badge badge-light-warning" style="margin-right: 4px; cursor: pointer" @click="startReply(review)">
                          답변하기
                        </span>
                      </template>
                    </template>
                    <!-- 관리자가 아닌 경우 -->
                    <template v-else>
                      <!-- 본인 작성 리뷰: 수정, 삭제 -->
                      <template v-if="review.memberId === currentUserId">
                        <template v-if="editingReviewId !== review.reviewId">
                          <span class="badge badge-light-warning" style="margin-right: 4px; cursor: pointer" @click="startEditing(review)">
                            수정
                          </span>
                          <span class="badge badge-light-danger" style="margin-right: 4px; cursor: pointer" @click="deleteReview(review)">
                            삭제
                          </span>
                        </template>
                        <template v-else>
                          <span class="badge badge-light-primary large-action" style="margin-right: 4px; cursor: pointer" @click="saveEdit(review)">
                            저장
                          </span>
                          <span class="badge badge-light-secondary large-action" style="margin-right: 4px; cursor: pointer" @click="cancelEdit">
                            취소
                          </span>
                        </template>
                      </template>
                      <!-- 본인 작성이 아니고, 강사 (ROLE_Teacher)이며 해당 강의의 선생인 경우에만 답변하기 가능 -->
                      <template v-else-if="currentUserRole === 'ROLE_Teacher' && currentUserId === lectureData.memberId">
                        <template v-if="replyReviewId !== review.reviewId">
                          <span class="badge badge-light-warning" style="margin-right: 4px; cursor: pointer" @click="startReply(review)">
                            답변하기
                          </span>
                        </template>
                      </template>
                    </template>
                  </div>
                </td>
              </tr>
              <!-- 답변 입력 행: 해당 리뷰에 대해 replyReviewId가 설정되었을 때, 리뷰 아래에 추가 -->
              <tr v-if="replyReviewId === review.reviewId">
                <td colspan="6" class="text-end">
                  <input
                    type="text"
                    v-model="replyContent"
                    class="form-control d-inline-block"
                    style="width: auto; margin-right: 10px"
                    placeholder="답변 입력"
                  />
                  <span class="badge badge-light-primary large-action" style="margin-right: 4px; cursor: pointer" @click="submitReply(review)">
                    완료
                  </span>
                  <span class="badge badge-light-secondary large-action" style="margin-right: 4px; cursor: pointer" @click="cancelReply"> 취소 </span>
                </td>
              </tr>
            </template>
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
      defaultProfile: "/public/assets/media/default-profile.jpg", // 기본 프로필 이미지

      // 리뷰 수정/답변 관련 상태값
      editingReviewId: null,
      editingContent: "",
      replyReviewId: null,
      replyContent: "",

      // 새 리뷰 관련 상태값
      isNewReview: false,
      newReviewContent: "",
    };
  },
  computed: {
    isDeadlinePassed() {
      if (!this.lectureData.deadlineTime) return false;
      return new Date(this.lectureData.deadlineTime) < new Date();
    },
    currentUserId() {
      return localStorage.getItem("memberId");
    },
    currentUserRole() {
      return localStorage.getItem("memberRole");
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
        this.isLiked = !this.isLiked;
        this.likes = this.isLiked ? this.likes + 1 : this.likes - 1;
      } catch (error) {
        console.error("좋아요 처리 실패:", error);
      }
    },
    async fetchReviews() {
      try {
        const response = await api.get(`/lectures/${this.lectureData.lectureId}/reviews`);
        // undefined나 null 값은 필터링
        this.reviews = (response.data.data || []).filter((review) => review);
        this.reviewsLoaded = true;
      } catch (error) {
        console.error("리뷰 데이터 가져오기 실패:", error);
        this.reviewsLoaded = true;
      }
    },
    isTeacher(review) {
      // 강의 강사와 리뷰 작성자가 동일하면 강사로 판단
      return String(review.memberId) === String(this.lectureData.memberId);
    },
    // 리뷰 수정 관련 메서드
    startEditing(review) {
      this.editingReviewId = review.reviewId;
      this.editingContent = review.content;
    },
    cancelEdit() {
      this.editingReviewId = null;
      this.editingContent = "";
    },
    async saveEdit(review) {
      try {
        const payload = { content: this.editingContent };
        await api.put(`/lectures/${this.lectureData.lectureId}/reviews/${review.reviewId}`, payload);
        review.content = this.editingContent;
        this.editingReviewId = null;
        this.editingContent = "";
      } catch (error) {
        console.error("리뷰 수정 실패:", error);
      }
    },
    async deleteReview(review) {
      try {
        const payload = { deleted: 1 };
        await api.delete(`/lectures/${this.lectureData.lectureId}/reviews/${review.reviewId}`, { data: payload });
        // 삭제 성공 시 리뷰 리스트에서 제거
        this.reviews = this.reviews.filter((r) => r.reviewId !== review.reviewId);
      } catch (error) {
        console.error("리뷰 삭제 실패:", error);
      }
    },
    // 강사/관리자 답변 관련 메서드
    startReply(review) {
      this.replyReviewId = review.reviewId;
      this.replyContent = "";
    },
    cancelReply() {
      this.replyReviewId = null;
      this.replyContent = "";
    },
    async submitReply(review) {
      try {
        const payload = { content: this.replyContent };
        await api.post(`/lectures/${this.lectureData.lectureId}/reviews/${review.reviewId}`, payload);
        // 제출 성공 시 페이지 새로고침
        window.location.reload();
      } catch (error) {
        console.error("답글 등록 실패:", error);
      }
    },
    // 새 리뷰 추가 관련 메서드
    startNewReview() {
      this.isNewReview = true;
      this.newReviewContent = "";
    },
    cancelNewReview() {
      this.isNewReview = false;
      this.newReviewContent = "";
    },
    async submitNewReview() {
      try {
        const payload = { content: this.newReviewContent };
        await api.post(`/lectures/${this.lectureData.lectureId}/reviews`, payload);
        // 제출 성공 시 페이지 새로고침
        window.location.reload();
      } catch (error) {
        console.error("리뷰 추가 실패:", error);
      }
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
button:disabled {
  background-color: #ccc !important;
  cursor: not-allowed !important;
  color: #666 !important;
}
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
  color: red;
}
.like-button .fa-heart.text-muted {
  color: gray;
}
/* Badge 기본 스타일 (예시) */
.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge-light-warning {
  color: #856404;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
}
.badge-light-danger {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}
.badge-light-primary {
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
}
.badge-light-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border: 1px solid #d6d8db;
}

/* 추가: 큰 액션 버튼 스타일 */
.large-action {
  font-size: 1rem !important;
  padding: 0.5em 1em !important;
}

/* 액션 버튼 컨테이너 모바일 스타일 */
.action-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

@media (max-width: 768px) {
  .action-container {
    display: block;
    text-align: center;
    margin-top: 8px;
  }
  .action-container span {
    display: inline-block;
    margin-bottom: 4px;
  }
}

/* 테이블 반응형: 가로 스크롤 */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
}

/* 모바일에서 작성 시간 열 숨김 */
@media (max-width: 576px) {
  .review-time {
    display: none;
  }
}

/* 프로필 이미지 스타일: 왜곡 없이 채우기 */
.symbol-label {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
