<script setup lang="ts">
import BaseAlert from './BaseAlert.vue';
import BaseTitleSection from './BaseTitleSection.vue';
interface Props {
  title?: string;
  linkText?: string;
  linkRoute?: string;
  column?: boolean;
}
withDefaults(defineProps<Props>(), {
  title: 'Default title',
  linkText: undefined,
  linkRoute: undefined,
  column: false,
});
</script>
<template>
  <div class="mt-14">
    <div
      class="flex flex-col gap-y-4 lg:justify-between lg:items-center lg:gap-y-0 lg:flex-row"
    >
      <BaseTitleSection :title="title" />
      <router-link
        v-if="linkText && linkRoute"
        :to="`${linkRoute}`"
        class="uppercase text-gray text-base tracking-widest font-bold"
      >
        {{ linkText }}
      </router-link>
    </div>
    <div :class="`flex mt-10 justify-center ${column ? 'flex-col' : 'flex-wrap gap-6'}`">
      <slot class="mt-8">
        <BaseAlert
          title="No information yet"
          description="Looks like there is no information here yet"
          type="info"
          icon="info"
        />
      </slot>
    </div>
  </div>
</template>
