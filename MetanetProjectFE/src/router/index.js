import { createRouter, createWebHistory } from "vue-router";

import Signup from "../components/Signup.vue";
import Account_main from "../components/Account/Account_main.vue";

const routes = [
  { path: "/", component: Signup },
  { path: "/account", component: Account_main },
  { path: "/signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
