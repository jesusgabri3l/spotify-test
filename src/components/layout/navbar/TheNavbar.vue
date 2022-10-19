<script setup lang="ts">
import { useUserStore } from '@/store/user/useUserStore';

import BaseNavbarLinkItem from './BaseNavbarLinkItem.vue';
import TheNavbarProfile from './TheNavbarProfile.vue';

const userStore = useUserStore();
</script>
<template>
  <nav v-if="userStore.getUser.id" class="navbar">
    <ul class="navbar__list">
      <BaseNavbarLinkItem link-text="Home" link-route="/home" icon="house-user" />
      <BaseNavbarLinkItem link-text="Search" link-route="/search" icon="search" />
      <BaseNavbarLinkItem link-text="My music" link-route="/my-music" icon="music" />
    </ul>
    <TheNavbarProfile />
  </nav>
</template>
