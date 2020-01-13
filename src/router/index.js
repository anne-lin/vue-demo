import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path: 'index',
      name: 'index',
      component: () => import('../views/Index.vue')
    }]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
