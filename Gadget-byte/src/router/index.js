
import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp';
import VueRouter from 'vue-router'


const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
