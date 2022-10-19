<script setup lang="ts">
import defaultImage from '@/assets/default.png';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { useUserStore } from '@/store/user/useUserStore';

const userStore = useUserStore();
const authStore = useAuthStore();
const logoutHandler = (): undefined => {
  authStore.logout();
  return;
};
</script>
<template>
  <div class="navbar__profile">
    <img :src="userStore.getUser.image || defaultImage" class="navbar__profile__image" />
    <p class="navbar__profile__name">
      {{ userStore.getUser.display_name || 'Default name' }}
    </p>
    <button class="navbar__profile__logout" @click="logoutHandler">
      <i class="fa fa-sign-out navbar__profile__logout__icon" />
      <span class="navbar__profile__logout__text">Logout</span>
    </button>
  </div>
</template>
