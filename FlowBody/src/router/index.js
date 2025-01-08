
const vRate = () => import('@/components/ratePage/v-rate.vue')

const vRegister = () => import('@/components/user/registrationPage/v-register-num.vue') 
/* const VRegisterPas = () => import('@/components/user/registrationPage/v-register-pas.vue') */
const VRegisterInfo = () => import('@/components/user/registrationPage/v-register-info.vue')

const vLogin = ()=>  import('@/components/user/loginPage/v-login.vue')

const VNotFound = ()=> import('@/components/generalComponents/v-not-found.vue')

import { createRouter, createWebHistory } from 'vue-router'
const userRoutes = [
    {
        path: 'registration',
        name: 'registration-step-1',
        component: VRegisterInfo
    },
    {
        path: 'login',
        name: 'login',
        component: vLogin
    },
   
]

const routes = [
    {
        path: '/',
        name: 'rate',
        component: vRate,
        meta: { requiresAuth: true }
    },
    {
        path: '/users/',
        children: userRoutes
    },
    { 
        path: '/:pathMatch(.*)*',
        component: VNotFound

    }

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

router.beforeEach((to, from, next) => {
const isAuthenticated = localStorage.getItem('user') 

// Если маршрут требует авторизации и пользователь не авторизован
if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' }) // Перенаправляем на страницу входа
} else {
    next() // Если все в порядке, продолжаем навигацию
}
})
  export default router