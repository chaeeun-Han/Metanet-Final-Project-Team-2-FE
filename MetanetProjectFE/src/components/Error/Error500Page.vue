<template>
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root" id="kt_app_root">
        <!--begin::Page bg image-->
        <!--end::Page bg image-->
        <!--begin::Authentication - Signup Welcome Message -->
        <div class="d-flex flex-column flex-center flex-column-fluid">
            <!--begin::Content-->
            <div class="d-flex flex-column flex-center text-center p-10">
                <!--begin::Wrapper-->
                <div class="card card-flush w-lg-650px py-5">
                    <div class="card-body py-15 py-lg-20">
                        <!--begin::Title-->
                        <h1 class="fw-bolder fs-2qx text-gray-900 mb-4">시스템 에러가 발생했습니다.</h1>
                        <!--end::Title-->
                        <!--begin::Text-->
                        <div class="fw-semibold fs-6 text-gray-500 mb-7">다시 시도해주시기 바랍니다.
                        </div>
                        <!--end::Text-->
                        <!--begin::Illustration-->
                        <div class="mb-11">
                            <img src="../../../public/assets/media/auth/500-error.png"
                                class="mw-100 mh-300px theme-light-show" alt="" />
                            <img src="../../../public/assets/media/auth/500-error-dark.png"
                                class="mw-100 mh-300px theme-dark-show" alt="" />
                        </div>
                        <!--end::Illustration-->

                        <div
                            class="fw-semibold fs-6 text-gray-500 mb-7 d-flex justify-content-center align-items-center">
                            <button class="btn btn-light me-5" @click="retry">다시 시도 하기</button>
                        </div>


                    </div>
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Authentication - Signup Welcome Message-->
    </div>
    <!--end::Root-->
    <!--end::Body-->


</template>
<script>
export default {
    mounted() {
        const previousUrl = this.$route.query.previousUrl;
        if (previousUrl) {
            this.previousUrl = previousUrl;
        }
    },
    data() {
        return {
            previousUrl: null,
        };
    },
    methods: {
        retry() {
            if (this.previousUrl) {
                this.$router.push(this.previousUrl);
            }
        }
    }
}

</script>