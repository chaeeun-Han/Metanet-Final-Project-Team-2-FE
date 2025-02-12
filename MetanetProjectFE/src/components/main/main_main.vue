<template>
  <div class="main-container">
    <!-- Top5: 마감임박 강의 -->
    <div class="section" style="padding-top: 100px">
      <h2 class="section-title">{{ t("main.closingSoon") }}</h2>
      <div class="row justify-content-center">
        <div
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          style="padding: 30px 20px"
          v-for="lecture in topDeadLectures.slice(0, 5)"
          :key="lecture.lectureId"
        >
          <Lecture_list_item
            :lectureId="lecture.lectureId"
            :profile="lecture.profile"
            :title="lecture.title"
            :teacher="lecture.teacher || '강사명 미정'"
          />
        </div>
      </div>
    </div>

    <!-- Top5: 좋아요 강의 -->
    <div class="section">
      <h2 class="section-title">{{ t("main.likes") }}</h2>
      <div class="row justify-content-center">
        <div
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
          style="padding: 30px 20px"
          v-for="lecture in topLikeLectures.slice(0, 5)"
          :key="lecture.lectureId"
        >
          <Lecture_list_item
            :lectureId="lecture.lectureId"
            :profile="lecture.profile"
            :title="lecture.title"
            :teacher="lecture.teacher || '강사명 미정'"
          />
        </div>
      </div>
    </div>

    <div class="section full-lectures">
      <div class="header">
        <h2 class="section-title">{{ t("main.list") }}</h2>
        <div class="tag-filters">
          <label v-for="tag in availableTags" :key="tag" class="tag-filter">
            <input type="checkbox" :value="tag" v-model="selectedTags" />
            <span>{{ tag }}</span>
          </label>
        </div>
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
            :teacher="lecture.teacher || 'null'"
          />
        </div>
      </div>
      <!-- Pagination Controls: 가운데 정렬, 크게 표시 -->
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
  data() {
    return {
      lectures: [],
      topDeadLectures: [],
      topLikeLectures: [],
      // Pagination Data
      currentPage: 1,
      itemsPerPage: 30,
      availableTags: [],
      selectedTags: [],
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  computed: {
    filteredLectures() {
      if (!this.selectedTags.length) return this.lectures;
      return this.lectures.filter((lecture) => {
        if (!lecture.tags) return false;
        const tagsArray = lecture.tags.split(",").map((t) => t.trim().toLowerCase());
        return this.selectedTags.some((tag) => tagsArray.includes(tag.toLowerCase()));
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
  },
  created() {
    this.fetchLectures();
  },
};
</script>

<style scoped>
.main-container {
  padding: 0 100px;
}

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
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 270px);
  justify-content: center;
  padding: 0 30px;
}

.lecture-grid-item {
  width: 350px;
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
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
