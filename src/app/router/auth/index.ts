import { RouteRecordRaw } from "vue-router";

const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Auth/index.vue"),
    meta: {
      title: "Auth",
    },
  },
];

export { AuthRoutes };
