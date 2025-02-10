<template>
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
                        <tr v-for="lecture in lectures" :key="lecture.lecture_id">
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="d-flex justify-content-start flex-column">
                                        <a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{ lecture.title }}</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span v-if="lecture.startTime && lecture.endTime">
                                    {{ lecture.startTime }} ~ {{ lecture.endTime }}
                                </span>
                                <span v-else>미정</span>
                            </td>
                            <td class="text-end">
                                <div class="d-flex flex-column w-100 me-2">
                                    <div class="d-flex flex-stack mb-2">
                                        <span class="text-muted me-2 fs-7 fw-bold">{{ lecture.attend_percent }}%</span>
                                    </div>
                                    <div class="progress h-6px w-100">
                                        <div class="progress-bar bg-primary" role="progressbar"
                                            :style="{ width: lecture.attend_percent + '%' }"
                                            :aria-valuenow="lecture.attend_percent" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="#" class="btn btn-sm btn-light btn-active-primary"
                                    @click="showDetails(lecture)">
                                    <i class="ki-duotone ki-plus fs-2"></i> 자세히 보기
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

</script>

