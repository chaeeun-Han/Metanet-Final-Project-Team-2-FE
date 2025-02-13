<template>
  <!--begin::Basic info-->
 
  <div class="card mb-5 mb-xl-10"  >
    <!--begin::Card header-->
    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">프로필 상세 </h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->
    <!--begin::Content-->
    <div id="kt_account_settings_profile_details" class="collapse show">
      <!--begin::Form-->
      <form id="kt_account_profile_details_form" class="form" @submit.prevent="updateProfile">
        <!--begin::Card body-->        
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semibold fs-6">프로필 이미지</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Image input-->
              <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('assets/media/svg/avatars/blank.svg')">
                  <!--begin::Preview existing avatar-->
                  <div class="form-group">
                    <label for="profilePicture">Profile Picture</label>
                    <input
                      type="file"
                      id="profilePicture"
                      @change="handleFileChange"
                      accept="image/*"
                    />                    
                    <!-- 프로필 사진 미리보기 -->
                    <!-- <div v-if="previewImage" class="image-preview">
                      <img :src="previewImage" alt="Profile Preview" />
                    </div> -->
                  </div>
                <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label required fw-semibold fs-6">이름</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-6 fv-row">
                  <input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                   :placeholder="editListData.members.name"v-model="editListData.members.name" />
                </div>
                <!--end::Col-->

              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semibold fs-6">
              <span class="required">핸드폰 번호</span>

            </label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="tel" name="phone" class="form-control form-control-lg form-control-solid"
              :placeholder="editListData.members.phone" v-model="editListData.members.phone" />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semibold fs-6">
              <span class="required">생년 월일</span>

            </label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="tel" name="phone" class="form-control form-control-lg form-control-solid"
              :placeholder="editListData.members.birth" v-model="editListData.members.birth" />
            </div>            
            <!--end::Col-->
          </div>
          <!--end::Input group-->   
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-semibold fs-6">
              <span class="required">Zoom ID</span>

            </label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <input type="tel" name="phone" class="form-control form-control-lg form-control-solid"
              :placeholder="editListData.members.attendId" v-model="editListData.members.attendId"/>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->      
          <!--begin::Input group-->
          <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-4 col-form-label fw-semibold fs-6">
                <span class="required">관심 분야</span>
                <span class="ms-1" data-bs-toggle="tooltip" title="Country of origination">
                  <i class="ki-duotone ki-information-5 text-gray-500 fs-6">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>
                </span>
              </label>
              <!--end::Label-->
              
              <div class="col-lg-8 fv-row">
                <div class="col-lg-8 fv-row">
                <p>관심 분야를 선택해주세요:</p>
                <div class="form-check" v-for="(item, index) in editListData?.category || []" :key="index" style="display: inline-block; margin-right: 15px;">
                  <input 
                    type="checkbox" 
                    :id="'category-' + index" 
                    :value="item" 
                    v-model="selectedCategories" 
                    class="form-check-input"
                  />
                  <label :for="'category-' + index" class="form-check-label text-gray-700 fw-bold text-nowrap">
                    {{ item }}
                  </label>
                </div>

                <!-- 관심 분야를 선택하지 않은 경우 -->
                <p v-if="!editListData.myCategory || editListData.myCategory.length === 0" class="text-muted mt-2">관심 분야를 선택해주세요</p>
                
                <!-- 선택된 관심 분야가 있을 경우 콤마로 구분하여 표시 -->
                <p v-else class="text-muted mt-2">
                  현재 관심 분야 : {{ editListData.myCategory.join(', ') }}
                </p>
              </div>
              </div>
            </div>
          </div>
          <!--end::Input group-->

        </div>
        <!--end::Card body-->
        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button type="reset" class="btn btn-light btn-active-light-primary me-2">취소</button>
          <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">수정 </button>
        </div>
        <!--end::Actions-->
      </form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->
  <!--begin::Sign-in Method-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
      data-bs-target="#kt_account_signin_method">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">로그인 정보 수정</h3>
      </div>
    </div>
    <!--end::Card header-->
    <!--begin::Content-->
    <div id="kt_account_settings_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Email Address-->
        <div class="d-flex flex-wrap align-items-center">
          <!--begin::Label-->
          <div id="kt_signin_email">
            <div class="fs-6 fw-bold mb-1">이메일</div>
            <div class="fw-semibold text-gray-600" >{{ editListData.members.email }}</div>
          </div>
          <!--end::Label-->
          
          <!-- 이메일 수정 버튼 -->
          <div id="kt_signin_email_button" class="ms-auto">
            <button class="btn btn-light btn-active-light-primary" data-bs-toggle="modal" data-bs-target="#emailEditModal">
              이메일 수정
            </button>
          </div>
          <!--end::Action-->
        </div>

        <!-- 모달 창 -->
        <div class="modal fade" id="emailEditModal" tabindex="-1" aria-labelledby="emailEditModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="emailEditModalLabel">이메일 수정</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="kt_signin_change_email" class="form">
                  
                  <!-- 새 이메일 입력 + 인증번호 전송 버튼 (한 줄) -->
                  <div class="d-flex align-items-center mb-3">
                    <input type="email" class="form-control form-control-lg form-control-solid me-2" id="emailaddress"
                      placeholder="이메일 입력" v-model="newEmail"/>
                    <button  type="button" class="btn btn-primary" @click="senEmailCode" :disabled="loading" >
                      <span v-if="!loading">인증코드 발송</span>
											<span v-else>
												<span class="spinner-border spinner-border-sm align-middle"></span> 전송 중...
											</span></button>
                  </div>

                  <!-- 인증번호 입력 + 확인 버튼 (한 줄) -->
                  <div class="d-flex align-items-center mb-4">
                    <input type="text" class="form-control form-control-lg form-control-solid me-2" id="confirmemailpassword"
                      placeholder="인증번호 입력" v-model="email_verify" />
                    <button @click="checkCode" id="kt_signin_verify" type="button" class="btn btn-primary">인증번호 확인</button>
                  </div>

                  <!-- 이메일 수정 및 취소 버튼 -->
                  <div class="d-flex">
                    <button  type="button" class="btn btn-primary me-2 px-6" @click="editEmail">이메일 수정</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
        <!--end::Email Address-->
        <!--begin::Separator-->
        <div class="separator separator-dashed my-6"></div>
        <!--end::Separator-->
        <!--begin::Password-->
        <div class="d-flex flex-wrap align-items-center mb-10">
          <!--begin::Label-->
          <div id="kt_signin_password">
            <div class="fs-6 fw-bold mb-1">비밀번호</div>
            <input type="password" class="form-control border-0 bg-transparent fw-semibold text-gray-600" 
             value="{{ editListData.members.password}}" readonly />
          </div>
          <!--end::Label-->
         <!-- 비밀번호 수정 버튼 -->
        <div id="kt_signin_password_button" class="ms-auto">
          <button class="btn btn-light btn-active-light-primary" data-bs-toggle="modal" data-bs-target="#pwEditModal">비밀번호 수정</button>
        </div>

        <!-- 비밀번호 변경 모달 -->
        <div class="modal fade" id="pwEditModal" tabindex="-1" aria-labelledby="pwEditModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg"> <!-- modal-lg로 크기 조절 -->
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="pwEditModalLabel">비밀번호 수정</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- 비밀번호 변경 폼 -->
                <form id="kt_signin_change_password" class="form">
                  <div class="row mb-3">
                    <div class="col-lg-4">
                      <div class="fv-row mb-0">
                        <label for="currentpassword" class="form-label fs-6 fw-bold mb-2">현재 비밀번호</label>
                        <input type="password" class="form-control form-control-lg form-control-solid" v-model="currentpassword" id="currentpassword" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="fv-row mb-0">
                        <label for="newpassword" class="form-label fs-6 fw-bold mb-2">새 비밀번호</label>
                        <input type="password" class="form-control form-control-lg form-control-solid" v-model="newpassword" id="newpassword" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="fv-row mb-0">
                        <label for="confirmpassword" class="form-label fs-6 fw-bold mb-2">새 비밀번호 확인</label>
                        <input type="password" class="form-control form-control-lg form-control-solid" v-model="confirmpassword" id="confirmpassword" />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button @click="passwordEdit" id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6">비밀번호 수정</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

          
        </div>
        <!--end::Password-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Sign-in Method-->
  <!--begin::Billing Address-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Title-->
      <div class="card-title">
        <h3>입금 계좌</h3>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body">
  <!--begin::Addresses-->
  <div class="row gx-9 gy-6">
    <!--begin::Col-->
    <div class="col-xl-6" data-kt-billing-element="address" v-if="editListData.members.bank">
      <!--begin::Address-->
      <div class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
        <!--begin::Details-->
        <div class="d-flex flex-column py-2">
          <div class="d-flex align-items-center fs-5 fw-bold mb-5">계좌번호
            <span class="badge badge-light-success fs-7 ms-2">주계좌</span>
          </div>
          <div class="fs-6 fw-semibold text-gray-600">{{ editListData.members.bank }}</div>
        </div>
        <!--end::Details-->
        <!--begin::Actions-->
        <div class="d-flex align-items-center py-2">
          <button class="btn btn-sm btn-light btn-active-light-primary me-3"
            data-kt-billing-action="address-delete" @click="deleteBank">
            <!--begin::Indicator label-->
            <span class="indicator-label">삭제</span>
            <!--end::Indicator label-->
            <!--begin::Indicator progress-->
            <span class="indicator-progress">Please wait...
              <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            <!--end::Indicator progress-->
          </button>
          <button class="btn btn-sm btn-light btn-active-light-primary" data-bs-toggle="modal"
            data-bs-target="#pwEditBank">편집</button>
        </div>
        <!--end::Actions-->
      </div>
      <!--end::Address-->
    </div>
    <!--end::Col-->

    <!-- 계좌번호가 없을 때 보이는 추가 버튼 -->
    <div class="col-xl-6" >
      <!--begin::Notice-->
      <div
        class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 mb-10 p-6">
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
          <!--begin::Content-->
          <div class="mb-3 mb-md-0 fw-semibold">
            <h4 class="text-gray-900 fw-bold">계좌 등록 및 정산 관련 안내</h4>
            <div class="fs-6 text-gray-700 pe-7">본인 명의 계좌만 등록 가능 [타인 계좌 불가] 정확한 계좌 정보를 입력하세요. 오입력 시 정산이 지연될 수 있습니다.
              정산 일정 : 매월 10일 (주말, 공휴일 제외) 계좌 변경은 정산일 전에 미리 신청해야 합니다. 계좌 정보는 안전하게 보호되며 플랫폼은 계좌 정보를 직업 요청하지 않습니다.
            </div>
          </div>
          <div v-if="!editListData.members.bank">
          <button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6" data-bs-toggle="modal" data-bs-target="#addBankModal">계좌 추가</button>
        </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Col-->
  </div>
  <!--end::Addresses-->

  <!-- 계좌번호 변경 모달 -->
  <div class="modal fade" id="pwEditBank" tabindex="-1" aria-labelledby="pwEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg"> <!-- modal-lg로 크기 조절 -->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pwEditModalLabel">계좌번호 수정</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- 계좌번호 수정 폼 -->
          <form id="kt_signin_change_password" class="form">
            <div class="row mb-3">
              <div class="col-lg-12">
                <div class="fv-row d-flex align-items-center">
                  <label for="currentpassword" class="form-label fs-6 fw-bold me-2 mb-0">계좌번호 입력</label>
                  <input type="password" class="form-control form-control-lg form-control-solid me-2" v-model="currentbank"
                    id="currentpassword" />
                  <button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-4" @click="editBank">계좌번호 수정</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- 계좌번호 추가 모달 -->
  <div class="modal fade" id="addBankModal" tabindex="-1" aria-labelledby="pwEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg"> <!-- modal-lg로 크기 조절 -->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pwEditModalLabel">계좌번호 추가</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- 계좌번호 추가 폼 -->
          <form id="kt_signin_change_password" class="form">
            <div class="row mb-3">
              <div class="col-lg-12">
                <div class="fv-row d-flex align-items-center">
                  <label for="currentpassword" class="form-label fs-6 fw-bold me-2 mb-0">계좌번호 입력</label>
                  <input type="password" class="form-control form-control-lg form-control-solid me-2" v-model="addbank"
                    id="currentpassword" />
                  <button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-4" @click="addBank">계좌번호 추가</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!--begin::Tax info-->
  <div class="mt-10">
    <h3 class="mb-3">수수료 및 세금 공제 안내</h3>
    <div class="fw-semibold text-gray-600 fs-6">수익 정산 시 플랫폼 수수료(10%) 차감 후 지급
      <br />      
    </div>
  </div>
  <!--end::Tax info-->
