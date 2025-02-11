<template>
    <div class="card mb-5 mb-xl-8">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">결제 내역 전체보기</span>
                
            </h3>            
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body py-3">
            <!--begin::Table container-->
            <div class="table-responsive">
                <!--begin::Table-->
                <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                    <!--begin::Table head-->
                    <thead>
                        <tr class="fw-bold text-muted">
                           
                            <th class="min-w-120px">결제 번호</th>
                            <th class="min-w-150px">강의명</th>
                            <th class="min-w-120px">상태</th>
                            <th class="min-w-120px">강의 시작일</th>
                            <th class="min-w-120px">강의 종료일</th>
                            <th class="min-w-120px">환불 및 구매내역 상세보기</th>                            
                        </tr>
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody>
                        <tr v-for="(pay, index) in payListData" :key="index"> 
                            <td>
                            <a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{ pay.payId }}</a>
                            </td>
                            <td>
                            <div class="d-flex align-items-center">
                                <!-- 사진 -->
                                <div class="symbol symbol-50px me-3">
                                <img :src="pay.profile" class="" alt="" />
                                </div>
                                <!-- 타이틀 -->
                                <a href="#" class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">{{ pay.title }}</a>
                            </div>
                            </td>

                            <td>
                            <span 
                                class="badge" 
                                :class="pay.status ? 'badge-light-danger' : 'badge-light-success'"
                            >
                                {{ pay.status ? '환불 완료' : '결제 완료' }}
                            </span>
                            </td>
                            <td>
                            <a href="#"
                                class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">{{ pay.startDate }}</a>
                            </td>
                            <td>
                            <a href="#"
                                class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6">{{ pay.endDate }}</a>
                            </td>
                            <td class="text-gray-900 fw-bold text-hover-primary fs-6">
                            <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
                                <a href="#" class="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                                상세보기</a>
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



</template>

<script>
export default {
  name: "Account_PayList",
  props: {
    payListData: Array, // 데이터가 배열임을 명시
  }
};
</script>