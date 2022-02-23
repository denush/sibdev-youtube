import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import SearchView from '@/views/SearchView.vue';
import FavoritesView from '@/views/FavoritesView.vue';

const routes = [
  {
    name: 'main',
    path: '/',
    redirect: { name: 'search' },
    component: MainView,

    children: [
      {
        name: 'search',
        path: 'search',
        component: SearchView
      },
      {
        name: 'favorites',
        path: 'favorites',
        component: FavoritesView
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;