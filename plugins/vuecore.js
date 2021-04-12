export default {
  install(Vue) {
    // 1. add global method or property. Usage: Vue.VERSION, Vue.myGlobalMethod
    Vue.VERSION = "^2.6.12";

    Vue.myGlobalMethod = function() {
      // some logic ...
      console.log("my global method");
    };

    // add a global asset. Usage: v-my-directive
    Vue.directive("my-directive", {});

    // inject some component options
    Vue.mixin({
      created() {}
    });

    // add an instance method. Usage in component: this.$myMethod()
    Vue.prototype.$myMethod = function() {
      return "My method";
    };

    Vue.prototype.$italicHTML = function(text) {
      return "<i>" + text + "</i>";
    };

    // add an component. Usage in component: <hello-world></hello-world>
    const Button = () => import("./components/Button.vue");
    Vue.component("vc-button", Button);
  }
};

export const Button = () =>
  import(/* webpackExports './button.js' */ "./button.js");
