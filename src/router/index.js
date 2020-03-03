import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue';

Vue.use(VueRouter)


const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
  // {
  //   path: '/done',
  //   name: 'Done',
  //   component: () => import('../views/Done.vue')
  // },
  // {
  //   path: '/important',
  //   name: 'Important',
  //   component: () => import('../views/Important.vue')
  // },
  // {
  //   path: '/started',
  //   name: 'Started',
  //   component: () => import('../views/Started.vue')
  // },
  // {
  //   path: '/trashed',
  //   name: 'Trashed',
  //   component: () => import('../views/Trashed.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
