import { createRouter, createWebHistory } from 'vue-router';
import  HomeView from '../views/HomeView.vue';
import UserDetailsViewVue from '../views/UserDetailsView.vue';

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
      component: UserDetailsViewVue
    }
  ]
})

export default router
