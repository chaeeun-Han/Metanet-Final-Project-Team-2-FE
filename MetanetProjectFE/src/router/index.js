import { createRouter, createWebHistory } from "vue-router";
import Main_main from "../components/main/main_main.vue";
import Account_main from "../components/Account/Account_main.vue";
import Signup from "../components/Signup.vue";
import Login_main from "../components/login/Login_main.vue";
import QuestionDetail from "../components/qna/QuestionDetail.vue";
import Lecture_content from "../components/lecture/Lecture_content.vue";
import QuestionWrite from "../components/qna/QuestionWrite.vue";
import Lecture_QnA from "../components/lecture/lecture-inner/Lecture_qna.vue";
import Lecture_file from "../components/lecture/lecture-inner/Lecture_file.vue";
import Lecture_intro from "../components/lecture/lecture-inner/Lecture_intro.vue";

import Password_confirm from "../components/password-reset/Password_confirm.vue";
import Password_reset from "../components/password-reset/Password_reset.vue";

const routes = [
  { path: "/", component: Main_main },
  { path: "/account", component: Account_main },
  { path: "/signup", component: Signup },
  { path: "/password/reset", component:  Password_reset, name: "passwordReset"},
  { path: "/password/confirm", component:  Password_confirm, name: "passwordConfirm"},
  { path: "/login", component: Login_main },
  { path: "/lectures/:lectureId/questions/:questionId", component: QuestionDetail },
  { path: "/lectures/:lectureId/questions/write", component: QuestionWrite },

  {
    path: "/lectures/:lectureId",
    component: Lecture_content,
    children: [
      {
        path: "",
        component: Lecture_intro,
        props: true,
      },
      { path: "questions", component: Lecture_QnA },
      { path: "file", component: Lecture_file },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
