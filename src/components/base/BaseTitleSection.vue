<script setup lang="ts">
interface Props {
  title?: string;
}
withDefaults(defineProps<Props>(), {
  title: 'Title section default',
});
</script>
<template>
  <h2 class="text-white font-bold text-xl lg:text-3xl">{{ title }}</h2>
</template>
