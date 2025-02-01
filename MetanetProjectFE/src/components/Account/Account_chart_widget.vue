<template>
  <div class="row gy-5 g-xl-10">
    <!--begin::Col-->
    <div class="col-xl-8 mb-xl-10">
      <!--begin::Chart widget 5-->
      <div class="card card-flush h-lg-100">
        <!--begin::Header-->
        <div class="card-header flex-nowrap pt-5">
          <!--begin::Title-->
          <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bold text-gray-900">{{ title }}</span>
            <span class="text-gray-500 pt-2 fw-semibold fs-6">{{ subtitle }}</span>
          </h3>
          <!--end::Title-->
          <!--begin::Toolbar-->
          <div class="card-toolbar">
            <!--begin::Menu-->
            <button
              class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-overflow="true"
            >
              <i class="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
              </i>
            </button>
            <!--begin::Menu 2-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator mb-3 opacity-75"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">New Ticket</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">New Customer</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                <!--begin::Menu item-->
                <a href="#" class="menu-link px-3">
                  <span class="menu-title">New Group</span>
                  <span class="menu-arrow"></span>
                </a>
                <!--end::Menu item-->
                <!--begin::Menu sub-->
                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3">Admin Group</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3">Staff Group</a>
                  </div>
                  <!--end::Menu item-->
                  <!--begin::Menu item-->
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link px-3">Member Group</a>
                  </div>
                  <!--end::Menu item-->
                </div>
                <!--end::Menu sub-->
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <a href="#" class="menu-link px-3">New Contact</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator mt-3 opacity-75"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content px-3 py-3">
                  <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                </div>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu 2-->
            <!--end::Menu-->
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body pt-5 ps-6">
          <div id="kt_charts_widget_5" class="min-h-auto" style="min-height: 365px">
            <div id="apexchartsaj0mdmgi" class="apexcharts-canvas apexchartsaj0mdmgi apexcharts-theme-light" style="width: 779px; height: 350px" />
          </div>
        </div>
        <!--end::Body-->
      </div>
      <!--end::Chart widget 5-->
    </div>
    <!--end::Col-->
    <!--begin::Col-->
    <div class="col-xl-4 mb-5 mb-xl-10">
      <!--begin::Engage widget 1-->
      <div class="card h-md-100" dir="ltr">
        <!--begin::Body-->
        <div class="card-body d-flex flex-column flex-center">
          <!--begin::Heading-->
          <div class="mb-2">
            <!--begin::Title-->
            <h1 class="fw-semibold text-gray-800 text-center lh-lg">Have you tried <br />new <span class="fw-bolder">Mobile Application ?</span></h1>
            <!--end::Title-->
            <!--begin::Illustration-->
            <div class="py-10 text-center">
              <img src="../../../public/assets/media/svg/illustrations/easy/1.svg" class="theme-light-show w-200px" alt="" />
              <img src="../../../public/assets/media/svg/illustrations/easy/1-dark.svg" class="theme-dark-show w-200px" alt="" />
            </div>
            <!--end::Illustration-->
          </div>
          <!--end::Heading-->
          <!--begin::Links-->
          <div class="text-center mb-1">
            <!--begin::Link-->
            <a class="btn btn-sm btn-primary me-2" data-bs-target="#kt_modal_create_app" data-bs-toggle="modal">Try now</a>
            <!--end::Link-->
            <!--begin::Link-->
            <a class="btn btn-sm btn-light" href="apps/invoices/view/invoice-1.html">Learn more</a>
            <!--end::Link-->
          </div>
          <!--end::Links-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Engage widget 1-->
    </div>
    <!--end::Col-->
  </div>
</template>

<script>
export default {
  name: "Account_chart_widget",
  props: {
    title: {
      type: String,
      default: "Top Selling Categories", // 기본값
    },
    subtitle: {
      type: String,
      default: "8k social visitors", // 기본값값
    },
    chartData: {
      type: Array,
      default: () => [15, 12, 10, 8, 7, 4, 3], // 기본값
    },
    categories: {
      type: Array,
      default: () => ["Phones", "Laptops", "Headsets", "Games", "Keyboards", "Monitors", "Speakers"], // 기본값
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const options = {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        series: [
          {
            name: "Sales",
            data: this.chartData, // props로 받은 데이터 사용
          },
        ],
        xaxis: {
          categories: this.categories, // props로 받은 데이터 사용
        },
        tooltip: {
          enabled: true,
          theme: "light",
        },
      };

      const chart = new ApexCharts(document.querySelector("#apexchartsaj0mdmgi"), options);
      chart.render();
    },
  },
};
</script>
