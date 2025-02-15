<template>
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <!--begin::Content container-->
        <div id="kt_app_content_container" class="app-container container-xxl">
            <!--begin::Card-->
            <div class="card">
                <!--begin::Card header-->
                <div class="card-header border-0 pt-6">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <!--begin::Search-->
                        <div class="d-flex align-items-center position-relative my-1">
                            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <input type="text" data-kt-customer-table-filter="search"
                                class="form-control form-control-solid w-250px ps-12" placeholder="강의 찾기" />
                        </div>
                        <!--end::Search-->
                    </div>
                    <!--begin::Card title-->
                    <!--begin::Card toolbar-->
                    <div class="card-toolbar">
                        <!--begin::Toolbar-->
                        <!--begin::Group actions-->
                        <div class="d-flex justify-content-end align-items-center d-none"
                            data-kt-customer-table-toolbar="selected">
                            <div class="fw-bold me-5">
                                <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected
                            </div>
                            <button type="button" class="btn btn-danger"
                                data-kt-customer-table-select="delete_selected">Delete Selected</button>
                        </div>
                        <!--end::Group actions-->
                        <!--begin::Add customer-->
                        <button type="button" @click="deleteAll" class="btn btn-primary" style="width: 150px;">전체 강의
                            삭제</button>
                        <!--end::Add customer-->
                    </div>
                    <!--end::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                    <!--begin::Table-->
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                        <thead>
                            <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">

                                <th class="min-w-125px">강의 일련번호</th>
                                <th class="min-w-125px">강의명</th>
                                <th class="min-w-125px">카테고리</th>
                                <th class="min-w-125px">상태</th>
                                <th class="min-w-125px">강의 기간</th>
                                <th class="text-end min-w-70px">활동</th>
                            </tr>
                        </thead>
                        <tbody class="fw-semibold text-gray-600">
                            <tr v-for="lecture in viewLectureData" :key="lecture.lectureId">

                                <td>
                                    <a class="text-gray-800 text-hover-primary mb-1">{{ lecture.lectureId }}</a>
                                </td>
                                <td>
                                    <a class="text-gray-600 text-hover-primary mb-1">{{ lecture.title }}</a>
                                </td>
                                <td>
                                    <a class="text-gray-800 text-hover-primary mb-1">{{ lecture.category }}</a>
                                </td>
                                <td>
                                    <span
                                        :class="lecture.deleted ? 'badge badge-light-danger' : 'badge badge-light-success'">
                                        {{ lecture.deleted ? '삭제완료' : '등록됨' }}
                                    </span>
                                </td>
                                <td>{{ lecture.startDate }} ~ {{ lecture.endDate }}</td>
                                <td class="text-end">
                                    <a class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                        <i class="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <!--begin::Menu-->
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                        data-kt-menu="true">
                                        <!--begin::Menu item-->
                                        <div class="menu-item px-3">
                                            <a @click="deleteLecture(lecture.lectureId)" class="menu-link px-3"
                                                data-kt-customer-table-filter="delete_row">Delete</a>
                                        </div>
                                        <!--end::Menu item-->
                                    </div>
                                    <!--end::Menu-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Swal from 'sweetalert2';
import api from '../../apis/api.js';
document.addEventListener("DOMContentLoaded", function () {
    KTMenu.createInstances();
});

export default {
    props: {
        viewLectureData: {
            type: Array,
            required: true
        }
    },
    mounted() {
        KTMenu.createInstances();
    },
    methods: {

        async deleteLecture(lectureId) {
            const payload = { lectureIds: [lectureId] };
            try {
                const response = await api.delete(`/admin/lectures`, {
                    headers: { "Content-Type": "application/json" },
                    "Cache-Control": "no-cache, no-store, must-revalidate" ,
                    data: payload 
                });

                if (response.status === 200) {
                    Swal.fire('삭제 완료', ' 강의가 삭제되었습니다.', 'success')
                    .then(() => window.location.reload());                   
                }
            } catch (error) {
                console.error("강의 삭제 오류:", error);
                Swal.fire('삭제 에러', '강의 삭제 중 오류가 발생했습니다.', 'error');
            }
        },
        deleteAll() {
            Swal.fire({
                title: '정말로 모든 강의를 삭제하시겠습니까?',
                text: '이 작업은 되돌릴 수 없습니다!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: '삭제',
                cancelButtonText: '취소'
            }).then(async (result) => { 
                if (result.isConfirmed) {
                    try {
                        const response = await api.delete(`/admin/lectures/all`, {
                            headers: { 
                                "Content-Type": "application/json",
                                "Cache-Control": "no-cache, no-store, must-revalidate" 
                             }
                        });
                        Swal.fire('삭제 완료', '모든 강의가 삭제되었습니다.', 'success')
                            .then(() => window.location.reload());

                    } catch (error) {
                        Swal.fire('삭제 실패', '강의 삭제 중 문제가 발생했습니다.', 'error');
                    }
                }
            });
        }
    }
}


</script>