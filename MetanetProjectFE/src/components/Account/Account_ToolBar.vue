<template>
  <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
      <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Account Overview</h1>
        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
          <li class="breadcrumb-item text-muted"><a href="index.html" class="text-muted text-hover-primary">Home</a></li>
          <li class="breadcrumb-item"><span class="bullet bg-gray-500 w-5px h-2px"></span></li>
          <li class="breadcrumb-item text-muted">Account</li>
        </ul>
      </div>
      <div class="d-flex align-items-center gap-2 gap-lg-3">
        <div class="m-0">
          <a href="#" class="btn btn-sm btn-flex btn-secondary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"
            ><i class="ki-duotone ki-filter fs-6 text-muted me-1"><span class="path1"></span><span class="path2"></span></i>Filter</a
          >
          <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_65a1214c95399">
            <div class="px-7 py-5"><div class="fs-5 text-gray-900 fw-bold">Filter Options</div></div>
            <div class="separator border-gray-200"></div>
            <div class="px-7 py-5">
              <div class="mb-10">
                <label class="form-label fw-semibold">Status:</label>
                <div>
                  <select
                    multiple=""
                    class="form-select form-select-solid select2-hidden-accessible"
                    data-kt-select2="true"
                    data-close-on-select="false"
                    data-placeholder="Select option"
                    data-dropdown-parent="#kt_menu_65a1214c95399"
                    data-allow-clear="true"
                    data-select2-id="select2-data-7-udry"
                    tabindex="-1"
                    aria-hidden="true"
                    data-kt-initialized="1"
                  >
                    <option></option>
                    <option value="1">Approved</option>
                    <option value="2">Pending</option>
                    <option value="2">In Process</option>
                    <option value="2">Rejected</option></select
                  ><span
                    class="select2 select2-container select2-container--bootstrap5"
                    dir="ltr"
                    data-select2-id="select2-data-8-5a0u"
                    style="width: 100%"
                    ><span class="selection"
                      ><span
                        class="select2-selection select2-selection--multiple form-select form-select-solid"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="-1"
                        aria-disabled="false"
                        ><ul class="select2-selection__rendered" id="select2-q48f-container"></ul>
                        <span class="select2-search select2-search--inline">
                          <textarea
                            class="select2-search__field"
                            type="search"
                            tabindex="0"
                            autocorrect="off"
                            autocapitalize="none"
                            spellcheck="false"
                            role="searchbox"
                            aria-autocomplete="list"
                            autocomplete="off"
                            aria-label="Search"
                            aria-describedby="select2-q48f-container"
                            placeholder="Select option"
                            style="width: 100%"
                          ></textarea></span></span></span
                    ><span class="dropdown-wrapper" aria-hidden="true"></span
                  ></span>
                </div>
              </div>
              <div class="mb-10">
                <label class="form-label fw-semibold">Member Type:</label>
                <div class="d-flex">
                  <label class="form-check form-check-sm form-check-custom form-check-solid me-5"
                    ><input class="form-check-input" type="checkbox" value="1" /><span class="form-check-label">Author</span></label
                  ><label class="form-check form-check-sm form-check-custom form-check-solid"
                    ><input class="form-check-input" type="checkbox" checked="" value="2" /><span class="form-check-label">Customer</span></label
                  >
                </div>
              </div>
              <div class="mb-10">
                <label class="form-label fw-semibold">Notifications:</label>
                <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                  <input class="form-check-input" type="checkbox" name="notifications" checked="" value="" /><label class="form-check-label"
                    >Enabled</label
                  >
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button
                ><button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
      </div>
    </div>
  </div>
</template>
