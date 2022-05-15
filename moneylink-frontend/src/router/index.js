import { createRouter, createWebHistory } from 'vue-router'
import HouseHold from '../views/HouseHold.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import test from '../views/test.vue'
const routes = [
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/household',
    name: 'HouseHold',
    component: HouseHold
  },
  {
    path: '/groups',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
