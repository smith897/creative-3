import Vue from 'vue'
import VueRouter from 'vue-router'
import FAQPage from '../views/FAQPage.vue'
import StudentPage from '../views/StudentPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Student',
    component: StudentPage
  },
  {
    path: '/FAQPage',
    name: 'FAQ',
    component: FAQPage
  },
  {
    path: '/TA',
    name: 'TA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TA.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
