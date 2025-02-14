<template>
  <div class="lecture-header">
    <!-- 배경 이미지 -->
    <div class="lecture-banner" :style="{ backgroundImage: `url(${data.profile})` }"></div>

    <!-- 강의 정보 오버레이: 텍스트 컨테이너는 화면의 오른쪽 1/3에 위치 -->
    <div class="text-container">
      <span class="category text-light small">{{ data.category }}</span>
      <h1 class="lecture-title fw-bold text-white">{{ data.title }}</h1>
      <p class="lecture-description text-white-50 mb-2">{{ data.description || "none" }}</p>
      <div class="d-flex align-items-center">
        <span style="font-size: 1.5rem" class="text-white fw-bold">@{{ data.teacher }} 강사</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object, // { profile, title, description, teacher, category }
  },
};
</script>

<style scoped>
.lecture-title {
  font-size: 3rem;
}

.lecture-header {
  position: relative;
  height: 300px;
  width: 100vw;
  margin-left: calc((100vw - 100%) / -2);
  overflow: hidden;
}

/* 배경 이미지는 전체 영역을 덮음 */
.lecture-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/* ::after를 사용해 전체 하단에 어두운 그라데이션을 고정 */
.lecture-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

/* 텍스트 컨테이너: 화면의 오른쪽 1/3 (왼쪽 66% 지점부터 시작) */
.text-container {
  z-index: 2;
  position: absolute;
  bottom: 20px;
  left: 15%;
  padding: 20px;
}
</style>
