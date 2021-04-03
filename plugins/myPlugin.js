import HelloWorld from '../src/HelloWorld.vue'

export default {
  install(Vue, options) {
    // 1. add global method or property. Usage: Vue.VERSION, Vue.myGlobalMethod
    Vue.VERSION = '^2.6.12'
    
    Vue.myGlobalMethod = function () {
      // some logic ...
      console.log('my global method')
    }

    // add a global asset. Usage: v-my-directive
    Vue.directive('my-directive', {})

    // inject some component options
    Vue.mixin({
      created() {
        console.log(this)
      }
    })

    // add an instance method. Usage in component: this.$myMethod()
    Vue.prototype.$myMethod = function(methodOptions) {
      return 'My method'
    }

    Vue.prototype.$italicHTML = function(text) {
      return '<i>' + text + '</i>'
    }


    // add an component. Usage in component: <hello-world></hello-world>
    Vue.component('hello-world', HelloWorld)
  }
}