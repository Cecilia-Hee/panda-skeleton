import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/index.vue'
import { lazyLoadView } from './skeleton.js'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    // component: () => lazyLoadView(import('../views/home/index.vue'))
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => lazyLoadView(import(/* webpackChunkName: "detail" */ '../views/user/index.vue'))
    component: () => import(/* webpackChunkName: "detail" */ '../views/user/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   next()
// })

export default router
