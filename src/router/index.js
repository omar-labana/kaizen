import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/editor",
    name: "Editor",
    component: () =>
      import("../views/Editor.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/canoal",
    name: "Canoal",
    component: () => import("../views/Canoal.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
