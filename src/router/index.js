import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../views/Todo.vue'
import Memo from '../views/Memo.vue'

const routes = [
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/memo',
    name: 'Memo',
    component: Memo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/elastic_header',
    name: 'ElasticHeader',
    component: () => import('../views/ElasticHeader.vue')
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import('../views/DesignedTemplate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
