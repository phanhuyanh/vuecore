import Vue from "vue";
import App from "./App.vue";
import vuecoreA from "./plugins/vuecore.js";
import "./sass/main.sass";

Vue.use(vuecoreA, {}); // options

new Vue({
  render: h => h(App)
}).$mount("#app");
