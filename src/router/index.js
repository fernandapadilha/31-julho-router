import { createRouter, createWebHistory } from 'vue-router'
//importação das rotas
import HomeView from '../views/HomeView.vue'
// @ para começar o caminho a partir da pasta "mãe", no caso 'src';
import ProductView from '@/views/ProductView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //definição das rotas
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'sobre',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'produtos',
      component: ProductView,
    },
    {
      path: '/contact',
      name: 'contato',
      component: ContactView,
    }
  ]
})

export default router
