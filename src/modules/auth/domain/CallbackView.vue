<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BaseLoader from '@/components/base/BaseLoader.vue';
import { useAuthStore } from '@/store/auth/useAuthStore';

import SpotifyAuthApi from '../infrastructure/AuthSpotify';

onMounted(async () => {
  const route = useRoute();
  const router = useRouter();
  const code = route.query.code as string;
  const authStore = useAuthStore();
  // It tries to get the token with the code callback redirection
  try {
    const { data: tokenResponse } = await SpotifyAuthApi.getAccessTokenByCode(code);
    const { access_token, refresh_token } = tokenResponse;
    authStore.setAuthInfo({ access_token, refresh_token });
    router.push({ name: 'Home' });
  } catch (e) {
    router.push({ name: 'Login' });
  }
});
</script>
<template>
  <div class="flex-center h-screen">
    <BaseLoader />
  </div>
</template>
