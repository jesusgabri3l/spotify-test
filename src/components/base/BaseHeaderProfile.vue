<script lang="ts" setup>
import defaultImage from '@/assets/default.png';

interface Props {
  color?: 'blue' | 'red' | 'green';
  name?: string;
  image?: string;
}
withDefaults(defineProps<Props>(), {
  color: 'blue',
  name: 'Default profile name',
  image: defaultImage,
});
</script>
<template>
  <header :class="`header header--${color}`" data-testid="headerProfile-test">
    <img :src="image" class="header__image" data-testid="headerProfile-image-test" />
    <div class="lg:ml-12">
      <p class="header__type mb-2">PROFILE</p>
      <h1
        class="header__name mt-4"
        :class="`${
          name && name.length > 25
            ? 'text-lg md:text-4xl'
            : 'text-4xl md:text-5xl lg:text-8xl'
        }`"
        data-testid="headerProfile-name-test"
      >
        {{ name }}
      </h1>
    </div>
  </header>
</template>
