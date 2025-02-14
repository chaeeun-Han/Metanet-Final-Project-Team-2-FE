<template>
	<br><br>
	<div id="page" class="page font--jakarta">
		<section id="reset-password" class="bg--fixed reset-password-section division d-flex justify-content-center align-items-center">
			<div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10 shadow">
				<!-- Content -->
				<div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
					<!-- Wrapper -->
					<div class="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
						<!-- Form -->
						<form class="form w-100">
							<!-- Heading -->
							<div class="text-center mb-10">
								<h1 class="text-gray-900 fw-bolder mb-3">비밀번호를 잊으셨나요?</h1>
								<div class="text-gray-500 fw-semibold fs-6">회원가입 시 입력했던 이메일로 인증해주세요.</div>							   
							</div>
							<!-- Email Input -->
							<div class="fv-row mb-8">
								<div class="mb-1">
									<div class="position-relative d-flex align-items-stretch">
										<input class="form-control bg-transparent flex-grow-1" 
											style="height: 48px; margin-right: 15px;" 
											placeholder="이메일 입력" v-model="email" />
										<button type="button" @click="sendVerificationCode" 
											:disabled="loading" 
											class="btn btn-primary py-3" style="height: 48px; width: 100px">
											<span v-if="!loading" class="d-flex align-items-center justify-content-center px-3 py-2">인증코드 발송</span>
											<span v-else>
												<span class="spinner-border spinner-border-sm align-middle"></span> 전송 중...
											</span>
										</button>
									</div>
								</div>
							</div>
						</form>
						<!-- 인증 코드 입력창 (동적으로 표시) -->
						<div v-if="showVerifyInput" class="fv-row mb-8">
							<div class="d-flex align-items-stretch verify-input">
								<input type="text" placeholder="인증 코드 입력" v-model="verifyCode" class="form-control bg-transparent" style="height: 48px;" />
								<span class="ms-2 text-danger fw-bold align-self-center">{{ countdownText }}</span>
							</div>
						</div>
						<!-- 인증 버튼 -->
						<div v-if="showVerifyInput" class="d-grid mb-10">
							<button type="button" @click="checkCode" class="btn btn-primary verify-btn" style="height: 48px;">
								<span class="indicator-label">인증하기</span>
							</button>
						</div>
					</div>
					<!-- Wrapper End -->
				</div>
				<!-- Content End -->
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
      showVerifyInput: false, // 인증 코드 입력창 표시 여부
      countdown: 1800, // 30분 (1800초)
      timer: null,
    };
  },
  computed: {
    countdownText() {
      const minutes = Math.floor(this.countdown / 60);
      const seconds = this.countdown % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
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

        // 인증코드 입력창 표시
        this.showVerifyInput = true;

        // 타이머 시작 (30분 카운트다운)
        this.startCountdown();
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

        // 타이머 초기화
        this.resetCountdown();
      } catch (error) {
        console.error("인증에 실패하였습니다.", error);
        Swal.fire('인증 실패', '인증이 실패하였습니다.', 'error');
      }
    },

    startCountdown() {
      if (this.timer) clearInterval(this.timer);
      this.countdown = 1800; // 30분
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
          this.showVerifyInput = false; // 시간이 지나면 입력창 숨김
        }
      }, 1000);
    },

    resetCountdown() {
      if (this.timer) clearInterval(this.timer);
      this.countdown = 0;
      this.showVerifyInput = false;
    }
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
};
</script>
<style>
/* 기본 가로 길이 (415px 이상) */
.verify-input,
.verify-btn {
  width: 400px;
}

/* 화면이 414px 이하일 때 */
@media (max-width: 415px) {
  .verify-input,
  .verify-btn {
    width: 312px;
  }
  .btn:hover {
    transform: translateY(-2px);
  }
  .form-control:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 5px rgba(13, 110, 253, 0.5);
  }
}
</style>