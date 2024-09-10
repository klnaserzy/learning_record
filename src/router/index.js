import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LearningProcessView from '@/views/LearningProcessView.vue'
import NotFound404 from '@/views/NotFound404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/LearningProcess/:id',
      component: LearningProcessView
    },
    {
      path: '/:pathMatch(.*)*', 
      component: NotFound404
    }
  ]
})

export default router
