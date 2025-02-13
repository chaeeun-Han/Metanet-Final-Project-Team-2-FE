<template>
<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
                <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                    <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">수강바구니</h1>
                </div>
            </div>
        </div>
        <div id="kt_app_content" class="app-content flex-column-fluid">
            <div id="kt_app_content_container" class="app-container container-xxl">
                <form id="kt_ecommerce_edit_order_form" class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework" data-kt-redirect="apps/ecommerce/sales/listing.html">
                    <div class="w-100 flex-lg-row-auto w-lg-300px mb-7 me-7 me-lg-10">
                        <div class="card card-flush py-4">
                            <div class="card-header">
                                <div class="card-title">
                                    <h2>구매자정보</h2>
                                </div>
                            </div>
                            <div class="card-body pt-0">
                                <div class="d-flex flex-column">
                                    <div class="row mb-7">
                                        <label class="col-lg-5 fw-semibold text-muted">이름</label>
                                        <div class="col-lg-7 fv-row">
                                            <span v-if="memberData.name" class="fw-semibold text-gray-800 fs-6">{{ memberData.name }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-7">
                                        <label class="col-lg-5 fw-semibold text-muted">이메일</label>
                                        <div class="col-lg-7 fv-row">
                                            <span v-if="memberData.email" class="fw-semibold text-gray-800 fs-6">{{ memberData.email }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-7">
                                        <label class="col-lg-5 fw-semibold text-muted">휴대폰 번호</label>
                                        <div class="col-lg-7 fv-row">
                                            <span v-if="memberData.phone" class="fw-semibold text-gray-800 fs-6">{{ memberData.phone }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-7">
                                        <label class="col-lg-5 fw-semibold text-muted">줌 이메일</label>
                                        <div class="col-lg-7 fv-row">
                                            <span v-if="memberData.attendId" class="fw-semibold text-gray-800 fs-6">{{ memberData.attendId }}</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-light-primary btn-lg w-100" id="payment-button" @click="handlePayment" :disabled="selectedCartData.length === 0">결제하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-lg-row-fluid gap-7 gap-lg-10">
                        <div class="card card-flush py-4">
                            <div class="card-header">
                                <div class="card-title">
                                    <h2>선택된 강의</h2>
                                </div>
                            </div>
                            <div class="card-body pt-0">
                                <div class="d-flex flex-column gap-10">
                                    <div>
                                        <label class="form-label">결제할 강의를 선택하여 결제 목록에 추가하세요</label>
                                        <div class="row row-cols-1 row-cols-xl-3 row-cols-md-2 border border-dashed rounded pt-3 pb-1 px-2 mb-5 mh-300px overflow-scroll" id="kt_ecommerce_edit_order_selected_products">
                                            <span v-if="selectedCartData.length === 0" class="w-100 text-muted">
                                                회원 본인은 주문내용을 확인했으며, 구매조건 및 개인정보처리방침과 결제에 동의합니다.
                                            </span>                     
                                            <div v-for="(item, index) in selectedCartData" :key="item.cartId" class="col my-2">
                                                <div class="d-flex align-items-center border border-dashed rounded p-3 bg-body">
                                                    <!--begin::Thumbnail-->
                                                    <a href="apps/ecommerce/catalog/edit-product.html" class="symbol symbol-50px">
                                                        <span class="symbol-label" :style="{'background-image': item.profile ? 'url(' + item.profile + ')' : 'url(https://cdn.inflearn.com/public/courses/336001/cover/9368db08-c64b-42ca-8ad1-e7a872bffc0e/336001.jpg?w=736)'}"></span>
                                                    </a>
                                                    <div class="ms-5">
                                                        <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 text-hover-primary fs-5 fw-bold">{{ item.title }}</a>
                                                        <div class="fw-semibold fs-7">가격: ₩
                                                            <span>{{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} 원</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fw-bold fs-4">총 결제 금액: ₩
                                            <span>{{ this.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</span>
                                        </div>
                                        <!--end::Total price-->
                                    </div>

                                    <div class="separator"></div>
                                    <div class="d-flex align-items-center position-relative mb-n7">
                                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                                            <span class="path1"></span>
                                            <span class="path2"></span>
                                        </i>
                                        <input type="text" v-model="searchQuery" data-kt-ecommerce-edit-order-filter="search" class="form-control form-control-solid w-100 w-lg-50 ps-12" placeholder="수강바구니에서 강의 검색">
                                    </div>
                                    <div id="kt_ecommerce_edit_order_product_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div class="table-responsive"><div class="dataTables_scroll">
                                            <div class="dataTables_scrollHead" style="overflow: hidden; position: relative; border: 0px; width: 100%;">
                                                <div class="dataTables_scrollHeadInner" style="box-sizing: content-box; width: 857.667px; padding-right: 10px;">
                                                    <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" style="margin-left: 0px; width: 857.667px;">
                                                        <thead>
                                                            <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                                                <th class="w-25px pe-2 sorting_disabled" rowspan="1" colspan="1" style="width: 24.9896px;" aria-label=""></th>
                                                                <th class="min-w-200px sorting" tabindex="0" aria-controls="kt_ecommerce_edit_order_product_table" rowspan="1" colspan="1" style="width: 505.729px;" aria-label="Product: activate to sort column ascending">강의</th>
                                                                <th class="min-w-100px text-end pe-5 sorting" tabindex="0" aria-controls="kt_ecommerce_edit_order_product_table" rowspan="1" colspan="1" style="width: 284.698px;" aria-label="Qty Remaining: activate to sort column ascending">예약 가능 인원</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="dataTables_scrollBody" style="position: relative; overflow: auto; max-height: 400px; width: 100%;">
                                                <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_ecommerce_edit_order_product_table" style="width: 100%;">
                                                    <thead>
                                                        <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0" style="height: 0px;">
                                                            <th class="w-25px pe-2 sorting_disabled" rowspan="1" colspan="1" style="width: 24.9896px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                                                <div class="dataTables_sizing" style="height: 0px; overflow: hidden;"></div>
                                                            </th>
                                                            <th class="min-w-200px sorting" aria-controls="kt_ecommerce_edit_order_product_table" rowspan="1" colspan="1" style="width: 505.729px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                                                <div class="dataTables_sizing" style="height: 0px; overflow: hidden;">강의</div>
                                                            </th>
                                                            <th class="min-w-100px text-end pe-5 sorting" aria-controls="kt_ecommerce_edit_order_product_table" rowspan="1" colspan="1" style="width: 284.698px; padding-top: 0px; padding-bottom: 0px; border-top-width: 0px; border-bottom-width: 0px; height: 0px;">
                                                                    <div class="dataTables_sizing" style="height: 0px; overflow: hidden;">예약 가능 인원</div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="fw-semibold text-gray-600">                 
                                                        <tr v-for="item in filteredCartItems" :key="item.id" class="odd">
                                                            <td>
                                                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                                    <input class="form-check-input" type="checkbox" :value="item" v-model="selectedCartData" @change="updateTotalPrice"/>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="d-flex align-items-center" data-kt-ecommerce-edit-order-filter="product" :data-kt-ecommerce-edit-order-id="'product_' + item.cartId">
                                                                    <a href="#" class="symbol symbol-50px">
                                                                        <span 
                                                                            class="symbol-label" 
                                                                            :style="{'background-image': item.profile ? 'url(' + item.profile + ')' : 'url(https://cdn.inflearn.com/public/courses/336001/cover/9368db08-c64b-42ca-8ad1-e7a872bffc0e/336001.jpg?w=736)'}">
                                                                        </span>
                                                                    </a>
                                                                    <div class="ms-5">
                                                                        <a href="#" class="text-gray-800 text-hover-primary fs-5 fw-bold">{{ item.title }}</a>
                                                                        <div class="fw-semibold fs-7">가격: ₩
                                                                        <span data-kt-ecommerce-edit-order-filter="price">{{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} 원</span></div>
                                                                        <div class="text-muted fs-7">예약마감일: {{ item.deadLineTime }}</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-end pe-5" data-order="16">
                                                                <span class="fw-bold ms-3">{{ item.remaining }}명</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row"><div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                    <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div class="d-flex justify-content-end">

                            <button id="kt_ecommerce_edit_order_cancel" class="btn btn-light me-5" @click="deleteSelectedItems">
                                선택 삭제
                            </button>
                            <button type="button" id="kt_ecommerce_edit_order_submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
                                <span class="indicator-label">전체 삭제</span>
                            </button>

                            <!-- Bootstrap 모달 -->
                            <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="confirmDeleteModalLabel">전체 삭제 확인</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            정말로 모든 항목을 삭제하시겠습니까?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                            <button type="button" class="btn btn-danger" @click="confirmDelete">예, 삭제</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "CartList",
    data() {
        return {
            searchQuery: "",
            cartData: [],
            memberData: {},
            selectedCartData: [],
            clientKey: "test_ck_ZLKGPx4M3MALznA7w7Dd3BaWypv1", // Toss Payments 클라이언트 키
            customerKey: "customerKeydlatl1256",
            totalPrice: 0 // 총 결제 금액
        };
    },
    computed: {
        filteredCartItems() {
            if (!this.searchQuery) {
                return this.cartData.data; // 검색어가 없으면 전체 리스트 반환
            }

            const query = this.searchQuery.toLowerCase(); // 대소문자 구분 없이 검색
            return this.cartData.data.filter(item => 
                item.title.toLowerCase().includes(query) // 제목에 검색어 포함 여부 확인
            );
        }
    },
    methods: {
        // 선택된 상품들의 총 가격을 계산하는 메서드
        updateTotalPrice() {
            if (this.cartData.length === 0 || this.selectedCartData.length === 0) {
                // cartData가 빈 배열이거나 selectedCartData가 빈 배열일 때 totalPrice를 0으로 설정
                this.totalPrice = 0;
            } else {
                let sum = 0;
                this.selectedCartData.forEach(cart => {
                    const item = this.cartData.data.find(cartItem => cartItem.cartId === cart.cartId);
                    console.log(item.price);
                    if (item) {
                        sum += item.price;
                    }
                });
                this.totalPrice = sum;
            }
        },
        async deleteSelectedItems() {
            try {
                const token = sessionStorage.getItem("accessToken");
                const response = await axios.delete("http://localhost:8080/cart", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    data: {  // DELETE 요청에서 body 대신 data 사용
                        cartIds: this.selectedCartData.map(item => item.cartId) // cartId만 추출하여 리스트로 변환
                    }
                });

            this.cartData = response.data;
            } catch (error) {
                console.error("선택 삭제 실패:", error.response?.data || error.message);
            }
        },
        async confirmDelete() {
            // Bootstrap 모달 닫기
            const modal = document.getElementById('confirmDeleteModal');
            const bootstrapModal = bootstrap.Modal.getInstance(modal);
            bootstrapModal.hide();

            // 실제 삭제 실행
            await this.deleteAllItems();
        },
        async deleteAllItems() {
            try {
                const token = sessionStorage.getItem("accessToken");
                const response = await axios.delete("http://localhost:8080/cart", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    data: {  // DELETE 요청에서 body 대신 data 사용
                        cartIds: this.cartData.data.map(item => item.cartId) // cartId만 추출하여 리스트로 변환
                    }
                });

            this.cartData = response.data;
            } catch (error) {
                console.error("전체 삭제 실패:", error.response?.data || error.message);
            }
        },
        async fetchCartData() {
            try {
                const token = sessionStorage.getItem("accessToken");
                const response = await axios.get("http://localhost:8080/cart", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                this.cartData = response.data;
            } catch (error) {
                console.error("장바구니 불러오기 실패:", error.response?.data || error.message);
            }
        },

        async fetchMemberData() {
            try {
                const token = sessionStorage.getItem("accessToken");
                const response = await axios.get("http://localhost:8080/account", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                this.memberData = response.data.data.members;
            } catch (error) {
                console.error("회원 정보 불러오기 실패:", error.response?.data || error.message);
            }
        },

        async handlePayment() {
            if (typeof TossPayments === "undefined") {
                console.error("TossPayments가 로드되지 않았습니다.");
                alert("결제 시스템이 로드되지 않았습니다. 페이지를 새로고침 해보세요.");
                return;
            }

            var tossPayments = TossPayments(this.clientKey);
            console.log(tossPayments);  // tossPayments 객체 확인

            tossPayments.requestPayment("카드", {
                amount: 15000,
                orderId: '9ajYH9FPdqfJAyMSPh7_v',
                orderName: "토스 티셔츠 외 2건",
                customerName: "박토스",
                successUrl: "http://localhost:3000/account",
                failUrl: "http://localhost:3000/login",
            }).catch(function (error) {
                console.error("결제 오류:", error);
                if (error.code === "USER_CANCEL") {
                    alert("사용자가 결제를 취소했습니다.");
                } else {
                    alert("결제 요청에 실패했습니다.");
                }
            });
        },

        generateRandomString() {
            return window.btoa(Math.random()).slice(0, 20);
        },
    },
    async created() {
        await this.fetchMemberData();
        await this.fetchCartData();
    }
};
</script>

<style>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>


