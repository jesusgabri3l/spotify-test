<script lang="ts" setup>
import TheNavbar from '@/components/layout/navbar/TheNavbar.vue';
</script>
<template>
  <div class="layout">
    <TheNavbar />
    <div class="layout__content">
      <router-view />
    </div>
  </div>
</template>
