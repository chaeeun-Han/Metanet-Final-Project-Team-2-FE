<template>
  <div class="lecture-card">
    <div class="card-body">
      <!-- 이미지 클릭 시 강의 상세 페이지로 이동 -->
      <router-link :to="`/lecture/${lectureId}`">
        <div class="img-container">
          <img :src="profile || 'assets/media/default-lecture.jpg'" alt="Lecture Image" />
        </div>
      </router-link>
      <div class="info">
        <span class="title">{{ title }}</span>
        <span class="instructor">{{ teacher }}</span>
        <span class="category">{{ name }}</span>
      </div>
      <span class="price">₩{{ price.toLocaleString() }}</span>
      <!-- 태그가 있을 경우 파란색 박스로 표시 -->
      <div class="tags" v-if="tags">{{ tags }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lectureId: {
      type: [Number, String],
      required: true,
    },
    profile: String,
    title: String,
    name: String,
    price: Number,
    tags: {
      type: String,
      default: "",
    },
    teacher: {
      type: String,
      default: "강사명 미정",
    },
  },
};
</script>

<style scoped>
.lecture-card {
  width: 269px;
  background-color: #eff6ff; /* 밝은 파란색 계열 */
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.dark .lecture-card {
  background-color: #1e3a8a;
}
.img-container {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto 0.5rem;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info {
  margin-bottom: 0.5rem;
}
.title {
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  color: #1f2937;
  cursor: pointer;
}
.title:hover {
  color: #1d4ed8;
}
.instructor {
  display: block;
  font-size: 1.2rem;
  color: #374151;
  margin-top: 0.25rem;
}
.category {
  display: block;
  font-size: 1rem;
  color: #6b7280;
  margin-top: 0.25rem;
}
.price {
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  color: #0ae49b;
  text-align: center;
  margin-top: 0.5rem;
}
.tags {
  display: inline-block;
  padding: 4px 8px;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
