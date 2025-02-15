<template>
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            <div class="card">
                <div class="card-header border-0 pt-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <input 
                                type="text" 
                                v-model="searchQuery" 
                                class="form-control form-control-solid w-250px ps-12" 
                                placeholder="회원 검색" 
                            />
                        </div>
                    </div>
                    <div class="card-toolbar">
                        <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                            <div class="fw-bold me-5">
                                <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>
                            <button type="button" class="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>
                        </div>
                    </div>
                </div>
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                        <thead>
                            <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">    
                                <th class="min-w-100px">회원 일련번호</th>  
                                <th class="min-w-100px">회원 ID</th>                                                                 
                                <th class="min-w-100px">회원 이름</th>
                                <th class="min-w-125px">이메일</th>
                                <th class="min-w-100px">전화번호</th>
                                <th class="min-w-50px">역할</th>                               
                                <th class="text-end min-w-70px">활동</th>
                            </tr>
                        </thead>
                        <tbody class="fw-semibold text-gray-600">
                            <tr v-for="member in filteredMembers" :key="member.memberId">  
                                <td>{{ member.memberId }}</td>
                                <td>{{ member.id }}</td>                                 
                                <td>{{ member.name }}</td>
                                <td>{{ member.email }}</td>                               
                                <td>{{ member.phone }}</td>  
                                <td>{{ member.role }}</td>                      
                                <td class="text-end">
                                    <a class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions 
                                    <i class="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">                                       
                                        <div class="menu-item px-3">
                                            <a @click="deleteMember(member.memberId)" class="menu-link px-3">Delete</a>
                                        </div>
                                    </div>
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

document.addEventListener("DOMContentLoaded", function () {
    KTMenu.createInstances();
});

export default {    
    props: {
        viewMemberData: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchQuery: ""
        };
    },
    computed: {
        filteredMembers() {
            if (!this.searchQuery) return this.viewMemberData;
            return this.viewMemberData.filter(member =>
                Object.values(member).some(value =>
                    String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            );
        }
    },
    mounted() {
        KTMenu.createInstances();
    },
    methods: {
        async deleteMember(memberId) {            
            const payload = { memberIds: [memberId]   };

            try {      
                const response = await api.delete("/admin/accounts", payload, {
                    headers: {          
                        "Content-Type": "application/json",
                        "Cache-Control": "no-cache, no-store, must-revalidate" 
                    },
                });

                Swal.fire('회원 삭제 성공', '회원이 삭제되었습니다.', 'success');                    
                window.location.reload();
            } catch (error) {
                console.error('Error:', xhr.status, xhr.statusText); 
                        Swal.fire('회원 삭제 에러', '회원 삭제에 실패하였습니다.', 'error');                                        
            }           
                    
        }
    }
}
</script>
