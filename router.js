import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("./doc/Home.vue");
const Documents = () => import("./doc/Documents.vue");
const DocButton = () => import("./doc/DocButton.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/docs",
    name: "documents",
    component: Documents,
    children: [
      {
        path: "button",
        name: "button",
        component: DocButton
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
