import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView, // host Page
  },
  {
    path: "/comm-page",
    name: "comm-page",
    component: () => import("common/CommPage.vue"), // Module-Federation Page
  },
  {
    path: "/composable",
    name: "composable",
    component: () => import("@/views/examples/ComposableExample.vue"), // composableExample
  },
  {
    path: "/build-integration",
    name: "build-integration",
    component: () => import("@/views/examples/BuildTimeIntegrationExample.vue"), // BuildTimeIntegrationExample
  },
  {
    path: "/store",
    name: "store",
    component: import(/* webpackChunkName: "piniaStore" */ "@/views/examples/PiniaStoreExample.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
