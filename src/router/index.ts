import { createRouter, createWebHistory } from 'vue-router';
import  HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detalhe/:id',
      name: 'details',
      component: () => import('../views/UserDetailsView.vue')
    }
  ]
})

export default router
