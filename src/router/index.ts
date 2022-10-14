import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/modules/auth/domain/LoginView.vue'),
  },
  {
    path: '/callback:params(.*)',
    name: 'Callback',
    component: () => import('@/modules/auth/domain/CallbackView.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/modules/home/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
