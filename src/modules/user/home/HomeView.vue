<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ErrorBoundary from 'vue-error-boundary';

import BaseCard from '@/components/base/BaseCard.vue';
import BaseHeaderProfile from '@/components/base/BaseHeaderProfile.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import BaseSectionFlex from '@/components/base/BaseSectionFlex.vue';
import BaseTrack from '@/components/base/track/BaseTrack.vue';
import { useUserStore } from '@/store/user/useUserStore';

import { useFetchUserTops } from './application/useFetchUserTops';

const userStore = useUserStore();
const { getUser } = storeToRefs(userStore);
// Fetch top artists and tracks
const { loading, userTops } = useFetchUserTops();
</script>
<template>
  <div class="home-view">
    <BaseHeaderProfile color="red" :name="getUser.display_name" :image="getUser.image" />
    <main class="page-content">
      <div v-if="loading" class="flex-center">
        <BaseLoader />
      </div>
      <section v-else>
        <!-- TOP Artists this month-->
        <BaseSectionFlex
          title="Top artists this month"
          link-text="see all"
          link-route="/"
        >
          <BaseCard
            v-for="artist in userTops.artists"
            :key="artist.id"
            :title="artist.name"
            description="Artist"
            :image="artist.images[0].url"
          />
        </BaseSectionFlex>
        <!-- TOP tracks this month-->
        <BaseSectionFlex
          column
          title="Top tracks this month"
          link-text="see all"
          link-route="/"
        >
          <BaseTrack
            v-for="(track, index) in userTops.tracks"
            :key="track"
            :index="index + 1"
            :track="track"
          />
        </BaseSectionFlex>
      </section>
    </main>
  </div>
</template>
