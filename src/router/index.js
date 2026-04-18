import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/jsonView.vue'
import HomeView from '../views/xmlView.vue'

export function createRouter() {
  return createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/xml',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/json',
        name: 'about',
        component: AboutView,
      },
    ],
  })
}
