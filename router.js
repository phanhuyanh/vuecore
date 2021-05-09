import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("./doc/Home.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
