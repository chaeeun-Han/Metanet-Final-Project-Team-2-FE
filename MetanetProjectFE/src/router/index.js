import { createRouter, createWebHistory } from "vue-router";
import Main_main from "../components/main/main_main.vue";
import Account_main from "../components/Account/Account_main.vue";
import Signup from "../components/Signup.vue";
import Login_main from "../components/login/Login_main.vue";
import Lecture_content from "../components/lecture/Lecture_content.vue";

import Lecture_QnA from "../components/lecture/lecture-inner/Lecture_QnA.vue";
import Lecture_file from "../components/lecture/lecture-inner/Lecture_file.vue";
import Lecture_Intro from "../components/lecture/lecture-inner/Lecture_Intro.vue";

const routes = [
  { path: "/", component: Main_main },
  { path: "/account", component: Account_main },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login_main },
  {
    path: "/lecture/:lectureId",
    component: Lecture_content,
    children: [
      {
        path: "",
        component: Lecture_Intro,
        props: true,
      },
      { path: "QNA", component: Lecture_QnA },
      { path: "file", component: Lecture_file },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
