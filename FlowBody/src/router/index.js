const VMain = () => import('@/components/mainPage/vMain.vue')

const vRate = () => import('@/components/ratePage/v-rate.vue')
const vRegister = () => import('@/components/user/registrationPage/v-register-num.vue') 
const VRegisterPas = () => import('@/components/user/registrationPage/v-register-pas.vue')
const VRegisterInfo = () => import('@/components/user/registrationPage/v-register-info.vue')

import { createRouter, createWebHistory } from 'vue-router'
const userRoutes = [
    {
        path: 'registration',
        name: 'registration',
        component: vRegister
    },
    {
        path: 'registration/step-2',
        name: 'registration-step-2',
        component: VRegisterPas
    },
    {
        path: 'registration/step-3',
        name: 'registration-step-3',
        component: VRegisterInfo
    },
]

const routes = [
    {
        path: '/',
        name: 'rate',
        component: vRate
    },
    {
        path: '/users',
        children: userRoutes
    },

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router