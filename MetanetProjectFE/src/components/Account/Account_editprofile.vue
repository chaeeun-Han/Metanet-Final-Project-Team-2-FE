<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
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
      <form id="kt_account_profile_details_form" class="form">
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
              <div class="image-input image-input-outline" data-kt-image-input="true"
                style="background-image: url('assets/media/svg/avatars/blank.svg')">
                <!--begin::Preview existing avatar-->
                <div class="image-input-wrapper w-125px h-125px"
                  style="background-image: url(assets/media/avatars/300-1.jpg)"></div>
                <!--end::Preview existing avatar-->
                <!--begin::Label-->
                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                  <i class="ki-duotone ki-pencil fs-7">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <!--begin::Inputs-->
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->
                <!--begin::Cancel-->
                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                  <i class="ki-duotone ki-cross fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <!--end::Cancel-->
                <!--begin::Remove-->
                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                  <i class="ki-duotone ki-cross fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </span>
                <!--end::Remove-->
              </div>
              <!--end::Image input-->

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
                    placeholder="First name" value="Max" />
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
                placeholder="Phone number" value="044 3276 454 935" />
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
                placeholder="Phone number" value="044 3276 454 935" />
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
            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <select name="country" aria-label="Select a Country" data-control="select2"
                data-placeholder="Select a country..." class="form-select form-select-solid form-select-lg fw-semibold">
                <option value="">관심 분야를 선택해주세요 </option>
                <option data-kt-flag="flags/afghanistan.svg" value="AF">Afghanistan</option>
              </select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

        </div>
        <!--end::Card body-->
        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button type="reset" class="btn btn-light btn-active-light-primary me-2">취소</button>
          <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">변경사항 적용 </button>
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
            <div class="fw-semibold text-gray-600">support@keenthemes.com</div>
          </div>
          <!--end::Label-->
          <!--begin::Edit-->
          <div id="kt_signin_email_edit" class="flex-row-fluid d-none">
            <!--begin::Form-->
            <form id="kt_signin_change_email" class="form" novalidate="novalidate">
              <div class="row mb-6">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <div class="fv-row mb-0">
                    <label for="emailaddress" class="form-label fs-6 fw-bold mb-3">새 이메일</label>
                    <input type="email" class="form-control form-control-lg form-control-solid" id="emailaddress"
                      placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" /><button
                      id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6">인증번호 전송</button>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="fv-row mb-0">
                    <label for="confirmemailpassword" class="form-label fs-6 fw-bold mb-3">인증번호</label>
                    <input type="email" class="form-control form-control-lg form-control-solid" id="emailaddress"
                      placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" /><button
                      id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6">인증번호 확인 </button>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6">이메일 수정</button>
                <button id="kt_signin_cancel" type="button"
                  class="btn btn-color-gray-500 btn-active-light-primary px-6">취소</button>
              </div>
            </form>
            <!--end::Form-->
          </div>
          <!--end::Edit-->
          <!--begin::Action-->
          <div id="kt_signin_email_button" class="ms-auto">
            <button class="btn btn-light btn-active-light-primary"> 이메일 수정</button>
          </div>
          <!--end::Action-->
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
            <div class="fw-semibold text-gray-600">************</div>
          </div>
          <!--end::Label-->
          <!--begin::Edit-->
          <div id="kt_signin_password_edit" class="flex-row-fluid d-none">
            <!--begin::Form-->
            <form id="kt_signin_change_password" class="form" novalidate="novalidate">
              <div class="row mb-1">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label for="currentpassword" class="form-label fs-6 fw-bold mb-3">현재 비밀번호</label>
                    <input type="password" class="form-control form-control-lg form-control-solid"
                      name="currentpassword" id="currentpassword" />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label for="newpassword" class="form-label fs-6 fw-bold mb-3">새 비밀번호</label>
                    <input type="password" class="form-control form-control-lg form-control-solid" name="newpassword"
                      id="newpassword" />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label for="confirmpassword" class="form-label fs-6 fw-bold mb-3">새 비밀번호 확인</label>
                    <input type="password" class="form-control form-control-lg form-control-solid"
                      name="confirmpassword" id="confirmpassword" />
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6">비밀번호 수정</button>
                <button id="kt_password_cancel" type="button"
                  class="btn btn-color-gray-500 btn-active-light-primary px-6">취소</button>
              </div>
            </form>
            <!--end::Form-->
          </div>
          <!--end::Edit-->
          <!--begin::Action-->
          <div id="kt_signin_password_button" class="ms-auto">
            <button class="btn btn-light btn-active-light-primary">비밀번호 수정</button>
          </div>
          <!--end::Action-->
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
        <h3>Billing Address</h3>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Addresses-->
      <div class="row gx-9 gy-6">
        <!--begin::Col-->
        <div class="col-xl-6" data-kt-billing-element="address">
          <!--begin::Address-->
          <div class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
            <!--begin::Details-->
            <div class="d-flex flex-column py-2">
              <div class="d-flex align-items-center fs-5 fw-bold mb-5">계좌번호 1
                <span class="badge badge-light-success fs-7 ms-2">주계좌</span>
              </div>
              <div class="fs-6 fw-semibold text-gray-600">~~ 은행 번호 </div>

            </div>
            <!--end::Details-->
            <!--begin::Actions-->
            <div class="d-flex align-items-center py-2">
              <button class="btn btn-sm btn-light btn-active-light-primary me-3"
                data-kt-billing-action="address-delete">
                <!--begin::Indicator label-->
                <span class="indicator-label">삭제</span>
                <!--end::Indicator label-->
                <!--begin::Indicator progress-->
                <span class="indicator-progress">Please wait...
                  <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                <!--end::Indicator progress-->
              </button>
              <button class="btn btn-sm btn-light btn-active-light-primary" data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_address">주계좌로 등록</button>
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Address-->
        </div>
        <!--end::Col-->


        <!--begin::Col-->
        <div class="col-xl-6">
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
              <!--end::Content-->
              <!--begin::Action-->
              <a href="#" class="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_address">입금 계좌 추가</a>
              <!--end::Action-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Notice-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Addresses-->
      <!--begin::Tax info-->
      <div class="mt-10">
        <h3 class="mb-3">수수료 및 세금 공제 안내</h3>
        <div class="fw-semibold text-gray-600 fs-6">수익 정산 시 플랫폼 수수료(10%) 차감 후 지급
          <br />
          <a class="fw-bold" href="#">자세히 보기</a>
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
            class="btn btn-danger fw-semibold">탈퇴하기</button>
        </div>
        <!--end::Card footer-->
      </form> <!-- ✅ 누락된 닫는 태그 추가 -->
      <!--end::Form-->
    </div>
  </div>
  <!--end::Deactivate Account-->
</template>

<script>

</script>
