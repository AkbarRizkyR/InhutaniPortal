import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/HomePortalLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HomePortal/HomeView.vue')
        }
      ]
    },
  ]
})

export default router
