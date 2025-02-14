<template>
  <div
    class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
    style="background-image: url(../../../public/assets/media/auth/auth-bg.png)"
  >
    <div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
      <router-link to="/" class="mb-0 mb-lg-12">
        <img alt="Logo" src="../../../public/assets/media/white-logo.png" class="h-60px h-lg-75px" />
      </router-link >
      <img
        class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
        src="../../../public/assets/media/login_img.png"
        alt=""
      />
      <h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">원하는 교육을 쉽고 빠르게 예약하고 관리하세요!</h1>
      <div class="d-none d-lg-block text-white fs-base text-center">
        우리 서비스는 사용자가 원하는 교육 콘텐츠를
        <a href="#" class="opacity-75-hover text-warning fw-bold me-1">간편하게 예약하고, 안전하게 결제할 수 있도록</a>돕습니다.<br />돕습니다. 또한, 유연한 취소 정책을 통해<a href="#" class="opacity-75-hover text-warning fw-bold me-1">일정 변경도 부담 없이</a> 진행할 수 있습니다.
        <br />접속하셔서 오늘의 강의를 추천받아보세요!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login_background",
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>
