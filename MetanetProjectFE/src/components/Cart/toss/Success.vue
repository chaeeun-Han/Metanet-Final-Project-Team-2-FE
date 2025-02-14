<template>
  <div class="success-container">
    <div class="success-box">
      <h1>✅ 결제 성공!</h1>
      <p>선택한 강의를 성공적으로 구매하였습니다.</p>
      <p>잠시 후 강의 목록 페이지로 이동합니다...</p>
      <button @click="goToLectures" class="btn btn-primary">강의 보러 가기</button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import api from "../../../apis/api";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const orderId = route.query.orderId; // 예: "lecturebuylists_3_5_7"
    const lectureIds = orderId ? orderId.split("_").slice(1) : []; // ["3", "5", "7"]

    const purchaseLectures = async () => {
      try {
        for (const lectureId of lectureIds) {
          await api.post(`/lectures/buy/${lectureId}`);
          console.log(`✅ 강의 구매 완료: ${lectureId}`);
        }
        console.log("✅ 전체 강의 결제 성공!");
      } catch (error) {
        console.error("❌ 결제 처리 실패:", error.response ? error.response.data : error.message);
        alert("결제 처리 중 문제가 발생했습니다.");
      }
    };

    const goToLectures = () => {
      router.push("/lectures/my-lectures"); // 사용자의 강의 목록 페이지로 이동
    };

    onMounted(() => {
      purchaseLectures();
      setTimeout(() => {
        goToLectures(); // 3초 후 자동 이동
      }, 3000);
    });

    return { goToLectures };
  },
};
</script>

<style scoped>
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* 배경 그라데이션으로 분위기 연출 */
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  padding: 20px;
}

.success-box {
  text-align: center;
  background: #fff;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
  animation: fadeInUp 1s ease-out;
}

h1 {
  color: #27ae60;
  margin-bottom: 20px;
  font-size: 2rem;
}

p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

.btn {
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
}

.btn-primary:hover {
  background-color: #2980b9;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
