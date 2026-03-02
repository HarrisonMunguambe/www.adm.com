import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlightSearchView from '@/components/sections/FlightSearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
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
    {
      path: '/noticias',
      redirect: '/#noticias',
    },
    // Rotas de compatibilidade para links já usados nos componentes
    {
      path: '/sobre-nos',
      redirect: '/about',
    },
    {
      path: '/contactos',
      redirect: '/#contactos',
    },
    {
      path: '/servicos',
      redirect: '/#servicos',
    },
    {
      path: '/aeroportos',
      redirect: '/#aeroportos',
    },
    {
      path: '/aeroportos/:slug',
      name: 'airport-detail',
      component: () => import('../views/AirportDetailView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
    {
      path: '/voos',
      name: 'flight-search',
      component: FlightSearchView,
    },
  ],
})

export default router
