<script setup lang="ts">
import { useUserStore } from '../../store/user/useUserStore';
const userStore = useUserStore();
console.log(userStore.getUser);
</script>
<template>
  <img :src="userStore.getUser.image" alt="" />
  <h1>{{ userStore.getUser.display_name || 'XD' }}</h1>
</template>
