import Vue from "vue";
import App from "./App.vue";
import vuecore from "./plugins/vuecore.js";
//import { Button } from './plugins/vuecore.js'
import router from "./router.js";
import "./sass/main.sass";

Vue.config.productionTip = false;

Vue.use(vuecore);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
