<template>
  <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
      <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">마이페이지</h1>
      </div>
    </div>  
  </div>
  
   <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <div class="d-flex flex-wrap flex-sm-nowrap">
        <div class="me-7 mb-4">
          <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
            <img :src="toolbarData.member.profile || '기본_이미지_경로'" alt="Profile Image" />
            <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
          </div>
        </div>
        
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{{ toolbarData.member.name }}</a>
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
                  {{ toolbarData.member.role }}
                </a>
              </div>
            </div>
            <div class="d-flex my-4">
              <button class="btn btn-sm btn-primary me-3" @click="changeComponent('editProfile')">수정</button>
            </div>
          </div>

          <div class="d-flex flex-wrap flex-stack">
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <div v-for="(item, index) in toolbarData?.category || []" :key="index" :value="item">
                <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">               
                  <i class="ki-duotone bi bi-check-lg fs-4 me-1 text-primary ">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>                 
                  {{ item}}                  
                </a>
                </div>
                </div>
                
              <div class="d-flex flex-wrap">
                <span class="text-gray-500">이메일 : {{ toolbarData.member.email }}</span>
              </div>
              <div class="d-flex flex-wrap">
                <span class="text-gray-500">전화번호 : {{ toolbarData.member.phone }}</span>
              </div>
              <div class="d-flex flex-wrap">
                <span class="text-gray-500">생년월일 : {{ toolbarData.member.birth }}</span>
              </div>
              <div class="d-flex flex-wrap">
                <span class="text-gray-500">입금계좌 : {{ toolbarData.member.bank }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br><br>
      <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent  fs-5 fw-bold">
        <li class="nav-item mt-2">
          <a class="nav-link ms-0 me-10 py-5" :class="{ 'active': activeComponent === 'myStudy' }" href="#" @click.prevent="changeComponent('myStudy')">내 학습률</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link ms-0 me-10 py-5" :class="{ 'active': activeComponent === 'myStudyList' }" href="#" @click.prevent="changeComponent('myStudyList')">내 학습</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link ms-0 me-10 py-5" :class="{ 'active': activeComponent === 'payList' }" href="#" @click.prevent="changeComponent('payList')">결제 내역 조회</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link ms-0 me-10 py-5" :class="{ 'active': activeComponent === 'revenue' }" href="#" @click.prevent="changeComponent('revenue')">매출</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link ms-0 me-10 py-5" :class="{ 'active': activeComponent === 'myLecture' }" href="#" @click.prevent="changeComponent('myLecture')">강의</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account_ToolBar",
  props: {
    toolbarData: {
      type: Object,
      required: true
    }    
  },
  methods: {
    changeComponent(componentName) {
      this.$emit("changeComponent", componentName);
    }
  },
};
</script>

<style scoped>
  .nav-link.active {
    color: #0061f2 !important; /* 파란색 유지 */
    /* text-decoration: underline !important; 밑줄 유지 */
    font-weight: bold;
  }
</style>
