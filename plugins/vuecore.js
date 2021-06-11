export default {
  install(Vue) {
    // 1. add global method or property. Usage: Vue.VERSION, Vue.myGlobalMethod
    // Vue.VERSION = "^2.6.12";

    // Vue.myGlobalMethod = function() {
    //   // some logic ...
    //   console.log("my global method");
    // };

    // add a global asset. Usage: v-my-directive
    // Vue.directive("my-directive", {});

    // inject some component options
    // Vue.mixin({
    //   created() {}
    // });

    // add an instance method. Usage in component: this.$myMethod()
    // Vue.prototype.$myMethod = function() {
    //   return "My method";
    // };

    // Vue.prototype.$italicHTML = function(text) {
    //   return "<i>" + text + "</i>";
    // };

    // add an component. Usage in component: <hello-world></hello-world>
    const Button = () => import("./components/Button.vue");
    Vue.component("vc-button", Button);

    const Accordion = () => import("./components/Accordion.vue");
    const AccordionItem = () => import("./components/AccordionItem.vue");
    Vue.component("vc-accordion", Accordion);
    Vue.component("vc-accordion-item", AccordionItem);
  }
};

const Button = {
  install(Vue) {
    const Button = () => import("./components/Button.vue");
    Vue.component("vc-button", Button);
  }
};

const Accordion = {
  install(Vue) {
    const Accordion = () => import("./components/Accordion.vue");
    Vue.component("vc-accordion", Accordion);
  }
};

const AccordionItem = {
  install(Vue) {
    const AccordionItem = () => import("./components/AccordionItem.vue");
    Vue.component("vc-accordion-item", AccordionItem);
  }
};

export { Button, Accordion, AccordionItem };
