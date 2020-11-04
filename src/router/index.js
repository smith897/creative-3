import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Student',
    component: Student
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
