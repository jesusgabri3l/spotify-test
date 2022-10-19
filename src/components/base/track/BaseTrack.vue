<script lang="ts" setup>
import { Track } from '@/types/Track';

import { artistsConcataned, millisToMinutesAndSeconds } from './utils';
interface Props {
  index?: number;
  track: Track;
}
defineProps<Props>();
</script>
<template>
  <div class="track">
    <div class="track__basics">
      <span v-if="index" class="track__basics__number">{{ index }}</span>
      <img :src="track.album?.images[0]?.url" class="track__basics__image" alt="track" />
      <div class="track__basics__name">
        <p class="track__basics__name__track">{{ track?.name }}</p>
        <p class="track__basics__name__artist">
          {{ artistsConcataned(track?.artists!) }}
        </p>
      </div>
    </div>
    <div class="track__extra-info">
      <p class="track__extra-info__text text-center">{{ track?.album?.name }}</p>
    </div>
    <div class="track__extra-info">
      <p class="track__extra-info__text text-right">
        {{ millisToMinutesAndSeconds(track.duration_ms as number) }}
      </p>
    </div>
  </div>
</template>
