import { createRouter, createWebHistory } from "vue-router";

import Signup from "../components/Signup.vue";
import Account_main from "../components/Account/Account_main.vue";
import Login_main from "../components/login/Login_main.vue";
import QnaList from "../components/qna/QnaList.vue";
import QuestionDetail from "../components/qna/QuestionDetail.vue";

const routes = [
  { path: "/", component: Signup },
  { path: "/account", component: Account_main },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login_main },
  { path: "/questions", component: QnaList },
  { path: "/questions/:questionId", component: QuestionDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
