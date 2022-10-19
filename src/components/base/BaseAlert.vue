<script setup lang="ts">
interface Props {
  type?: string;
  title?: string;
  description?: string;
  icon?: string;
}
withDefaults(defineProps<Props>(), {
  type: 'error',
  title: 'Something wrong happened.',
  description: `Hey, i am so sorry, but looks like something bad just happened, try reloading the
        page, if it does not work, try to reach the support team.`,
  icon: 'warning',
});
</script>
<template>
  <div class="alert" :class="`alert--${type}`">
    <i :class="`fa fa-${icon}`" />
    <div>
      <p class="alert__title">{{ title }}</p>
      <p class="alert__description">{{ description }}</p>
    </div>
  </div>
</template>
