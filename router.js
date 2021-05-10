import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("./doc/Home.vue");
const Documents = () => import("./doc/Documents.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/docs",
    name: "documents",
    component: Documents
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
