<template>
  <router-link :to="`/lectures/${lectureId}`">
    <div class="lecture-card">
      <div class="lecture-image-container">
        <img :src="profile" alt="Lecture Thumbnail" class="lecture-image" />
      </div>
      <div class="lecture-info">
        <div class="lecture-title text-gray-900">{{ truncatedTitle }}</div>
        <div class="lecture-teacher">{{ teacher }}</div>
        <div class="lecture-price text-gray-900">{{ formattedPrice }}</div>
        <div class="lecture-stats">
          <span class="students text-gray-900">👥 {{ leftSpace }} 명 남음</span>
          <span class="rating text-gray-900">❤️{{ likes }} 명이 좋아함</span>
        </div>
      </div>
    </div>
  </router-link>
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
    likes: Number,
    leftSpace: Number,
    tags: {
      type: String,
      default: "",
    },
    teacher: {
      type: String,
      default: "강사명 미정",
    },
  },
  computed: {
    truncatedTitle() {
      return this.title.length > 20 ? this.title.substring(0, 20) + '...' : this.title;
    },
    formattedPrice() {
      return `₩${this.price.toLocaleString()}`;
    },
  }
};
</script>

<style scoped>
.lecture-card {
  width: 100%;
  max-width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: auto;
  transition: transform 0.2s ease-in-out;
}

/* 작은 화면에서 크기 줄이기 */
@media (max-width: 768px) {
  .lecture-card {
    max-width: 200px;
    height: 300px;
  }
}

@media (max-width: 420px) { 
  .lecture-card {
    max-width: 160px;
    height: 260px;
  }
}

.lecture-card:hover {
  transform: scale(1.05);
}

.lecture-image-container {
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
  overflow: hidden;
}

.lecture-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lecture-info {
  padding: 10px;
  flex-grow: 1;
}

.lecture-stats {
  font-size: 1rem;
}

.lecture-teacher {
    color: #666;
  }
</style>