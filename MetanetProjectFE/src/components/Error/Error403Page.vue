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
                        <h1 class="fw-bolder fs-2qx text-gray-900 mb-4">권한이 없습니다 !</h1>
                        <!--end::Title-->
                        <!--begin::Text-->
                        <div class="fw-semibold fs-6 text-gray-500 mb-7">권한을 얻으시려면 회원가입 및 로그인을 해주시기 바랍니다.
                        </div>
                        <!--end::Text-->
                        <!--begin::Illustration-->
                        <div class="mb-11">
                            <img src="/assets/media/auth/403-error.png?v=1" class="mw-100 mh-300px theme-light-show" alt="" />
                        </div>
                        <div class="fw-semibold fs-6 text-gray-500 mb-7">
                            <router-link to="/login" class="menu-link px-5">로그인 하러 가기</router-link>
                            <router-link to="/signup" class="menu-link px-5">회원가입 하러 가기</router-link>
                        </div>
                        
                        <!--end::Illustration-->                      
                    </div>
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Authentication - Signup Welcome Message-->
    </div>


</template>