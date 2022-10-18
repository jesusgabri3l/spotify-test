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
    component: () => import('@/modules/user/home/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Route validation if is authenticated or not
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  // The route callback is doing its validation itself
  if (to.name === 'Callback') next();
  // If token exists and we go to the login page, it should not go to the login, instead is redirecting to home
  else if (authStore.getAccessToken && to.name === 'Login') next({ name: 'Home' });
  // If token doesnt exist and if is not on Login route, it will redirect to login page
  else if (!authStore.getAccessToken && to.name !== 'Login') next({ name: 'Login' });
  else next();
});

export default router;
