<template>
	<br><br>
     <div id="page" class="page font--jakarta">
    	<section id="reset-password" class="border-primary bg--fixed reset-password-section division d-flex justify-content-center align-items-center ">
				<div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10 shadow">
				<!--begin::Content-->
				<div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
					<!--begin::Wrapper-->
					<div class="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
						<!--begin::Form-->
						<form class="form w-100" novalidate="novalidate" id="kt_new_password_form" data-kt-redirect-url="authentication/layouts/overlay/sign-in.html" action="#">
							<!--begin::Heading-->
							<div class="text-center mb-10">
								<!--begin::Title-->
								<h1 class="text-gray-900 fw-bolder mb-3">새로운 비밀번호 입력</h1>
								<!--end::Title-->
							</div>
							<!--begin::Heading-->
							<!--begin::Input group-->
							<div class="fv-row mb-8" data-kt-password-meter="true">
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3">
										<input type="hidden" v-model="email"/>
										<input class="form-control bg-transparent" v-model="password" placeholder="새로운 비밀번호를 입력해주세요" name="password" autocomplete="off" />
										<span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
											<i class="ki-duotone ki-eye-slash fs-2"></i>
											<i class="ki-duotone ki-eye fs-2 d-none"></i>
										</span>
									</div>
									<!--end::Input wrapper-->
								</div>
								<!--end::Wrapper-->
								<!--begin::Hint-->
								<div class="text-muted">영어, 숫자, 특수문자 조합 8-16자리</div>
								<!--end::Hint-->
							</div>
							<!--end::Input group=-->
							<!--end::Input group=-->
							<div class="fv-row mb-8">
								<!--begin::Repeat Password-->
								<input type="password" v-model="confirm_password" placeholder="비밀번호를 다시 입력해주세요" name="confirm-password" autocomplete="off" class="form-control bg-transparent" />
								<!--end::Repeat Password-->
							</div>
							<!--end::Input group=-->
							<!--begin::Action-->
							<div class="d-grid mb-10 text-center">
								<button type="button" @click="newPassword" id="kt_new_password_submit" class="btn btn-primary mx-auto w-100 py-3">
									<!--begin::Indicator label-->
									<span class="indicator-label">비밀번호 변경</span>
									<!--end::Indicator label-->
									<!--begin::Indicator progress-->
									<span class="indicator-progress">Please wait... 
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									<!--end::Indicator progress-->
								</button>
							</div>
							<!--end::Action-->
						</form>
						<!--end::Form-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
				</div>
			</section>
        </div>        
</template>
<script>
import api from "../../apis/api";

export default {
  data() {
    return {
      password: "" ,
	  confirm_password: "",
	  email: ""   
    };
  },
  mounted(){
	this.email = this.$route.query.email || '';
  },
  methods: {      
    async newPassword() {
      if (!this.password || !this.confirm_password) {        
		Swal.fire('입력 값 확인', '비밀번호와 비밀번호 확인을 입력해주세요.', 'info');
        return;
      }

	  if (this.password !== this.confirm_password) {
        Swal.fire('입력 값 확인', '비밀번호와 비밀번호 값을 동일하게 입력해주세요.', 'info');
        return;
      }

      const payload = {email:this.email, password: this.password };

      try {
        const response = await api.post("/auth/password", payload);
        console.log("비밀번호 변경이 완료되었습니다:", response.data);
		Swal.fire('비밀번호 변경 성공', '비밀번호 변경을 성공하였습니다.', 'success');        
		this.$router.push("/login");
      } catch (error) {
        console.error("비밀번호 변경을 실패하였습니다.", error);
		Swal.fire('비밀번호 변경 실패', '비밀번호 변경을 실패하였습니다.', 'error');        
      }
    },
  },
};
</script>