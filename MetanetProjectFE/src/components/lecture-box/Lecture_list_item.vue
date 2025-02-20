<template>
  <div class="py-10 py-lg-20">
    <div class="container position-relative">
      <button class="slider-btn prev-btn" :id="sliderId + '_prev'">
        <i class="ki-duotone ki-left fs-2x"></i>
      </button>

      <div class="tns-outer">
        <div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true"></div>
        <div class="tns-ovh">
          <div class="tns-inner">
            <div
              :id="sliderId"
              class="tns-slider tns-carousel"
            >
              <div class="text-center tns-item" v-for="(lecture, index) in lectures" :key="index">
                <router-link :to="`/lectures/${lecture.lectureId}`">
                  <div class="octagon mx-auto mb-5 w-200px h-200px" :style="{ backgroundImage: `url(${lecture.profile})` }"></div>
                  <div class="mb-0">
                    <a class="fw-bold text-gray-900 text-hover-primary fs-3">{{ lecture.title }}</a>
                    <div class="text-muted fs-6 fw-semibold mt-1">{{ lecture.teacher }}</div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="slider-btn next-btn" :id="sliderId + '_next'">
        <i class="ki-duotone ki-right fs-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick } from "vue";

export default {
  props: {
    lectures: Array,
    sliderId: String,
  },
  mounted() {
    this.initSlider();
  },
  watch: {
    lectures() {
      this.initSlider();
    },
  },
  methods: {
    initSlider() {
      nextTick(() => {
        tns({
          container: `#${this.sliderId}`,
          loop: true,
          speed: 2000,
          autoplay: true,
          autoplayTimeout: 3000,
          controls: true,
          nav: false,
          items: 1,
          center: false,
          dots: false,
          prevButton: `#${this.sliderId}_prev`,
          nextButton: `#${this.sliderId}_next`,
          responsive: { 1200: { items: 3 }, 900: { items: 2 }, 344: { items: 1 }},
        });

        this.removeStopButton();
      });
    },
    removeStopButton() {
      nextTick(() => {
        setTimeout(() => {
          const stopButton = document.querySelector('button[data-action="stop"]');
          if (stopButton) {
            stopButton.remove();
          }
        }, 100);
      });
    },
  },
};
</script>

<style scoped>
/* 🔥 이전/다음 버튼 스타일 */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.slider-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: -50px;
}

.next-btn {
  right: -50px;
}

.container {
  position: relative;
}
</style>
