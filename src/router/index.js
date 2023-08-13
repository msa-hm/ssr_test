import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },

  {
    path: "/api/ff",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/apiship/ff",
    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/About",
    component: () => import("../views/AboutView.vue"),
  },
];

export const createRouter = () =>
  _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory("/")
      : createWebHistory("/"),
    routes,
  });
