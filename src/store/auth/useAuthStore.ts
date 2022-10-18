import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { Auth } from './auth';
export const useAuthStore = defineStore('auth', () => {
  // Getting auth object from LocalStorage
  const authFromStorage = JSON.parse(localStorage.getItem('auth_spotify') as string);
  // State
  const authInfo = ref<Auth>({
    access_token: authFromStorage?.access_token || '',
    refresh_token: authFromStorage?.refresh_token || '',
  });
  //Getters
  const getAccessToken = computed(() => authInfo.value.access_token);
  const getRefreshToken = computed(() => authInfo.value.refresh_token);
  // Actions
  const setAuthInfo = (authPayload: Auth): void => {
    localStorage.setItem('auth_spotify', JSON.stringify(authPayload));
    authInfo.value = authPayload;
  };

  return { setAuthInfo, getAccessToken, authInfo, getRefreshToken };
});
