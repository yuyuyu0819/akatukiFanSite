import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userRouters from './userRouter'
import adminRouters from './adminRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...userRouters,
    ...adminRouters,
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
