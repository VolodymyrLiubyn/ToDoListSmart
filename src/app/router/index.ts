import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import { AuthRoutes } from "./auth/index";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/index.vue"),
    meta: {
      title: "Home - Vue 3 Starter",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound/index.vue"),
    meta: {
      title: "404 - Сторінку не знайдено",
    },
  },

  ...AuthRoutes,
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL || "/"),
  routes,
});

export default router;
