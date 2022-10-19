<script lang="ts" setup>
import defaultImage from '@/assets/default.png';
interface Props {
  title?: string;
  description?: string;
  image?: string;
  linkRoute?: string;
}
withDefaults(defineProps<Props>(), {
  title: 'Title default',
  description: 'Description default',
  image: defaultImage,
  linkRoute: '',
});
</script>
<template>
  <router-link class="card" :to="linkRoute" data-testid="card-test">
    <img :src="image" alt="profile" class="card__image" data-testid="card-image-test" />
    <h3 class="card__title mt-4" data-testid="card-title-test">{{ title }}</h3>
    <p class="card__description" data-testid="card-description-test">{{ description }}</p>
  </router-link>
</template>
