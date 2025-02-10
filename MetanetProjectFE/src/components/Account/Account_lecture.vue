<template>
     <!--begin::Tables Widget 9-->
<div class="card mb-5 mb-xl-8">
	<!--begin::Header-->
	<div class="card-header border-0 pt-5">
		<h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold fs-3 mb-1">진행 예정 강의</span>												
		</h3>											
	</div>
	<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
		<a href="#" class="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#modal_detail">
		<i class="ki-duotone ki-plus fs-2"></i>강의 등록</a>
	</div>
	<!--end::Header-->
	<!--begin::Body-->
	<div class="card-body py-3">
		<!--begin::Table container-->
		<div class="table-responsive">
			<!--begin::Table-->
			<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
				<!--begin::Table head-->
				<thead>
					<tr class="fw-bold text-muted">						
						<th class="min-w-200px">강의명</th>
						
						<th class="min-w-100px text-end">강의 기간</th>
					</tr>
				</thead>
				<!--end::Table head-->
				<!--begin::Table body-->
				<tbody>
					<tr>						
						<td>
							<div class="d-flex align-items-center">
								
								<div class="d-flex justify-content-start flex-column">
									<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">Ana Simmons</a>
									<span class="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
								</div>
							</div>
						</td>						
						<td class="text-end">
							<div class="d-flex flex-column w-100 me-2">
								<div class="d-flex flex-stack mb-2">
									<span class="text-muted me-2 fs-7 fw-bold">50%</span>
								</div>
								<div class="progress h-6px w-100">
									<div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</td>															
					</tr>														
				</tbody>
				<!--end::Table body-->
			</table>
			<!--end::Table-->
		</div>
		<!--end::Table container-->
	</div>
	<!--begin::Body-->                                     
</div>
<!--end::Tables Widget 9-->






<!-- 진행 중인 강의-->
<!--begin::Tables Widget 9-->
<div class="card mb-5 mb-xl-8">
	<!--begin::Header-->
	<div class="card-header border-0 pt-5">
		<h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold fs-3 mb-1">진행 중인 강의</span>												
		</h3>											
	</div>
	<!--end::Header-->
	<!--begin::Body-->
	<div class="card-body py-3">
		<!--begin::Table container-->
		<div class="table-responsive">
			<!--begin::Table-->
			<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
				<!--begin::Table head-->
				<thead>
					<tr class="fw-bold text-muted">						
						<th class="min-w-200px">강의명</th>
						<th class="min-w-150px">강의 기간</th>
						<th class="min-w-150px">출석률</th>
						<th class="min-w-100px text-end"></th>
					</tr>
				</thead>
				<!--end::Table head-->
				<!--begin::Table body-->
				<tbody>
					<tr>						
						<td>
							<div class="d-flex align-items-center">
								
								<div class="d-flex justify-content-start flex-column">
									<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">Ana Simmons</a>
									<span class="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
								</div>
							</div>
						</td>
						<td>
							<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">Intertico</a>
							<span class="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
						</td>
						<td class="text-end">
							<div class="d-flex flex-column w-100 me-2">
								<div class="d-flex flex-stack mb-2">
									<span class="text-muted me-2 fs-7 fw-bold">50%</span>
								</div>
								<div class="progress h-6px w-100">
									<div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</td>	
						<td>
							<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
								<a href="#" class="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
								<i class="ki-duotone ki-plus fs-2"></i>수강생 데이터 다운로드</a>
							</div>						
						</td>														
					</tr>														
				</tbody>
				<!--end::Table body-->
			</table>
			<!--end::Table-->
		</div>
		<!--end::Table container-->
	</div>
	<!--begin::Body-->                                     
</div>
<!--end::Tables Widget 9-->





<!--완료된 강의-->
<!--begin::Tables Widget 9-->
<div class="card mb-5 mb-xl-8">
	<!--begin::Header-->
	<div class="card-header border-0 pt-5">
		<h3 class="card-title align-items-start flex-column">
			<span class="card-label fw-bold fs-3 mb-1">완료된 강의</span>												
		</h3>											
	</div>
	<!--end::Header-->
	<!--begin::Body-->
	<div class="card-body py-3">
		<!--begin::Table container-->
		<div class="table-responsive">
			<!--begin::Table-->
			<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
				<!--begin::Table head-->
				<thead>
					<tr class="fw-bold text-muted">						
						<th class="min-w-200px">강의명</th>
						<th class="min-w-150px">강의 기간</th>
						<th class="min-w-150px">수료율</th>
						<th class="min-w-100px text-end"></th>
					</tr>
				</thead>
				<!--end::Table head-->
				<!--begin::Table body-->
				<tbody>
					<tr>						
						<td>
							<div class="d-flex align-items-center">
								
								<div class="d-flex justify-content-start flex-column">
									<a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">Ana Simmons</a>
									<span class="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
								</div>
							</div>
						</td>
						<td>
							<a href="#" class="text-gray-900 fw-bold text-hover-primary d-block fs-6">Intertico</a>
							<span class="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
						</td>
						<td class="text-end">
							<div class="d-flex flex-column w-100 me-2">
								<div class="d-flex flex-stack mb-2">
									<span class="text-muted me-2 fs-7 fw-bold">50%</span>
								</div>
								<div class="progress h-6px w-100">
									<div class="progress-bar bg-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</td>	
						<td>
							<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
								<a href="#" class="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
								<i class="ki-duotone ki-plus fs-2"></i>리뷰보기</a>
							</div>						
						</td>														
					</tr>														
				</tbody>
				<!--end::Table body-->
			</table>
			<!--end::Table-->
		</div>
		<!--end::Table container-->
	</div>
	<!--begin::Body-->                                     
</div>
<!--end::Tables Widget 9-->





</template>