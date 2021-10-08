import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/homePage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    component: () => import('../views/home/home.vue'),
    children: [
      { path: '/home/index', component: homePage }
    ]
  },
  {
    path: '/notice',
    component: () => import('../views/noticeDetailsPage/index.vue'),
    children: [
      { path: '/notice/detail', component: () => import('../components/noticeDetail/index.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