</div>

    <!--end::Card body-->
  </div>
  <!--end::Billing Address-->
  <!--begin::Deactivate Account-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
      data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">회원 탈퇴</h3>
      </div>
    </div>
    <!--end::Card header-->
    <!--begin::Content-->
    <div id="kt_account_settings_deactivate" class="collapse show">
      <!--begin::Form-->
      <form id="kt_account_deactivate_form" class="form">
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Notice-->
          <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
            <!--begin::Icon-->
            <i class="ki-duotone ki-information fs-2tx text-warning me-4">
              <span class="path1"></span>
              <span class="path2"></span>
              <span class="path3"></span>
            </i>
            <!--end::Icon-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack flex-grow-1">
              <!--begin::Content-->
              <div class="fw-semibold">
                <h4 class="text-gray-900 fw-bold">회원 탈퇴 하시겠습니까 ?</h4>
                <div class="fs-6 text-gray-700">
                  회원을 탈퇴 시 결제한 강의를 다시 보실 수 없습니다. 그래도 탈퇴 하시겠습니까?
                  <br />
                </div>
              </div>
              <!--end::Content-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Notice-->

          <!--begin::Form input row-->
          <div class="form-check form-check-solid fv-row">
            <input name="deactivate" class="form-check-input" type="checkbox" value="" id="deactivate" />
            <label class="form-check-label fw-semibold ps-2 fs-6" for="deactivate">해당 사항을 확인했습니다.</label>
          </div>
          <!--end::Form input row-->
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button id="kt_account_deactivate_account_submit" type="submit"
            class="btn btn-danger fw-semibold" @click="deleteMember">탈퇴하기</button>
        </div>
        <!--end::Card footer-->
      </form> <!-- ✅ 누락된 닫는 태그 추가 -->
      <!--end::Form-->
    </div>
  </div>
  <!--end::Deactivate Account-->

