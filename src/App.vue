<script setup lang="ts">
import BaseLoader from './components/base/BaseLoader.vue';
import TheLayout from './components/layout/TheLayout.vue';
import { useFetchUser } from './composables/useFetchUser';
const { loading } = useFetchUser();
const routesWithNoLayout = ['Login', 'Callback'];
</script>
<template>
  <div class="app-wrapper">
    <!-- Loading for fetching the user -->
    <template v-if="!loading">
      <template v-if="routesWithNoLayout.includes($route.name as string)">
        <router-view />
      </template>
      <template v-else>
        <TheLayout />
      </template>
    </template>
    <template v-else>
      <div class="h-screen flex-center">
        <BaseLoader />
      </div>
    </template>
  </div>
</template>
