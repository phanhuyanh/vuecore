import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugins/myPlugin.js'
import './sass/main.sass'

Vue.use(myPlugin, {}) // options

new Vue({
  render: h => h(App)
}).$mount('#app')
