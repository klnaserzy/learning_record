import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorksArea from '@/views/WorksArea.vue'
import DisplayProgram from '@/views/DisplayProgram.vue'
import NotFound404 from '@/views/NotFound404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/learning_record',
      component: HomeView
    },
    {
      path: '/worksArea/:id',
      component: WorksArea
    },{
      path: '/worksArea/:id/program',
      component: DisplayProgram
    },
    {
      path: '/:pathMatch(.*)*', 
      component: NotFound404
    }
  ]
})

export default router
