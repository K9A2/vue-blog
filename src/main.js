import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import router from './router'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
