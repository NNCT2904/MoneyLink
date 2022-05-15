import { createRouter, createWebHistory } from 'vue-router'
import HouseHold from '../views/HouseHold.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import test from '../views/test.vue'
const routes = [
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp,
    meta:{
      isLogin: false
    }
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
    meta:{
      isLogin: false
    }
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/household',
    name: 'HouseHold',
    component: HouseHold,
    meta:{
      isLogin: true
    }
  },
  {
    path: '/groups',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue'),
    meta:{
      isLogin: true
    }
  },
  {
    path: '/friends',
    name: 'Friends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue'),
    meta:{
      isLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
