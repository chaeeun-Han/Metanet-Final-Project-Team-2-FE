<template>
  <div
    id="kt_app_header"
    class="app-header"
    data-kt-sticky="true"
    data-kt-sticky-activate="{default: true, lg: true}"
    data-kt-sticky-name="app-header-minimize"
    data-kt-sticky-offset="{default: '200px', lg: '0'}"
    data-kt-sticky-animation="false"
  >
    <!--begin::Header container-->
    <div
      class="app-container container-fluid d-flex align-items-stretch justify-content-between"
      id="kt_app_header_container"
    >
      <!--begin::Sidebar mobile toggle-->
      <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
        <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
          <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </div>
      </div>
      <!--end::Sidebar mobile toggle-->
      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <a href="index.html" class="d-lg-none">
          <img alt="Logo" src="../../../public/assets/media/logos/default-small.svg" class="h-30px" />
        </a>
      </div>
      <!--end::Mobile logo-->
      <!--begin::Header wrapper-->
      <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
        <!--begin::Menu wrapper-->
        <div
          class="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="250px"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        >
          <!--begin::Menu-->
          <div
            class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
            id="kt_app_header_menu"
            data-kt-menu="true"
          >
            <!--begin:Menu item-->
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              class="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
            >
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">Dashboards</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <!--end:Menu link-->
              <!--begin:Menu sub-->
              <div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                <!--begin:Dashboards menu-->
                <div
                  class="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                  data-kt-menu-dismiss="true"
                >
                  <!--begin:Row-->
                  <div class="row">
                    <!--begin:Col-->
                    <div class="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="index.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-element-11 text-primary fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                  <span class="path4"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Default</span>
                                <span class="fs-7 fw-semibold text-muted">Reports &amp; statistics</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/ecommerce.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-basket text-danger fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                  <span class="path4"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">eCommerce</span>
                                <span class="fs-7 fw-semibold text-muted">Sales reports</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/projects.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-abstract-44 text-info fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Projects</span>
                                <span class="fs-7 fw-semibold text-muted">Tasts, graphs &amp; charts</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/online-courses.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-color-swatch text-success fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                  <span class="path4"></span>
                                  <span class="path5"></span>
                                  <span class="path6"></span>
                                  <span class="path7"></span>
                                  <span class="path8"></span>
                                  <span class="path9"></span>
                                  <span class="path10"></span>
                                  <span class="path11"></span>
                                  <span class="path12"></span>
                                  <span class="path13"></span>
                                  <span class="path14"></span>
                                  <span class="path15"></span>
                                  <span class="path16"></span>
                                  <span class="path17"></span>
                                  <span class="path18"></span>
                                  <span class="path19"></span>
                                  <span class="path20"></span>
                                  <span class="path21"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Online Courses</span>
                                <span class="fs-7 fw-semibold text-muted">Student progress</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/marketing.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-chart-simple text-gray-900 fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                  <span class="path4"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Marketing</span>
                                <span class="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/bidding.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-switch text-warning fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Bidding</span>
                                <span class="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/pos.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-abstract-42 text-danger fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">POS System</span>
                                <span class="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-6 mb-3">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="dashboards/call-center.html" class="menu-link">
                              <span
                                class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3"
                              >
                                <i class="ki-duotone ki-call text-primary fs-1">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                  <span class="path4"></span>
                                  <span class="path5"></span>
                                  <span class="path6"></span>
                                  <span class="path7"></span>
                                  <span class="path8"></span>
                                </i>
                              </span>
                              <span class="d-flex flex-column">
                                <span class="fs-6 fw-bold text-gray-800">Call Center</span>
                                <span class="fs-7 fw-semibold text-muted">Campaings &amp; conversions</span>
                              </span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                      <div class="separator separator-dashed mx-5 my-5"></div>
                      <!--begin:Landing-->
                      <div class="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                        <div class="d-flex flex-column me-5">
                          <div class="fs-6 fw-bold text-gray-800">Landing Page Template</div>
                          <div class="fs-7 fw-semibold text-muted">
                            Onpe page landing template with pricing &amp; others
                          </div>
                        </div>
                        <a href="landing.html" class="btn btn-sm btn-primary fw-bold">Explore</a>
                      </div>
                      <!--end:Landing-->
                    </div>
                    <!--end:Col-->
                    <!--begin:Col-->
                    <div class="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                      <!--begin:Heading-->
                      <h4 class="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
                      <!--end:Heading-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/logistics.html" class="menu-link py-2">
                          <span class="menu-title">Logistics</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/website-analytics.html" class="menu-link py-2">
                          <span class="menu-title">Website Analytics</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/finance-performance.html" class="menu-link py-2">
                          <span class="menu-title">Finance Performance</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/store-analytics.html" class="menu-link py-2">
                          <span class="menu-title">Store Analytics</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/social.html" class="menu-link py-2">
                          <span class="menu-title">Social</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/delivery.html" class="menu-link py-2">
                          <span class="menu-title">Delivery</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/crypto.html" class="menu-link py-2">
                          <span class="menu-title">Crypto</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/school.html" class="menu-link py-2">
                          <span class="menu-title">School</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                      <!--begin:Menu item-->
                      <div class="menu-item p-0 m-0">
                        <!--begin:Menu link-->
                        <a href="dashboards/podcast.html" class="menu-link py-2">
                          <span class="menu-title">Podcast</span>
                        </a>
                        <!--end:Menu link-->
                      </div>
                      <!--end:Menu item-->
                    </div>
                    <!--end:Col-->
                  </div>
                  <!--end:Row-->
                </div>
                <!--end:Dashboards menu-->
              </div>
              <!--end:Menu sub-->
            </div>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <div
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-placement="bottom-start"
              class="menu-item here show"
            >
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">Pages</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <!--end:Menu link-->
              <!--begin:Menu sub-->
              <div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                <!--begin:Pages menu-->
                <div class="menu-active-bg px-4 px-lg-0">
                  <!--begin:Tabs nav-->
                  <div class="d-flex w-100 overflow-auto">
                    <ul
                      class="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1"
                      role="tablist"
                    >
                      <!--begin:Nav item-->
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_pages"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                          >General</a
                        >
                      </li>
                      <!--end:Nav item-->
                      <!--begin:Nav item-->
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 active text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_account"
                          aria-selected="true"
                          role="tab"
                          >Account</a
                        >
                      </li>
                      <!--end:Nav item-->
                      <!--begin:Nav item-->
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_authentication"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                          >Authentication</a
                        >
                      </li>
                      <!--end:Nav item-->
                      <!--begin:Nav item-->
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_utilities"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                          >Utilities</a
                        >
                      </li>
                      <!--end:Nav item-->
                      <!--begin:Nav item-->
                      <li class="nav-item mx-lg-1" role="presentation">
                        <a
                          class="nav-link py-3 py-lg-6 text-active-primary"
                          href="#"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_app_header_menu_pages_widgets"
                          aria-selected="false"
                          tabindex="-1"
                          role="tab"
                          >Widgets</a
                        >
                      </li>
                      <!--end:Nav item-->
                    </ul>
                  </div>
                  <!--end:Tabs nav-->
                  <!--begin:Tab content-->
                  <div class="tab-content py-4 py-lg-8 px-lg-7">
                    <!--begin:Tab pane-->
                    <div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_pages" role="tabpanel">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-8">
                          <!--begin:Row-->
                          <div class="row">
                            <!--begin:Col-->
                            <div class="col-lg-3 mb-6 mb-lg-0">
                              <!--begin:Menu heading-->
                              <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
                              <!--end:Menu heading-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/overview.html" class="menu-link">
                                  <span class="menu-title">Overview</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/projects.html" class="menu-link">
                                  <span class="menu-title">Projects</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/campaigns.html" class="menu-link">
                                  <span class="menu-title">Campaigns</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/documents.html" class="menu-link">
                                  <span class="menu-title">Documents</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/followers.html" class="menu-link">
                                  <span class="menu-title">Followers</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="pages/user-profile/activity.html" class="menu-link">
                                  <span class="menu-title">Activity</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-3 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-6">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/about.html" class="menu-link">
                                    <span class="menu-title">About</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/team.html" class="menu-link">
                                    <span class="menu-title">Our Team</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/contact.html" class="menu-link">
                                    <span class="menu-title">Contact Us</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/licenses.html" class="menu-link">
                                    <span class="menu-title">Licenses</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/sitemap.html" class="menu-link">
                                    <span class="menu-title">Sitemap</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/careers/list.html" class="menu-link">
                                    <span class="menu-title">Careers List</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/careers/apply.html" class="menu-link">
                                    <span class="menu-title">Careers Apply</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-3 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-6">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/faq/classic.html" class="menu-link">
                                    <span class="menu-title">FAQ Classic</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/faq/extended.html" class="menu-link">
                                    <span class="menu-title">FAQ Extended</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                              <!--begin:Menu section-->
                              <div class="mb-6">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/blog/home.html" class="menu-link">
                                    <span class="menu-title">Blog Home</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/blog/post.html" class="menu-link">
                                    <span class="menu-title">Blog Post</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/pricing.html" class="menu-link">
                                    <span class="menu-title">Column Pricing</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/pricing/table.html" class="menu-link">
                                    <span class="menu-title">Table Pricing</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-3 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/social/feeds.html" class="menu-link">
                                    <span class="menu-title">Feeds</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/social/activity.html" class="menu-link">
                                    <span class="menu-title">Activty</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/social/followers.html" class="menu-link">
                                    <span class="menu-title">Followers</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="pages/social/settings.html" class="menu-link">
                                    <span class="menu-title">Settings</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                          </div>
                          <!--end:Row-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-4">
                          <img
                            src="../../../public/assets/media/stock/600x600/img-82.jpg"
                            class="rounded mw-100"
                            alt=""
                          />
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                    </div>
                    <!--end:Tab pane-->
                    <!--begin:Tab pane-->
                    <div class="tab-pane active w-lg-600px" id="kt_app_header_menu_pages_account" role="tabpanel">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-5 mb-6 mb-lg-0">
                          <!--begin:Row-->
                          <div class="row">
                            <!--begin:Col-->
                            <div class="col-lg-6">
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/overview.html" class="menu-link active">
                                  <span class="menu-title">Overview</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/settings.html" class="menu-link">
                                  <span class="menu-title">Settings</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/security.html" class="menu-link">
                                  <span class="menu-title">Security</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/activity.html" class="menu-link">
                                  <span class="menu-title">Activity</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/billing.html" class="menu-link">
                                  <span class="menu-title">Billing</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-6">
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/statements.html" class="menu-link">
                                  <span class="menu-title">Statements</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/referrals.html" class="menu-link">
                                  <span class="menu-title">Referrals</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/api-keys.html" class="menu-link">
                                  <span class="menu-title">API Keys</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                              <!--begin:Menu item-->
                              <div class="menu-item p-0 m-0">
                                <!--begin:Menu link-->
                                <a href="account/logs.html" class="menu-link">
                                  <span class="menu-title">Logs</span>
                                </a>
                                <!--end:Menu link-->
                              </div>
                              <!--end:Menu item-->
                            </div>
                            <!--end:Col-->
                          </div>
                          <!--end:Row-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-7">
                          <img src="../../../public/assets/media/stock/900x600/46.jpg" class="rounded mw-100" alt="" />
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                    </div>
                    <!--end:Tab pane-->
                    <!--begin:Tab pane-->
                    <div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication" role="tabpanel">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-3 mb-6 mb-lg-0">
                          <!--begin:Menu section-->
                          <div class="mb-6">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/corporate/sign-in.html" class="menu-link">
                                <span class="menu-title">Sign-In</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/corporate/sign-up.html" class="menu-link">
                                <span class="menu-title">Sign-Up</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/corporate/two-factor.html" class="menu-link">
                                <span class="menu-title">Two-Factor</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/corporate/reset-password.html" class="menu-link">
                                <span class="menu-title">Reset Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/corporate/new-password.html" class="menu-link">
                                <span class="menu-title">New Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                          <!--begin:Menu section-->
                          <div class="mb-0">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/overlay/sign-in.html" class="menu-link">
                                <span class="menu-title">Sign-In</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/overlay/sign-up.html" class="menu-link">
                                <span class="menu-title">Sign-Up</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/overlay/two-factor.html" class="menu-link">
                                <span class="menu-title">Two-Factor</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/overlay/reset-password.html" class="menu-link">
                                <span class="menu-title">Reset Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/overlay/new-password.html" class="menu-link">
                                <span class="menu-title">New Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-3 mb-6 mb-lg-0">
                          <!--begin:Menu section-->
                          <div class="mb-6">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/creative/sign-in.html" class="menu-link">
                                <span class="menu-title">Sign-in</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/creative/sign-up.html" class="menu-link">
                                <span class="menu-title">Sign-up</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/creative/two-factor.html" class="menu-link">
                                <span class="menu-title">Two-Factor</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/creative/reset-password.html" class="menu-link">
                                <span class="menu-title">Reset Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/creative/new-password.html" class="menu-link">
                                <span class="menu-title">New Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                          <!--begin:Menu section-->
                          <div class="mb-6">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/fancy/sign-in.html" class="menu-link">
                                <span class="menu-title">Sign-In</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/fancy/sign-up.html" class="menu-link">
                                <span class="menu-title">Sign-Up</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/fancy/two-factor.html" class="menu-link">
                                <span class="menu-title">Two-Factor</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/fancy/reset-password.html" class="menu-link">
                                <span class="menu-title">Reset Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/layouts/fancy/new-password.html" class="menu-link">
                                <span class="menu-title">New Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-3 mb-6 mb-lg-0">
                          <!--begin:Menu section-->
                          <div class="mb-0">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/extended/multi-steps-sign-up.html" class="menu-link">
                                <span class="menu-title">Multi-Steps Sign-Up</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/welcome.html" class="menu-link">
                                <span class="menu-title">Welcome Message</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/verify-email.html" class="menu-link">
                                <span class="menu-title">Verify Email</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/coming-soon.html" class="menu-link">
                                <span class="menu-title">Coming Soon</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/password-confirmation.html" class="menu-link">
                                <span class="menu-title">Password Confirmation</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/account-deactivated.html" class="menu-link">
                                <span class="menu-title">Account Deactivation</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/error-404.html" class="menu-link">
                                <span class="menu-title">Error 404</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/general/error-500.html" class="menu-link">
                                <span class="menu-title">Error 500</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-3 mb-6 mb-lg-0">
                          <!--begin:Menu section-->
                          <div class="mb-0">
                            <!--begin:Menu heading-->
                            <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                            <!--end:Menu heading-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/welcome-message.html" class="menu-link">
                                <span class="menu-title">Welcome Message</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/reset-password.html" class="menu-link">
                                <span class="menu-title">Reset Password</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/subscription-confirmed.html" class="menu-link">
                                <span class="menu-title">Subscription Confirmed</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/card-declined.html" class="menu-link">
                                <span class="menu-title">Credit Card Declined</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/promo-1.html" class="menu-link">
                                <span class="menu-title">Promo 1</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/promo-2.html" class="menu-link">
                                <span class="menu-title">Promo 2</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                            <!--begin:Menu item-->
                            <div class="menu-item p-0 m-0">
                              <!--begin:Menu link-->
                              <a href="authentication/email/promo-3.html" class="menu-link">
                                <span class="menu-title">Promo 3</span>
                              </a>
                              <!--end:Menu link-->
                            </div>
                            <!--end:Menu item-->
                          </div>
                          <!--end:Menu section-->
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                    </div>
                    <!--end:Tab pane-->
                    <!--begin:Tab pane-->
                    <div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities" role="tabpanel">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-7">
                          <!--begin:Row-->
                          <div class="row">
                            <!--begin:Col-->
                            <div class="col-lg-4 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/general/invite-friends.html" class="menu-link">
                                    <span class="menu-title">Invite Friends</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/general/view-users.html" class="menu-link">
                                    <span class="menu-title">View Users</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/general/select-users.html" class="menu-link">
                                    <span class="menu-title">Select Users</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/general/upgrade-plan.html" class="menu-link">
                                    <span class="menu-title">Upgrade Plan</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/general/share-earn.html" class="menu-link">
                                    <span class="menu-title">Share &amp; Earn</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/forms/new-target.html" class="menu-link">
                                    <span class="menu-title">New Target</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/forms/new-card.html" class="menu-link">
                                    <span class="menu-title">New Card</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/forms/new-address.html" class="menu-link">
                                    <span class="menu-title">New Address</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/forms/create-api-key.html" class="menu-link">
                                    <span class="menu-title">Create API Key</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/forms/bidding.html" class="menu-link">
                                    <span class="menu-title">Bidding</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-4 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-6">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/create-app.html" class="menu-link">
                                    <span class="menu-title">Create App</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/create-campaign.html" class="menu-link">
                                    <span class="menu-title">Create Campaign</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/create-account.html" class="menu-link">
                                    <span class="menu-title">Create Business Acc</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/create-project.html" class="menu-link">
                                    <span class="menu-title">Create Project</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/top-up-wallet.html" class="menu-link">
                                    <span class="menu-title">Top Up Wallet</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/offer-a-deal.html" class="menu-link">
                                    <span class="menu-title">Offer a Deal</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/two-factor-authentication.html" class="menu-link">
                                    <span class="menu-title">Two Factor Auth</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/search/horizontal.html" class="menu-link">
                                    <span class="menu-title">Horizontal</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/search/vertical.html" class="menu-link">
                                    <span class="menu-title">Vertical</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/search/users.html" class="menu-link">
                                    <span class="menu-title">Users</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/search/select-location.html" class="menu-link">
                                    <span class="menu-title">Select Location</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                            <!--begin:Col-->
                            <div class="col-lg-4 mb-6 mb-lg-0">
                              <!--begin:Menu section-->
                              <div class="mb-0">
                                <!--begin:Menu heading-->
                                <h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
                                <!--end:Menu heading-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/horizontal.html" class="menu-link">
                                    <span class="menu-title">Horizontal</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/vertical.html" class="menu-link">
                                    <span class="menu-title">Vertical</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/two-factor-authentication.html" class="menu-link">
                                    <span class="menu-title">Two Factor Auth</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/create-app.html" class="menu-link">
                                    <span class="menu-title">Create App</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/create-campaign.html" class="menu-link">
                                    <span class="menu-title">Create Campaign</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/create-account.html" class="menu-link">
                                    <span class="menu-title">Create Account</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/create-project.html" class="menu-link">
                                    <span class="menu-title">Create Project</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/modals/wizards/top-up-wallet.html" class="menu-link">
                                    <span class="menu-title">Top Up Wallet</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                                <!--begin:Menu item-->
                                <div class="menu-item p-0 m-0">
                                  <!--begin:Menu link-->
                                  <a href="utilities/wizards/offer-a-deal.html" class="menu-link">
                                    <span class="menu-title">Offer a Deal</span>
                                  </a>
                                  <!--end:Menu link-->
                                </div>
                                <!--end:Menu item-->
                              </div>
                              <!--end:Menu section-->
                            </div>
                            <!--end:Col-->
                          </div>
                          <!--end:Row-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-5 pe-lg-5">
                          <img
                            src="../../../public/assets/media/stock/600x600/img-84.jpg"
                            class="rounded mw-100"
                            alt=""
                          />
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                    </div>
                    <!--end:Tab pane-->
                    <!--begin:Tab pane-->
                    <div class="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets" role="tabpanel">
                      <!--begin:Row-->
                      <div class="row">
                        <!--begin:Col-->
                        <div class="col-lg-4 mb-6 mb-lg-0">
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/lists.html" class="menu-link">
                              <span class="menu-title">Lists</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/statistics.html" class="menu-link">
                              <span class="menu-title">Statistics</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/charts.html" class="menu-link">
                              <span class="menu-title">Charts</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/mixed.html" class="menu-link">
                              <span class="menu-title">Mixed</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/tables.html" class="menu-link">
                              <span class="menu-title">Tables</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                          <!--begin:Menu item-->
                          <div class="menu-item p-0 m-0">
                            <!--begin:Menu link-->
                            <a href="widgets/feeds.html" class="menu-link">
                              <span class="menu-title">Feeds</span>
                            </a>
                            <!--end:Menu link-->
                          </div>
                          <!--end:Menu item-->
                        </div>
                        <!--end:Col-->
                        <!--begin:Col-->
                        <div class="col-lg-8">
                          <img src="../../../public/assets/media/stock/900x600/44.jpg" class="rounded mw-100" alt="" />
                        </div>
                        <!--end:Col-->
                      </div>
                      <!--end:Row-->
                    </div>
                    <!--end:Tab pane-->
                  </div>
                  <!--end:Tab content-->
                </div>
                <!--end:Pages menu-->
              </div>
              <!--end:Menu sub-->
            </div>
            <!--end:Menu item-->
            <!--begin:Menu item-->

            <!--end:Menu item-->
            <!--begin:Menu item-->

            <!--end:Menu item-->
            <!--begin:Menu item-->

            <!--end:Menu item-->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->
        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">
          <!--begin::Search-->
          <div class="app-navbar-item align-items-stretch ms-1 ms-md-4">
            <!--begin::Search-->
            <div
              id="kt_header_search"
              class="header-search d-flex align-items-stretch"
              data-kt-search-keypress="true"
              data-kt-search-min-length="2"
              data-kt-search-enter="enter"
              data-kt-search-layout="menu"
              data-kt-menu-trigger="auto"
              data-kt-menu-overflow="false"
              data-kt-menu-permanent="true"
              data-kt-menu-placement="bottom-end"
              data-kt-search="true"
            >
              <!--begin::Search toggle-->
              <div class="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                <div
                  class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
                >
                  <i class="ki-duotone ki-magnifier fs-2">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </div>
              </div>
              <!--end::Search toggle-->
              <!--begin::Menu-->
              <div
                data-kt-search-element="content"
                class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px"
                data-kt-menu="true"
                style=""
              >
                <!--begin::Wrapper-->
                <div data-kt-search-element="wrapper">
                  <!--begin::Form-->
                  <form data-kt-search-element="form" class="w-100 position-relative mb-3" autocomplete="off">
                    <!--begin::Icon-->
                    <i
                      class="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0"
                    >
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    <!--end::Icon-->
                    <!--begin::Input-->
                    <input
                      type="text"
                      class="search-input form-control form-control-flush ps-10"
                      name="search"
                      value=""
                      placeholder="Search..."
                      data-kt-search-element="input"
                    />
                    <!--end::Input-->
                    <!--begin::Spinner-->
                    <span
                      class="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                      data-kt-search-element="spinner"
                    >
                      <span class="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                    </span>
                    <!--end::Spinner-->
                    <!--begin::Reset-->
                    <span
                      class="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                      data-kt-search-element="clear"
                    >
                      <i class="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i>
                    </span>
                    <!--end::Reset-->
                    <!--begin::Toolbar-->
                    <div class="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                      <!--begin::Preferences toggle-->

                      <!--end::Preferences toggle-->
                      <!--begin::Advanced search toggle-->
                      <div
                        data-kt-search-element="advanced-options-form-show"
                        class="btn btn-icon w-20px btn-sm btn-active-color-primary"
                        data-bs-toggle="tooltip"
                        aria-label="Show more search options"
                        data-bs-original-title="Show more search options"
                        data-kt-initialized="1"
                      >
                        <i class="ki-duotone ki-down fs-2"></i>
                      </div>
                      <!--end::Advanced search toggle-->
                    </div>
                    <!--end::Toolbar-->
                  </form>
                  <!--end::Form-->
                  <!--begin::Separator-->
                  <div class="separator border-gray-200 mb-6"></div>
                  <!--end::Separator-->
                  <!--begin::Recently viewed-->
                  <div data-kt-search-element="results" class="d-none">
                    <!--begin::Items-->
                    <div class="scroll-y mh-200px mh-lg-350px">
                      <!--begin::Category title-->
                      <h3 class="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                      <!--end::Category title-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <img src="../../../public/assets/media/avatars/300-6.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Karina Clark</span>
                          <span class="fs-7 fw-semibold text-muted">Marketing Manager</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <img src="../../../public/assets/media/avatars/300-2.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Olivia Bold</span>
                          <span class="fs-7 fw-semibold text-muted">Software Engineer</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <img src="../../../public/assets/media/avatars/300-9.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Ana Clark</span>
                          <span class="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <img src="../../../public/assets/media/avatars/300-14.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Nick Pitola</span>
                          <span class="fs-7 fw-semibold text-muted">Art Director</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <img src="../../../public/assets/media/avatars/300-11.jpg" alt="" />
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Edward Kulnic</span>
                          <span class="fs-7 fw-semibold text-muted">System Administrator</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Category title-->
                      <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                      <!--end::Category title-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <img
                              class="w-20px h-20px"
                              src="../../../public/assets/media/svg/brand-logos/volicity-9.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Company Rbranding</span>
                          <span class="fs-7 fw-semibold text-muted">UI Design</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <img
                              class="w-20px h-20px"
                              src="../../../public/assets/media/svg/brand-logos/tvit.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Company Re-branding</span>
                          <span class="fs-7 fw-semibold text-muted">Web Development</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <img
                              class="w-20px h-20px"
                              src="../../../public/assets/media/svg/misc/infography.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Business Analytics App</span>
                          <span class="fs-7 fw-semibold text-muted">Administration</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <img
                              class="w-20px h-20px"
                              src="../../../public/assets/media/svg/brand-logos/leaf.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">EcoLeaf App Launch</span>
                          <span class="fs-7 fw-semibold text-muted">Marketing</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <img
                              class="w-20px h-20px"
                              src="../../../public/assets/media/svg/brand-logos/tower.svg"
                              alt=""
                            />
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column justify-content-start fw-semibold">
                          <span class="fs-6 fw-semibold">Tower Group Website</span>
                          <span class="fs-7 fw-semibold text-muted">Google Adwords</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Category title-->
                      <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                      <!--end::Category title-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-notepad fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                              <span class="path4"></span>
                              <span class="path5"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <span class="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                          <span class="fs-7 fw-semibold text-muted">#45670</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-frame fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                              <span class="path4"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <span class="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                          <span class="fs-7 fw-semibold text-muted">#45690</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-message-text-2 fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <span class="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                          <span class="fs-7 fw-semibold text-muted">#21090</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <a href="#" class="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-profile-circle fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <span class="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                          <span class="fs-7 fw-semibold text-muted">#34560</span>
                        </div>
                        <!--end::Title-->
                      </a>
                      <!--end::Item-->
                    </div>
                    <!--end::Items-->
                  </div>
                  <!--end::Recently viewed-->
                  <!--begin::Recently viewed-->
                  <div class="mb-5" data-kt-search-element="main">
                    <!--begin::Heading-->
                    <div class="d-flex flex-stack fw-semibold mb-4">
                      <!--begin::Label-->
                      <span class="text-muted fs-6 me-2">Recently Searched:</span>
                      <!--end::Label-->
                    </div>
                    <!--end::Heading-->
                    <!--begin::Items-->
                    <div class="scroll-y mh-200px mh-lg-325px">
                      <!--begin::Item-->
                      <div class="d-flex align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-laptop fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >BoomApp by Keenthemes</a
                          >
                          <span class="fs-7 text-muted fw-semibold">#45789</span>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->

                      <!--end::Item-->
                      <!--begin::Item-->

                      <!--end::Item-->
                      <!--begin::Item-->

                      <!--end::Item-->
                      <!--begin::Item-->

                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-bank fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                          <span class="fs-7 text-muted fw-semibold">#45690</span>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Item-->
                      <!--begin::Item-->
                      <div class="d-flex align-items-center mb-5">
                        <!--begin::Symbol-->
                        <div class="symbol symbol-40px me-4">
                          <span class="symbol-label bg-light">
                            <i class="ki-duotone ki-chart-line-down fs-2 text-primary">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                          </span>
                        </div>
                        <!--end::Symbol-->
                        <!--begin::Title-->
                        <div class="d-flex flex-column">
                          <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-semibold"
                            >"Landing UI Design" Launch</a
                          >
                          <span class="fs-7 text-muted fw-semibold">#24005</span>
                        </div>
                        <!--end::Title-->
                      </div>
                      <!--end::Item-->
                    </div>
                    <!--end::Items-->
                  </div>
                  <!--end::Recently viewed-->
                  <!--begin::Empty-->
                  <div data-kt-search-element="empty" class="text-center d-none">
                    <!--begin::Icon-->
                    <div class="pt-10 pb-10">
                      <i class="ki-duotone ki-search-list fs-4x opacity-50">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                      </i>
                    </div>
                    <!--end::Icon-->
                    <!--begin::Message-->
                    <div class="pb-15 fw-semibold">
                      <h3 class="text-gray-600 fs-5 mb-2">No result found</h3>
                      <div class="text-muted fs-7">Please try again with a different query</div>
                    </div>
                    <!--end::Message-->
                  </div>
                  <!--end::Empty-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Preferences-->

                <!--end::Preferences-->
                <!--begin::Preferences-->

                <!--end::Preferences-->
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Search-->
          </div>
          <!--end::Search-->
          <!--begin::Activities-->

          <!--end::Activities-->
          <!--begin::Notifications-->

          <!--end::Notifications-->
          <!--begin::Chat-->
          <div class="app-navbar-item ms-1 ms-md-4">
            <!--begin::Menu wrapper-->
            <div
              class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative"
              id="kt_drawer_chat_toggle"
            >
              <i class="ki-duotone ki-message-text-2 fs-2">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
              </i>
              <span
                class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
              ></span>
            </div>
            <!--end::Menu wrapper-->
          </div>
          <!--end::Chat-->
          <!--begin::My apps links-->

          <!--end::My apps links-->
          <!--begin::Theme mode-->
          <div class="app-navbar-item ms-1 ms-md-4">
            <!--begin::Menu toggle-->
            <a
              href="#"
              class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px"
              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <i class="ki-duotone ki-night-day theme-light-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                <span class="path5"></span>
                <span class="path6"></span>
                <span class="path7"></span>
                <span class="path8"></span>
                <span class="path9"></span>
                <span class="path10"></span>
              </i>
              <i class="ki-duotone ki-moon theme-dark-show fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </a>
            <!--begin::Menu toggle-->
            <!--begin::Menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
              data-kt-menu="true"
              data-kt-element="theme-mode-menu"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-night-day fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                      <span class="path5"></span>
                      <span class="path6"></span>
                      <span class="path7"></span>
                      <span class="path8"></span>
                      <span class="path9"></span>
                      <span class="path10"></span>
                    </i>
                  </span>
                  <span class="menu-title">Light</span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-moon fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                  </span>
                  <span class="menu-title">Dark</span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a href="#" class="menu-link px-3 py-2 active" data-kt-element="mode" data-kt-value="system">
                  <span class="menu-icon" data-kt-element="icon">
                    <i class="ki-duotone ki-screen fs-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                      <span class="path4"></span>
                    </i>
                  </span>
                  <span class="menu-title">System</span>
                </a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Theme mode-->
          <!--begin::User menu-->
          <div class="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div
              class="cursor-pointer symbol symbol-35px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <img src="../../../public/assets/media/avatars/300-3.jpg" class="rounded-3" alt="user" />
            </div>
            <!--begin::User account menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
              style=""
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="../../../public/assets/media/avatars/300-3.jpg" />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-5">
                      Robert Fox <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                    </div>
                    <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">robert@kt.com</a>
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="account/overview.html" class="menu-link px-5">My Profile</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="apps/projects/list.html" class="menu-link px-5">
                  <span class="menu-text">My Projects</span>
                  <span class="menu-badge">
                    <span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                  </span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div
                class="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" class="menu-link px-5">
                  <span class="menu-title">My Subscription</span>
                  <span class="menu-arrow"></span>
                </a>
                <!--begin::Menu sub-->
                <div class="menu-sub menu-sub-dropdown w-175px py-4" style="">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/referrals.html" class="menu-link px-5">Referrals</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/billing.html" class="menu-link px-5">Billing</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/statements.html" class="menu-link px-5">Payments</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/statements.html" class="menu-link d-flex flex-stack px-5"
                      >Statements
                      <span
                        class="ms-2 lh-0"
                        data-bs-toggle="tooltip"
                        aria-label="View your statements"
                        data-bs-original-title="View your statements"
                        data-kt-initialized="1"
                      >
                        <i class="ki-duotone ki-information-5 fs-5">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i> </span
                    ></a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu separator-->
                  <div class="separator my-2"></div>
                  <!--end::Menu separator-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <div class="menu-content px-3">
                      <label class="form-check form-switch form-check-custom form-check-solid">
                        <input
                          class="form-check-input w-30px h-20px"
                          type="checkbox"
                          value="1"
                          checked="checked"
                          name="notifications"
                        />
                        <span class="form-check-label text-muted fs-7">Notifications</span>
                      </label>
                    </div>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu sub-->
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="account/statements.html" class="menu-link px-5">My Statements</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div
                class="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative"
                    >Mode
                    <span class="ms-5 position-absolute translate-middle-y top-50 end-0">
                      <i class="ki-duotone ki-night-day theme-light-show fs-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                        <span class="path5"></span>
                        <span class="path6"></span>
                        <span class="path7"></span>
                        <span class="path8"></span>
                        <span class="path9"></span>
                        <span class="path10"></span>
                      </i>
                      <i class="ki-duotone ki-moon theme-dark-show fs-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                      </i> </span
                  ></span>
                </a>
                <!--begin::Menu-->
                <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                  data-kt-menu="true"
                  data-kt-element="theme-mode-menu"
                  style=""
                >
                  <!--begin::Menu item-->
                  <div class="menu-item px-3 my-0">
                    <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                      <span class="menu-icon" data-kt-element="icon">
                        <i class="ki-duotone ki-night-day fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                          <span class="path4"></span>
                          <span class="path5"></span>
                          <span class="path6"></span>
                          <span class="path7"></span>
                          <span class="path8"></span>
                          <span class="path9"></span>
                          <span class="path10"></span>
                        </i>
                      </span>
                      <span class="menu-title">Light</span>
                    </a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3 my-0">
                    <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                      <span class="menu-icon" data-kt-element="icon">
                        <i class="ki-duotone ki-moon fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                      </span>
                      <span class="menu-title">Dark</span>
                    </a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3 my-0">
                    <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                      <span class="menu-icon" data-kt-element="icon">
                        <i class="ki-duotone ki-screen fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                          <span class="path4"></span>
                        </i>
                      </span>
                      <span class="menu-title">System</span>
                    </a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div
                class="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" class="menu-link px-5">
                  <span class="menu-title position-relative"
                    >Language
                    <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0"
                      >English
                      <img
                        class="w-15px h-15px rounded-1 ms-2"
                        src="../../../public/assets/media/flags/united-states.svg"
                        alt="" /></span
                  ></span>
                </a>
                <!--begin::Menu sub-->
                <div class="menu-sub menu-sub-dropdown w-175px py-4" style="">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5 active">
                      <span class="symbol symbol-20px me-4">
                        <img
                          class="rounded-1"
                          src="../../../public/assets/media/flags/united-states.svg"
                          alt=""
                        /> </span
                      >English</a
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/spain.svg" alt="" /> </span
                      >Spanish</a
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/germany.svg" alt="" /> </span
                      >German</a
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/japan.svg" alt="" /> </span
                      >Japanese</a
                    >
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="account/settings.html" class="menu-link d-flex px-5">
                      <span class="symbol symbol-20px me-4">
                        <img class="rounded-1" src="../../../public/assets/media/flags/france.svg" alt="" /> </span
                      >French</a
                    >
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu sub-->
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5 my-1">
                <a href="account/settings.html" class="menu-link px-5">Account Settings</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5">Sign Out</a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->
          <!--begin::Header menu toggle-->
          <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
            <div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
              <i class="ki-duotone ki-element-4 fs-1">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
            </div>
          </div>
          <!--end::Header menu toggle-->
          <!--begin::Aside toggle-->
          <!--end::Header menu toggle-->
        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
</template>
