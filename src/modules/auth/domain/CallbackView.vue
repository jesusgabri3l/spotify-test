<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import SpotifyApi from '../../../services/SpotifyApi';
import { useAuthStore } from '../../../store/auth/useAuthStore';
import { useUserStore } from '../../../store/user/useUserStore';
import SpotifyAuthApi from '../infrastructure/AuthSpotify';

onMounted(async () => {
  const route = useRoute();
  const router = useRouter();
  const code = route.query.code as string;
  const userStore = useUserStore();
  const authStore = useAuthStore();
  const { data: tokenResponse } = await SpotifyAuthApi.getAccessTokenByCode(code);
  const { access_token, expries_in, refresh_token } = tokenResponse;
  authStore.setAuthInfo({ access_token, expries_in, refresh_token });
  const { data: userResponse } = await SpotifyApi.getCurrentUserInfo();
  const { display_name, id, images } = userResponse;
  userStore.setUser({ display_name, id, image: images[0].url });
  router.push('/home');
});
</script>
<template>
  <h1>Callback view</h1>
</template>
