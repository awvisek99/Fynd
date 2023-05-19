/* eslint-disable no-undef */

import { createRouter, createWebHistory } from 'vue-router'
 

 
  const routes = [
  {
    path: '/',
    name: 'signup',
    component: registration,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/forgotpassword.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
export default router