import Vue from 'vue';
import VueRouter from 'vue-router';

import app from './App.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/App'
}]

var router = new VueRouter({
  routes
});

export default router
