<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAuthStore } from '../../../store/auth/useAuthStore';
import SpotifyAuthApi from '../infrastructure/AuthSpotify';

onMounted(async () => {
  const route = useRoute();
  const router = useRouter();
  const code = route.query.code as string;
  const authStore = useAuthStore();
  const { data: tokenResponse } = await SpotifyAuthApi.getAccessTokenByCode(code);
  const { access_token, refresh_token } = tokenResponse;
  authStore.setAuthInfo({ access_token, refresh_token });
  router.push('/home');
});
</script>
<template>
  <h1>Loading...</h1>
</template>