</template>


<script>
import api from "../../apis/api";

export default {
  data() {
  return {
    editListData: {
      members: {
        profile:this.editListData?.members?.profile || '',
        name: this.editListData?.members?.name || '',  // editListData가 없으면 빈 문자열로 초기화
        phone: this.editListData?.members?.phone || '',
        birth: this.editListData?.members?.birth || '',
        attendId: this.editListData?.members?.attendId || '',
        profile: this.editListData?.members?.profile || '',  // 프로필 이미지 URL
      },
      category: [], // 이 부분은 빈 배열로 초기화
      myCategory: this.editListData?.myCategory || [],  // editListData.myCategory가 없으면 빈 배열
    },
    email: "",
    newEmail: '',
    email_verify: '',
    loading: false,
    currentpassword: '',
    newpassword: '',
    confirmpassword: '',
    selectedCategories: [], // 올바른 변수명으로 변경
    profile: null,
    previewImage: null
  };
},
props: {
  editListData: {
    type: Object,
    required: true
  }
},

  mounted() {
    if (this.editprofile && this.editprofile.members.email) {
      this.email = this.editprofile.members.email;  // editprofile.email 값을 data에 저장
    }
  },
  methods: {    
    handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        this.selectedFile = file;  // 파일을 selectedFile에 할당
        const reader = new FileReader();
        reader.onloadend = () => {
          this.previewImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async updateProfile() {
        try {
          const token = sessionStorage.getItem("accessToken");
        
          const formData = new FormData();

          if (!this.editListData.myCategory && this.editListData.myCategory.length === 0 && this.selectedCategories.length === 0) {            
            return; // myCategory나 selectedCategories가 없으면 더 이상 진행하지 않음
          }
         
          if (!this.selectedFile) {
            Swal.fire('입력 값 확인', '사진을 추가 해주세요', 'info');            
          }else {
            formData.append('file', this.selectedFile);
          }

          formData.append('name', this.editListData.members.name || this.editListData.members.name); 
          formData.append('phone', this.editListData.members.phone || this.editListData.members.phone);
          formData.append('birth', this.editListData.members.birth || this.editListData.members.birth);
          formData.append('attendId', this.editListData.members.attendId || this.editListData.members.attendId);
          formData.append('tags',
                          this.selectedCategories.length > 0 
                            ? this.selectedCategories.join(',') 
                            : this.editListData.myCategory.join(',')); // 관심 분야는 쉼표로 구분

          // API 요청
          const response = await axios.put("http://localhost:8080/account/update", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response.data);
          Swal.fire('프로필 업데이트 성공', '프로필이 업데이트 되었습니다.', 'success');          
          window.location.reload();
        } catch (error) {
          console.error(error);          
          Swal.fire('프로필 업데이트 실패', '프로필 업데이트가 실패하였습니다.', 'error');
        }
      },
    handleAvatarChange(file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result;  // 새로 선택한 이미지 URL로 변경
        // 'editListData.members.profile'에 값 업데이트
        this.editListData.members.profile = this.avatarUrl;
      };
      reader.readAsDataURL(file);
    },
    async senEmailCode() {
      if (!this.newEmail) {
        Swal.fire('입력 값 확인', '이메일을 입력해주세요', 'info');        
        return;
      }

      this.loading = true;

      const payload = { email: this.newEmail };
      console.log(payload);

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post("http://localhost:8080/email/mail-email", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        Swal.fire('인증 코드 발송 완료', '이메일을 확인해주세요', 'success');
      } catch (error) {
        
        Swal.fire('인증 코드 발송 실패', '이메일 전송에 실패하였습니다', 'error');
      } finally {
        this.loading = false;
      }
    },

    async checkCode() {
      if (!this.newEmail || !this.email_verify) {
        Swal.fire('입력 값 확인', '이메일과 인증코드를 입력해주세요.', 'info');        
        return;
      }

      const payload = { email: this.newEmail, verifyCode: this.email_verify };

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post("http://localhost:8080/email/verify", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        Swal.fire('인증 성공', '인증에 성공하였습니다', 'success');
      } catch (error) {
        console.error("인증에 실패하였습니다.", error.response ? error.response.data : error.message);
        Swal.fire('인증 실패', '인증에 실패하였습니다', 'error');
      }
    },

    async editEmail(){
      if (!this.newEmail || !this.email_verify) {
        Swal.fire('입력 값 확인', '이메일과 인증번호 인증 후에 설정해주세요.', 'info');        
        return;
      }
      const payload = { email: this.newEmail };

      try {
      const token = sessionStorage.getItem("accessToken");
      const response = await axios.post("http://localhost:8080/auth/email", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });        
      Swal.fire('이메일 변경 성공', '이메일 변경이 완료되었습니다.', 'success');         
        window.location.reload();
      } catch (error) {        
        Swal.fire('이메일 변경 실패', '이메일 변경이 실패하였습니다.', 'error');         
      }
    },
    async passwordEdit() {
      if(this.newpassword != this.confirmpassword){
        Swal.fire('입력 값 확인', '비밀번호와 비밀번호 확인의 값이 동일한지 확인해주세요.', 'info');                 
        return;
      }

      const payload = { email: this.email, password: this.newpassword };  

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post("http://localhost:8080/auth/password", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log('비밀번호 변경 성공 :', response.data);
        Swal.fire('비밀번호 변경 성공', '비밀번호 변경 성공하였습니다.', 'success');                         
        window.location.reload();
      } catch (error) {
        console.log('비밀번호 변경 실패: ', error.response ? error.response.data : error.message);
        
        Swal.fire('비밀번호 변경 실패', '비밀번호 변경 실패했습니다', 'error');                 
      } 
    },    
    
    async editBank() {
      if (!this.currentbank) {
        Swal.fire('입력 값 확인', '계좌 번호를 입력해주세요', 'info'); 
        return;
      }

      const payload = { bank: this.currentbank };

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.put("http://localhost:8080/account/edit-bank", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        
        Swal.fire('계좌번호 변경 성공', '계좌 번호 변경 성공 하였습니다.', 'success'); 
        window.location.reload();
      } catch (error) {
        Swal.fire('계좌번호 변경 실패', '계좌 번호 변경 실패 하였습니다.', 'error'); 
      }
    },
    async deleteBank(){           

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.delete("http://localhost:8080/account/delete-bank", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        Swal.fire('계좌번호 삭제 성공', '계좌 번호 삭제 성공 하였습니다.', 'success'); 
        window.location.reload();
      } catch (error) {
        Swal.fire('계좌번호 삭제 실패', '계좌 번호 삭제 실패 하였습니다.', 'error'); 
      }
    },
    async addBank(){
      if (!this.addbank) {
        Swal.fire('입력 값 확인', '계좌 번호를 입력해주세요.', 'info');         
        return;
      }

      const payload = { bank: this.addbank };

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post("http://localhost:8080/account/add-bank", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        Swal.fire('계좌번호 추가 성공', '계좌 번호 추가를 성공하였습니다.', 'success'); 
        window.location.reload();
      } catch (error) {
        Swal.fire('계좌번호 추가 실패', '계좌 번호 추가를 실패하였습니다.', 'error'); 
      }
    },
    async deleteMember(){
      const deactivateCheckbox = document.getElementById('deactivate');
    
      if (!deactivateCheckbox.checked) {
        Swal.fire('체크를 진행해주세요', '탈퇴 하시려면 체크 표시를 하셔야 합니다.', 'info');         
      }

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.delete("http://localhost:8080/account/delete", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        
        Swal.fire('회원 탈퇴 성공', '회원 탈퇴를 성공하였습니다. 로그인 창으로 이동합니다.', 'success');         
        window.location.href = '/login';
      } catch (error) {
        Swal.fire('회원 탈퇴 실패', '회원 탈퇴를 실패하였습니다.', 'error');         
      }
    }
  }
};


</script>

