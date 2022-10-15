import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const authFromStorage = JSON.parse(localStorage.getItem('auth_spotify') as string);
  // State
  const authInfo = ref({
    access_token: authFromStorage?.access_token || '',
    refresh_token: authFromStorage?.refresh_token || '',
  });
  //Getters
  const getAccessToken = computed(() => authInfo.value.access_token);
  const getRefreshToken = computed(() => authInfo.value.refresh_token);

  // Actions
  const setAuthInfo = (authPayload: any): void => {
    localStorage.setItem('auth_spotify', JSON.stringify(authPayload));
    authInfo.value = authPayload;
  };

  return { setAuthInfo, getAccessToken, authInfo, getRefreshToken };
});
