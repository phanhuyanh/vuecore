import Vue from "vue";
import App from "./App.vue";
import vuecore from "./plugins/vuecore.js";
import "./sass/main.sass";

Vue.config.productionTip = false;

Vue.use(vuecore);

new Vue({
  render: h => h(App)
}).$mount("#app");
