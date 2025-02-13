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
										<a class="text-gray-900 fw-bold text-hover-primary fs-6">{{
											lecture.title }}</a>

									</div>
								</div>
							</td>
							<td class="text-end">
								<div class="d-flex flex-column w-100 me-2">
									<span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startDate }}
										- {{ lecture.endDate }}</span>
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
										<a class="text-gray-900 fw-bold text-hover-primary fs-6">{{
											lecture.title }}</a>
									</div>
								</div>
							</td>
							<td>
								<span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startTime }} -
									{{ lecture.endTime }}</span>
							</td>
							<td class="text-end">
								<div class="d-flex flex-column w-100 me-2">
									<div class="d-flex flex-stack mb-2">
										<span class="text-muted me-2 fs-7 fw-bold">{{ lecture.attendPercent }}%</span>
									</div>
									<div class="progress h-6px w-100">
										<div class="progress-bar bg-primary" role="progressbar"
											:style="{ width: lecture.attendPercent + '%' }" aria-valuenow="50"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</td>
							<td>
								<a @click="downloadMem(lecture.lectureId)"
									class="btn btn-sm btn-light btn-active-primary">
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
										<a class="text-gray-900 fw-bold text-hover-primary fs-6">{{
											lecture.title }}</a>
										<span class="text-muted fw-semibold text-muted d-block fs-7">{{
											lecture.startDate }} - {{ lecture.endDate }}</span>
									</div>
								</div>
							</td>
							<td>
								<span class="text-muted fw-semibold text-muted d-block fs-7">{{ lecture.startDate }} -
									{{ lecture.endDate }}</span>
							</td>
							<td class="text-end">
								<div class="d-flex flex-column w-100 me-2">
									<div class="d-flex flex-stack mb-2">
										<span class="text-muted me-2 fs-7 fw-bold">{{ lecture.completionRate }}%</span>
									</div>
									<div class="progress h-6px w-100">
										<div class="progress-bar bg-primary" role="progressbar"
											:style="{ width: lecture.completionRate + '%' }" aria-valuenow="50"
											aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</td>
							<td>
								<router-link :to="`/lectures/${lecture.lectureId}`"
									class="btn btn-sm btn-light btn-active-primary">
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
export default {
	props: {
		myLectureData: Object
	},
	methods: {
		async downloadMem(lecture_id) {
			try {
				const token = sessionStorage.getItem("accessToken");

				const response = await fetch(`/excel/get-excel/student/${lecture_id}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`, // 필요시 인증 토큰을 헤더에 추가
					}
				});

				if (!response.ok) {
					throw new Error('Failed to download the file');
				}

				const blob = await response.blob();
				const contentDisposition = response.headers.get('Content-Disposition');
				let fileName = '학생목록.xlsx';

				if (contentDisposition) {
					const matches = contentDisposition.match(/filename\*?=(?:UTF-8'')?([^;]+)/);
					if (matches && matches[1]) {
						fileName = decodeURIComponent(matches[1].replace(/"/g, ''));
					}
				}

				const url = window.URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = fileName;

				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				window.URL.revokeObjectURL(url);

				Swal.fire('성공', '학생 데이터가 발급되었습니다.', 'success');
			} catch (error) {
				console.error('Error:', error);
			}
		}

	}
};
</script>