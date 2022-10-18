<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue';
import BaseTitleSection from '@/components/base/BaseTitleSection.vue';
import BaseHeaderProfile from '@/components/base/header-profile/BaseHeaderProfile.vue';
//import { useUserStore } from '../../store/user/useUserStore';
//const userStore = useUserStore();
</script>
<template>
  <div class="home-view">
    <BaseHeaderProfile />
    <main class="content-wrapper">
      <section>
        <BaseTitleSection title="Most listened artist" />
        <div class="flex flex-wrap gap-12 mt-12">
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
        </div>
      </section>
    </main>
  </div>
</template>
