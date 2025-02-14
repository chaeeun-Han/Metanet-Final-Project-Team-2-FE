<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
          <Account_ToolBar :toolbarData="toolbarData" @changeComponent="changeComponent" />
          <Account_mystudy :myStudyData="myStudyData" v-if="currentComponent === 'myStudy'" />
          <Account_mystudylist :myStudyListData="myStudyListData" v-if="currentComponent === 'myStudyList'" />
          <Account_paylist :payListData="payListData" v-if="currentComponent === 'payList'" />
          <Account_revenue v-if="currentComponent === 'revenue'" />
          <Account_lecture :myLectureData="myLectureData" v-if="currentComponent === 'myLecture'" />
          <Account_editprofile :editListData="editListData" v-if="currentComponent === 'editProfile'" />
          <Account_viemember :viewMemberData="viewMemberData" v-if="currentComponent === 'viewMember'" />
          <Account_viewlecture :viewLectureData="viewLectureData" v-if="currentComponent === 'viewLecture'" />
          <Account_adminDashboard :adminData="adminData" v-if="currentComponent === 'adminDashboard'" />
          <Account_input_lecture v-if="currentComponent === 'registerLecture'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Account_ToolBar from "./Account_ToolBar.vue";
import Account_lecture from "./Account_lecture.vue";
import Account_paylist from "./Account_paylist.vue";
import Account_revenue from "./Account_revenue.vue";
import Account_mystudy from "./Account_mystudy.vue";
import Account_mystudylist from "./Account_myStudyList.vue";
import Account_editprofile from "./Account_editprofile.vue";
import Account_viemember from "./Account_viewmember.vue";
import Account_viewlecture from "./Account_viewlecture.vue";
import Account_adminDashboard from "./Account_adminDashboard.vue";
import Account_input_lecture from "./Account_input_lecture.vue";

export default {
  name: "Account_main",
  components: {
    Account_ToolBar,
    Account_mystudy,
    Account_lecture,
    Account_paylist,
    Account_revenue,
    Account_mystudylist,
    Account_editprofile,
    Account_viemember,
    Account_viewlecture,
    Account_adminDashboard,
    Account_input_lecture,
  },
  data() {
    return {
      currentComponent: "myStudy", // 초기 컴포넌트 설정
      toolbarData: {},
      myStudyData: {},
      myStudyListData: {},
      payListData: [],
      myLectureData: {},
      editListData: {},
      viewMemberData: [],
      viewLectureData: [],
      adminData: {},
    };
  },
  methods: {
    async fetchToolData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/toolbarmember", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.toolbarData = { ...response.data.data };
        const userRole = this.toolbarData?.member?.role;
        if(userRole ==='Admin'){
          this.fetchviewMemberData();
          this.fetchviewLectureData();
          this.fetchadminDashboard();
          this.fetchLectureData();
          this.fetchAccountData();        
        }else if(userRole ==='Teacher'){
          this.fetchLectureData();
          this.fetchAccountData();          
        }

        this.fetchMyStudyData();
        this.fetchMystudyListData();
        this.fetchPayListData();
      
      } catch (error) {
        console.error("Failed to fetch toolbar data:", error.response?.data || error.message);
      }
    },
    async fetchMyStudyData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/account/my-study", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.myStudyData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch my study data:", error.response?.data || error.message);
      }
    },
    async fetchMystudyListData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/account/lecture", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.myStudyListData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch study list data:", error.response?.data || error.message);
      }
    },
    async fetchPayListData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/account/pay-log", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.payListData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch study list data:", error.response?.data || error.message);
      }
    },
    async fetchLectureData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/account/teacher-lecture", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.myLectureData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch lecture data:", error.response?.data || error.message);
      }
    },
    async fetchAccountData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/account", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.editListData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch lecture data:", error.response?.data || error.message);
      }
    },
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
    async fetchviewMemberData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/admin/accounts", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.viewMemberData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch lecture data:", error.response?.data || error.message);
      }
    },
    async fetchviewLectureData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/admin/lectures", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.viewLectureData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch lecture data:", error.response?.data || error.message);
      }
    },
    async fetchadminDashboard() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.adminData = response.data.data;
      } catch (error) {
        console.error("Failed to fetch lecture data:", error.response?.data || error.message);
      }
    },
  },

  created() {
    this.fetchToolData();
    this.fetchAccountData();
  },
};
</script>