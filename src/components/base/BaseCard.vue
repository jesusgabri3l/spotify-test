<script lang="ts" setup>
import defaultImage from '@/assets/default.png';
interface Props {
  title?: string;
  description?: string;
  image?: string;
  id?: string;
}
withDefaults(defineProps<Props>(), {
  title: 'Title',
  id: '0',
  description: 'Description',
  image: defaultImage,
});
</script>
<template>
  <article class="card">
    <img :src="image" alt="profile" class="card__image" />
    <h3 class="card__title mt-4">{{ title }}</h3>
    <p class="card__description">{{ description }}</p>
  </article>
</template>
