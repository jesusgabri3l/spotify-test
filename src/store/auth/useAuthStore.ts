import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // State
  const authInfo = ref({
    access_token: '',
    refresh_token: '',
    expires_in: 0,
  });

  //Getters
  const getAccessToken = computed(() => authInfo.value.access_token);
  // Actions
  const setAuthInfo = (authPayload: any): void => {
    authInfo.value = authPayload;
  };

  return { setAuthInfo, getAccessToken, authInfo };
});
