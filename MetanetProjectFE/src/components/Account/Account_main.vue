<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <div class="d-flex flex-column flex-column-fluid">
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
          <Account_ToolBar :toolbarData="toolbarData" @changeComponent="changeComponent" />     
          <Account_myStudy :myStudyData="myStudyData" v-if="currentComponent === 'myStudy'" />          
          <Account_myStudyList :myStudyListData="myStudyListData" v-if="currentComponent === 'myStudyList'" /> 
          <Account_paylist :payListData="payListData" v-if="currentComponent === 'payList'" />
          <Account_revenue v-if="currentComponent === 'revenue'" />  
          <Account_lecture :myLectureData="myLectureData" v-if="currentComponent === 'myLecture'" />                           
          <Account_editprofile :editListData="editListData" v-if="currentComponent === 'editProfile'" />       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // ✅ axios import 추가
import Account_ToolBar from "./Account_ToolBar.vue";
import Account_myStudy from "./Account_myStudy.vue";
import Account_lecture from "./Account_lecture.vue";
import Account_paylist from "./Account_paylist.vue";
import Account_revenue from "./Account_revenue.vue";
import Account_myStudyList from "./Account_myStudyList.vue";
import Account_editprofile from "./Account_editprofile.vue"; // ✅ 오타 수정

export default {
  name: "Account_main",
  components: {
    Account_ToolBar,
    Account_myStudy,
    Account_lecture,
    Account_paylist,
    Account_revenue,
    Account_myStudyList,
    Account_editprofile
  },
  data() {
    return {
      currentComponent: 'myStudy', // 초기 컴포넌트 설정
      toolbarData: {}, 
      myStudyData:{},
      myStudyListData: {},
      payListData: [], 
      myLectureData:{},
      editListData: {}
    };
  },
  methods: {
    async fetchToolData() {
      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/Toolbarmember", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        this.toolbarData = { ...response.data.data };
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
    }
  },

  created() {
    this.fetchToolData();
    this.fetchMyStudyData();
    this.fetchLectureData();
    this.fetchPayListData();
    this.fetchMystudyListData();
    this.fetchAccountData()
  },
};
</script>
