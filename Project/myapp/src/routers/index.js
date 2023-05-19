import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage'
import SignUp from '@/components/SignUp'
import ProductCatalogue from '@/components/ProductCatalogue'

const routes = [
    
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: LoginPage,
        path: "/login"
    },
    {
        name: "ProductCatalogue",
        component: ProductCatalogue,
        path: "/productcatalogue"
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;