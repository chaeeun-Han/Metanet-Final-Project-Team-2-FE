<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
      <Account_ToolBar @changeComponent="changeComponent" />
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
          <Account_myStudy v-if="currentComponent === 'myStudy'" />
          <Account_lecture v-if="currentComponent === 'myLecture'" />       
          <Account_paylist v-if="currentComponent === 'payList'" />
          <Account_myStudyList v-if="currentComponent === 'myStudyList'" />       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Account_ToolBar from "./Account_ToolBar.vue";
import Account_myStudy from "./Account_mystudy.vue";
import Account_lecture from "./Account_lecture.vue";
import Account_paylist from "./Account_paylist.vue";
import Account_myStudyList from "./Account_mystudylist.vue";
export default {
  name: "Account_main",
  components: {
    Account_ToolBar,
    Account_myStudy,
    Account_lecture,
    Account_paylist,
    Account_myStudyList
  },
  data() {
    return {
      currentComponent: 'myStudy', // 초기 컴포넌트 설정
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>
