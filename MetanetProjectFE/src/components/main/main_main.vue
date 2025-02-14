<template>
  <div class="main-container">
    <div class="text-center mb-12 mt-15">
      <h3 class="fs-2hx text-gray-900 mb-5" id="team">{{ t("main.closingSoon") }}</h3>
      <div class="fs-5 text-muted fw-bold">{{ t("main.closingDescription") }}</div>
    </div>
    <Lecture_list_item :lectures="topDeadLectures" :sliderId="'slider-dead'" />

    <hr>
    <!-- Top5: 좋아요 강의 -->
    <div class="text-center mb-12">
      <h3 class="fs-2hx text-gray-900 mt-20 mb-5" id="team">{{ t("main.likes") }}</h3>
      <div class="fs-5 text-muted fw-bold">{{ t("main.likesDescription") }}</div>
    </div>
    <Lecture_list_item :lectures="topLikeLectures" :sliderId="'slider-like'" />

    <hr>
    <!-- 모든 강의 리스트 -->
    <div ref="lectureSection" class="section full-lectures">
      <div class="header text-center">
        <h3 class="fs-2hx  mb-5 mt-20" id="team">{{ t("main.list") }}</h3>
        <ul class="nav d-flex" role="tablist">
          <li v-for="tag in availableTags" :key="tag" class="nav-item mb-3" role="presentation">
            <a 
              class="nav-link btn btn-flex flex-center btn-color-gray-600 btn-active-color-white rounded-4 w-60px h-35px"
              data-bs-toggle="tab"
              href="#"
              role="tab"
              @click.prevent="selectTag(tag)"
              :class="{ 'btn-primary': selectedTag === tag }" 
            >
              {{ tag }}
            </a>
          </li>
        </ul>
      </div>

      <div class="lecture-grid" style="padding: 30px 20px">
        <div class="lecture-grid-item" v-for="lecture in paginatedLectures" :key="lecture.lectureId">
          <Lecture_box
            :lectureId="lecture.lectureId"
            :profile="lecture.profile"
            :title="lecture.title"
            :name="lecture.category"
            :price="lecture.price"
            :tags="lecture.tags"
            :likes="lecture.likes"
            :leftSpace="lecture.leftSpace"
            :teacher="lecture.teacher || '강사 미정'"
          />
        </div>
      </div>
    
      <!-- Pagination Controls -->
      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
        <span
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ 'active-page': page === currentPage }"
          class="page-number"
        >
          {{ page }}
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import Lecture_box from "../lecture-box/Lecture_box.vue";
import Lecture_list_item from "../lecture-box/Lecture_list_item.vue";
import api from "../../apis/apiService";
import { useI18n } from "vue-i18n";

export default {
  name: "main_main",
  components: {
    Lecture_box,
    Lecture_list_item,
  },
  props: {
    searchKeyword: String,
  },
  data() {
    return {
      lectureSection: null,
      lectures: [],
      topDeadLectures: [],
      topLikeLectures: [],
      currentPage: 1,
      itemsPerPage: 30,
      availableTags: [],
      selectedTag: null,
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  watch: {
    searchKeyword(newQuery) {
      if (newQuery?.trim()) {
        this.scrollToResults();
      }
    },
  },
  computed: {
    filteredLectures() {
      const searchQuery = this.searchKeyword?.toLowerCase() || this.$route.query.search || "";
      return this.lectures.filter((lecture) => {
        const tagMatch =
          !this.selectedTag || 
          (lecture.tags?.split(",").map((t) => t.trim().toLowerCase()).includes(this.selectedTag.toLowerCase()));
        const titleMatch = lecture.title.toLowerCase().includes(searchQuery);
        const teacherMatch = (lecture.teacher || "").toLowerCase().includes(searchQuery);
        return tagMatch && (titleMatch || teacherMatch);
      });
    },
    paginatedLectures() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.filteredLectures.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredLectures.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchLectures() {
      try {
        const result = await api({ method: "get", url: "/lectures/all" });
        const data = result.data.data;
        this.lectures = data.getAll;
        this.topDeadLectures = data.getRankByDeadDate;
        this.topLikeLectures = data.getRankByLike;
        const tagSet = new Set();
        this.lectures.forEach((lecture) => {
          if (lecture.tags) {
            lecture.tags.split(",").forEach((tag) => {
              tagSet.add(tag.trim());
            });
          }
        });
        this.availableTags = Array.from(tagSet);
      } catch (error) {
        console.error("강의 목록 조회 실패:", error.response ? error.response.data : error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
    scrollToResults() {
      this.$nextTick(() => {
        if (this.lectureSection) {
          this.lectureSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
  mounted() {
    this.lectureSection = this.$refs.lectureSection;
    if (this.searchKeyword?.trim()) {
      this.scrollToResults();
    }
    this.fetchLectures();
  },
};
</script>

<style scoped>
  .section {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.55rem;
    font-weight: bold;
  }

  .tag-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
  .tag-filter {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  .tag-filter input {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .lecture-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr); /* 기본적으로 5개 */
    justify-content: center;
    padding: 0 30px;
  }

  /* 화면이 줄어들수록 4개 → 3개 → 2개로 조정 */
  @media (max-width: 1200px) { 
    .lecture-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 992px) { 
    .lecture-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) { 
    .lecture-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 420px) { 
    .lecture-grid {
      grid-template-columns: repeat(2, 1fr); /* 420px 이하에서 2개 */
    }
  }

  .nav {
    height: 70px;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    flex-wrap: wrap; /* 요소들이 넘칠 경우 자동 줄바꿈 */
    padding: 0 70px;
    background-color: #f8f9fa; /* 밝은 회색 */
    gap: 10px; /* 요소 간격 조정 */
  }

  .pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .pagination-controls button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background: none;
    border: 1px solid #3b82f6;
    border-radius: 4px;
    color: #3b82f6;
  }

  .pagination-controls button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .page-number {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .active-page {
    background-color: #FFF;
    color: white;
    border: 1px solid #3b82f6;
  }

  /* 기본 상태 (선택 해제 시) */
  .nav-link {
    transition: background-color 0.2s, color 0.2s;
    background-color: transparent; /* 기본 배경 */
    color: black !important; /* 선택 해제 시 글자색을 검정으로 고정 */
    border: 1px solid transparent;
  }

  /* hover 시 글자색 유지 */
  .nav-link:hover {
    color: black !important; /* hover 시에도 검정 */
  }

  /* 선택된 상태 */
  .nav-link.btn-primary {
    background-color: #3b82f6 !important; /* 선택된 경우 배경색 */
    color: white !important; /* 선택된 경우 글자색 */
    border-color: #3b82f6 !important;
  }
</style>