<template>
  <div class="lecture-item">
    <!-- 이미지 클릭 시 강의 상세 페이지로 이동 -->
    <router-link :to="`/lectures/${lectureId}`">
      <img :src="profile || 'assets/media/default-lecture.jpg'" alt="Lecture Image" class="lecture-img" />
    </router-link>
    <div class="lecture-info">
      <router-link :to="`/lectures/${lectureId}`" class="lecture-title-link">
        <span class="lecture-title">{{ title }}</span>
      </router-link>
      <div class="lecture-instructor">{{ teacher }}</div>
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
    teacher: {
      type: String,
      default: "강사명 미정",
    },
  },
};
</script>

<style scoped>
.lecture-item {
  display: flex;
  align-items: center;
}
.lecture-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 0.75rem;
}
.lecture-info {
  display: flex;
  flex-direction: column;
}
.lecture-title-link {
  text-decoration: none;
}
.lecture-title {
  font-weight: bold;
  font-size: 1.875rem;
  color: #374151;
  cursor: pointer;
}
.lecture-title:hover {
  color: #1d4ed8;
}
.lecture-instructor {
  font-size: 1rem;
  color: #6b7280;
}
</style>
