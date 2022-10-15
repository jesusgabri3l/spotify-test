<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import SpotifyApi from './services/SpotifyApi';
import { useAuthStore } from './store/auth/useAuthStore';
import { useUserStore } from './store/user/useUserStore';

const loading = ref(true);
const authStore = useAuthStore();
const userStore = useUserStore();

const getUserInformation = async () => {
  if (!userStore.getUser.id && authStore.getAccessToken) {
    const { data: userResponse } = await SpotifyApi.getCurrentUserInfo();
    const { display_name, id, images } = userResponse;
    userStore.setUser({ display_name, id, image: images[0].url });
    loading.value = false;
  } else if (userStore.getUser.id) loading.value = false;
  else loading.value = false;
};

watch(
  () => authStore.authInfo.access_token,
  () => getUserInformation(),
);
onMounted(() => getUserInformation());
</script>
<template>
  <template v-if="!loading">
    <router-view />
  </template>
  <template v-else>
    <p>Loading...</p>
  </template>
</template>
