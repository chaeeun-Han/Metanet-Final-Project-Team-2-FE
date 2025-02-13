<template>
	<br><br>
	<div id="page" class="page font--jakarta">
		<section id="reset-password" class="bg--fixed reset-password-section division d-flex justify-content-center align-items-center">
			<div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10 shadow">
				<!--begin::Content-->
				<div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
					<!--begin::Wrapper-->
					<div class="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
						<!--begin::Form-->
						<form class="form w-100">
							<!--begin::Heading-->
							<div class="text-center mb-10">
								<h1 class="text-gray-900 fw-bolder mb-3">비밀번호를 잊으셨나요?</h1>
								<div class="text-gray-500 fw-semibold fs-6">회원가입시 입력했던 이메일로 인증해주세요.</div>							   
							</div>
							<!--begin::Heading-->
							<div class="fv-row mb-8" data-kt-password-meter="true">
								<!--begin::Wrapper-->
								<div class="mb-1">
									<!--begin::Input wrapper-->
									<div class="position-relative mb-3 d-flex">
										<input class="form-control bg-transparent flex-grow-1" placeholder="이메일 입력" v-model="email" />
										<button type="button" @click="sendVerificationCode" 
											:disabled="loading" 
											id="confirm_btn" class="btn btn-primary">
											<span v-if="!loading">인증코드 <br> 발송</span>
											<span v-else>
												<span class="spinner-border spinner-border-sm align-middle"></span> 전송 중...
											</span>
										</button>
									</div>
									<!--end::Input wrapper-->
								</div>
								<!--end::Wrapper-->
							</div>
						</form>
						<!--end::Form-->
						
						<div class="fv-row mb-8">
							<input type="password" placeholder="인증 코드 입력" v-model="verifyCode" class="form-control bg-transparent" />
						</div>

						<!--begin::Action-->
						<div class="d-grid mb-10">
							<button type="button" @click="checkCode" id="confirm_btn" class="btn btn-primary">
								<span class="indicator-label">인증하기</span>
								<span class="indicator-progress">Please wait... 
								<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
							</button>
						</div>
						<!--end::Action-->
					</div>
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
			</div>
		</section>
	</div>        
</template>

<script>
import Swal from 'sweetalert2';
import api from "../../apis/api";

export default {
  data() {
    return {
      email: "", 
      verifyCode: "",
      loading: false,
    };
  },
  methods: {
  
    async sendVerificationCode() {
      if (!this.email) {
		Swal.fire('이메일 값 확인', '이메일을 입력해주세요', 'info');        
        return;
      }

      this.loading = true; 

      const payload = { email: this.email };

      try {
        const response = await api.post("/email/mail-password", payload);
        console.log("인증코드 발송 성공:", response.data);
        Swal.fire('인증코드 발송 성공', '이메일을 확인해주세요', 'success');
      } catch (error) {
        console.error("인증코드 발송 실패:", error);
		Swal.fire('인증코드 발송 실패', '이메일 전송을 실패했습니다.', 'error');
      } finally {
        this.loading = false;
      }
    },

    async checkCode() {
      if (!this.email || !this.verifyCode) {
		Swal.fire('입력 값 확인', '이메일과 인증코드를 입력해주세요.', 'info');        
        return;
      }

      const payload = { email: this.email, verifyCode: this.verifyCode };

      try {
        const response = await api.post("/email/verify", payload);
        console.log("인증이 완료되었습니다:", response.data);
		Swal.fire('인증 성공', '인증이 완료되었습니다.', 'success');        
		this.$router.push({ path: '/password/reset', query: { email: this.email } });
      } catch (error) {
        console.error("인증에 실패하였습니다.", error);
        Swal.fire('인증 실패', '인증이 실패하였습니다.', 'error');
      }
    },
  },
};
</script>
<style>
  .form {
    max-width: 400px;
    margin: auto;
  }
  .btn {
    transition: all 0.3s ease;
  }
  .btn:hover {
    transform: translateY(-2px);
  }
  .form-control:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 5px rgba(13, 110, 253, 0.5);
  }
</style>