<script setup lang="ts">
import { useUserStore } from '../../store/user/useUserStore';
const userStore = useUserStore();
</script>
<template>
  <img :src="userStore.user.image" alt="" />
  <h1>{{ userStore.user.display_name || 'XD' }}</h1>
</template>
