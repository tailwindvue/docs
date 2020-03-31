import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/headings',
    name: 'Headings',
    component: () => import(/* webpackChunkName: "headings" */ '../views/Headings.vue')
  },
  {
    path: '/panels',
    name: 'Panels',
    component: () => import(/* webpackChunkName: "panels" */ '../views/Panels.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
