const VMain = () => import('@/components/mainPage/vMain.vue')
const vRate = () => import('@/components/ratePage/v-rate.vue')

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'rate',
        component: vRate
    },

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router