import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // Rotas de compatibilidade para links já usados nos componentes
    {
      path: '/sobre-nos',
      redirect: '/about',
    },
    {
      path: '/contactos',
      redirect: '/about',
    },
    {
      path: '/servicos',
      redirect: '/',
    },
    {
      path: '/voos',
      redirect: '/',
    },
    {
      path: '/aeroportos',
      redirect: '/',
    },
    {
      path: '/aeroportos/:slug',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
