import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { useAuthStore } from '../store/auth/useAuthStore';
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
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.name === 'Callback') next();
  else if (!authStore.getAccessToken && to.name !== 'Login') next({ name: 'Login' });
  else if (authStore.getAccessToken && to.name === 'Login') next({ name: 'Home' });
  else next();
});

export default router;
