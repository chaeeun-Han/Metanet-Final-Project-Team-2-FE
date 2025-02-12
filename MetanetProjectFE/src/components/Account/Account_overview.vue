<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <div class="d-flex flex-wrap flex-sm-nowrap">
        <div class="me-7 mb-4">
          <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
            <img :src="userData.profileImage" alt="Profile Image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{{ userData.name }}</a>
                
                <a href="#">
                  <i class="ki-duotone ki-verify fs-1 text-primary">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </a>
                <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                  <i class="ki-duotone ki-profile-circle fs-4 me-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>
                  {{ userData.role }}
                </a>
              </div>
              <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                
                
              </div>
            </div>
            <div class="d-flex my-4">              
              <router-link for="/account-detail" class="btn btn-sm btn-primary me-3">수정 </router-link>              
            </div>
          </div>
          <div class="d-flex flex-wrap flex-stack">
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <span href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">                  
                  이메일 : {{ userData.email }}
                </span>
              </div>
              <div class="d-flex flex-wrap">
                <span href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">                  
                  전화번호 : {{ userData.phone }}
                </span>
              </div>
              <div class="d-flex flex-wrap">
                <span href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">                  
                  생년월일 : {{ userData.birth }}
                </span>
              </div>
              <div class="d-flex flex-wrap">
                <span href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">                  
                  입금계좌 : {{ userData.pay }}
                </span>              
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="account/overview.html">내 학습률</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">내 학습</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">결제 내역 조회</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">매출</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">강의</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({
        password: "password123",        
        email: "user@example.com",
        phone: "123-456-7890",
        name: "고범준",
        birth: "2002-08-30",
        role: "Developer",
        pay :"1234-1234-123",
        profileImage: "../../../public/assets/media/avatars/300-1.jpg",
      }),
    },
  },
};

</script>
