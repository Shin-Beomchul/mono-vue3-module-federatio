import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/comm-page",
    name: "comm-page",
    component: () => import("common/CommPage.vue"), // Module-Federation Page
  },
  {
    path: "/composable",
    name: "composable",
    component: () => import("@/views/Composable.vue"), // composable Example
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
