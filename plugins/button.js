export default {
  install(Vue) {
    const Button = () => import("./components/Button.vue");
    Vue.component("vc-button", Button);
  }
};
