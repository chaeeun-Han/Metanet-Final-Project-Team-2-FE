<template>
<div class="container">
    <div class="question">
        <div class="top">
            <div class="top-left">
                <div class="me-9 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9AA2B8">
                        <path d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2ZM4 20C4 16.134 7.13401 13 11 13H13C16.866 13 20 16.134 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20Z"/>
                    </svg>
                    <span class="fw-bold text-gray-500">{{ response.memberId }}</span>
                </div>
                <div class="me-9 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9AA2B8">
                        <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V15C20 16.1046 19.1046 17 18 17H6C4.89543 17 4 16.1046 4 15V5ZM2 19C2 18.4477 2.44772 18 3 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19Z"/>
                    </svg>
                    <span class="fw-bold text-gray-500">{{ response.lectureTitle }}</span>
                </div>
                <div class="my-1">
                    <span class="fw-bold text-gray-500">{{ formattedDate }}</span>
                </div>
            </div>
            <div class="top-right" v-if="isOwner">
                <div class="text-button">수정</div>
                <div class="text-button">삭제</div>
            </div>
        </div>
        <p class="question-title">{{ response.questionTitle }}</p>
        <div class="space-top"></div>
        <div v-for="(image, index) in response.images" :key="index" class="img-container">
            <img src="../../../public/assets/media/profile.png"/>
        </div>
        <p class="question-content">{{ response.questionContent }}</p>
        <div class="answer-top">답변</div>
            <div v-for="(answer, index) in response.answerDetails" :key="index" class="answer">
                <img class="profile" v-if="answer.profile" :src="answer.profile">
                <img class="profile" v-else src="../../../public/assets/media/profile.png">
                <div class="answer-content">
                    <p>{{ answer.content }}</p>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default {
  data() {
    return {
        response: {
        questionId: "",
        memberId: "",
        lectureTitle: "",
        questionTitle: "",
        questionContent: "",
        questionDate: "",
        images: [],
        answerDetails: [],
        },
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.response.questionDate);
      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\./g, "");
    },
    isWriter() {
        const token = localStorage.getItem("accessToken");
        if (!token) return false;

        try {
            const decoded = jwtDecode(token);
            return decoded.sub === this.response.memberId;
        } catch (error) {
            console.error("Invalid JWT Token:", error);
            return false;
        }
    },
  },
  methods: {
    async fetchQuestionDetail() {
        try {
            const questionId = this.$route.params.questionId;
            console.log(questionId);
            const response = await axios.get(`http://localhost:8080/lectures/40/questions/${questionId}`);
            
            this.response = response.data.data;
            console.log("Fetched question detail:", this.response);
        } catch (error) {
            console.error("Failed to fetch question details:", error);
        }
    },
    getEmailFromToken(token) {
        try {
            const decoded = jwtDecode(token);
            return decoded.email || null;
        } catch (error) {
            console.error("Invalid Token:", error);
            return null;
        }
    }
  },
  mounted() {
    this.fetchQuestionDetail();
  },
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
.container {
    text-align: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
}
.question {
    text-align: center;
    margin: 30px auto;
    width: 100%;
    max-width: 1000px;
    padding: 40px 15px;
    border: 2px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 2%;
}
.top {
    display: flex;
    min-height: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
}
.icon {
    margin-right: 0px;
}
.top-right {
    display: flex;
    text-align: right;
    font-size: 13px;
    gap: 10px;
}
.top-left {
    text-align: initial;
    display: flex;
}
.text-button {
    cursor: pointer;
    text-decoration: underline;
}
.space-top {
    margin-top: 20px;
}
.question-content {
    margin-top: 15px;
    font-size: 14px;
    text-align: initial;
}
.img-container {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 16px;
    overflow: hidden;
    border-radius: 8px;
}
.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
.answer-top {
    text-align: initial;
    font-size: 17px;
    font-weight: 600;
    margin-top: 30px;
}
.question-title {
    font-size: 17px;
    font-weight: 600;
}
.answer {
    width: 100%;
    justify-content: space-between;
    display: flex;
}
.profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}
.answer-content {

}

@media (max-width: 600px) {
    .container {
        width: 100%;
        max-width: 100%;
        padding: 0 10px;
    }
}
@media (max-width: 600px) {
    .profile {
        width: 40px;
        height: 40px;
    }
}
</style>