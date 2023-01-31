import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ConverterView from "../views/ConverterView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/converter",
      name: "converter",
      component: () => import("../views/ConverterView.vue"),
    },
  ],
});

export default router;
