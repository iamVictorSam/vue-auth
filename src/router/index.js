import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import HomeView from '@/views/HomeView'
import UserDetails from '@/views/UserDetails'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/details',
      component: UserDetails,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

export default router
