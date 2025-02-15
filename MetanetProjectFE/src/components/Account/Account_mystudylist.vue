<template>
  <div class="row g-5 g-xl-8">
    <div v-for="(study, index) in myStudyListData" :key="index" class="col-xl-2">
      <!--begin::Statistics Widget 5-->
      <a class="card bg-body hoverable card-xl-stretch mb-xl-8 shadow-sm">
        <!--begin::Body-->
        <div class="card-body text-center p-4">
          <!-- 강의 프로필 이미지 -->
          <router-link :to="`/lectures/${study.lectureId}`" class="btn btn-sm btn-light btn-active-primary mb-3">
            <img :src="study.profile" alt="Profile Image" class="img-fluid rounded-circle" style="max-width: 100px;" />
          </router-link>

          <!-- 강의 제목 -->
          <div class="text-gray-800 fw-bold fs-4 mb-2">{{ study.title }}</div>

          <!-- 강의 카테고리 -->
          <div class="text-gray-500 fw-bold fs-6 mb-3">{{ study.category }}</div>

          <!-- 수료증 발급 버튼 추가 -->
          <div v-if="study.coursable">
            <button @click="certification(study.lectureId)" class="btn btn-success btn-lg w-100">수료증 발급</button>
          </div>
        </div>
        <!--end::Body-->
      </a>
      <!--end::Statistics Widget 5-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myStudyListData: Array, 
  },
  methods: {
    async certification(lectureId) {
      try {       
       
        const response = await api.get(
          `/certification?lecture_id=${lectureId}`,
          {
            headers: {              
              "Content-Type": "application/json",
            },
            responseType: 'arraybuffer' 
          }
        );

        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdfBlob);
        link.download = `certification_${lectureId}.pdf`;
        link.click(); 

        Swal.fire('수료증 발급 성공', '수료증이 발급되었습니다.', 'success');
      } catch (error) {
        Swal.fire('수료증 발급 실패', '수료증 발급에 실패하였습니다.', 'error');
      }
    }
  }
  };
</script>

<style scoped>
.card {
  border-radius: 10px;
  /* 카드의 모서리를 둥글게 */
  transition: all 0.3s ease-in-out;
  /* 카드 hover 효과 */
}

.card:hover {
  transform: translateY(-10px);
  /* hover시 카드 살짝 떠오르는 효과 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  /* hover시 그림자 추가 */
}

.card-body {
  padding: 1.5rem;
}

.btn {
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
  /* hover시 버튼 살짝 커지는 효과 */
}
</style>