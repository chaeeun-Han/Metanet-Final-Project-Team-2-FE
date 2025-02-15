<template>
  <!--진행 예정 강의-->
  <div class="card mb-5 mb-xl-8">
    <div class="card-header border-0 pt-5">
      <div class="d-flex justify-content-between w-100">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">진행 예정 강의</span>
        </h3>
      </div>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bold text-muted">
              <th class="min-w-200px">강의명</th>
              <th class="min-w-100px text-end">강의 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lecture in myLectureData.dueToLecture" :key="lecture.title">
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a class="text-gray-900 fw-bold text-hover-primary fs-6">{{ lecture.title }}</a>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <div class="d-flex flex-column w-100 me-2">
                  <span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startDate }} - {{ lecture.endDate }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 진행 중인 강의-->
  <div class="card mb-5 mb-xl-8">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">진행 중인 강의</span>
      </h3>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bold text-muted">
              <th class="min-w-200px">강의명</th>
              <th class="min-w-150px">강의 기간</th>
              <th class="min-w-150px">출석률</th>
              <th class="min-w-100px text-end"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lecture in myLectureData.ingLecture" :key="lecture.title">
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a class="text-gray-900 fw-bold text-hover-primary fs-6">{{ lecture.title }}</a>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startTime }} - {{ lecture.endTime }}</span>
              </td>
              <td class="text-end">
                <div class="d-flex flex-column w-100 me-2">
                  <div class="d-flex flex-stack mb-2">
                    <span class="text-muted me-2 fs-7 fw-bold">{{ lecture.attendPercent }}%</span>
                  </div>
                  <div class="progress h-6px w-100">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      :style="{ width: lecture.attendPercent + '%' }"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </td>
              <td>
                <a @click="downloadMem(lecture.lectureId, lecture.title)" class="btn btn-sm btn-light btn-active-primary">
                  <i class="ki-duotone ki-plus fs-2"></i>수강생 데이터 다운로드
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 완료된 강의-->
  <div class="card mb-5 mb-xl-8">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">완료된 강의</span>
      </h3>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bold text-muted">
              <th class="min-w-200px">강의명</th>
              <th class="min-w-150px">강의 기간</th>
              <th class="min-w-150px">수료율</th>
              <th class="min-w-100px text-end"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lecture in myLectureData.endLecture" :key="lecture.title">
              <td>
                <div class="d-flex align-items-center">
                  <div class="d-flex justify-content-start flex-column">
                    <a class="text-gray-900 fw-bold text-hover-primary fs-6">{{ lecture.title }}</a>
                    <span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startDate }} - {{ lecture.endDate }}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startDate }} - {{ lecture.endDate }}</span>
              </td>
              <td class="text-end">
                <div class="d-flex flex-column w-100 me-2">
                  <div class="d-flex flex-stack mb-2">
                    <span class="text-muted me-2 fs-7 fw-bold">{{ lecture.completionRate }}%</span>
                  </div>
                  <div class="progress h-6px w-100">
                    <div
                      class="progress-bar bg-primary"
                      role="progressbar"
                      :style="{ width: lecture.completionRate + '%' }"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </td>
              <td>
                <router-link :to="`/lectures/${lecture.lectureId}`" class="btn btn-sm btn-light btn-active-primary">
                  <i class="ki-duotone ki-plus fs-2"></i>자세히 보기
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../apis/api";
export default {
  props: {
    myLectureData: Object,
  },
  methods: {
    async downloadMem(lecture_id, title) {
      try {
        const response = await api.get(`/excel/get-excel/student/${lecture_id}`, {
          responseType: "blob",
        });

        // axios에서는 에러 발생 시 catch로 넘어가므로 아래 조건문은 보통 필요하지 않습니다.
        if (response.status !== 200) {
          throw new Error("Failed to download the file");
        }

        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const downloadUrl = window.URL.createObjectURL(blob);

        // a 태그 생성 후 클릭 이벤트로 다운로드 실행
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", { title });
        document.body.appendChild(link);
        link.click();

        // 메모리 해제
        link.remove();
        window.URL.revokeObjectURL(downloadUrl);

        Swal.fire("성공", "학생 데이터가 발급되었습니다.", "success");
      } catch (error) {
        Swal.fire({
          title: "다운로드에 실패했습니다.",
          text: "수강한 학생이 없어, 다운로드 하지 못했습니다.",
          icon: "question",
        });
      }
    },
  },
};
</script>
