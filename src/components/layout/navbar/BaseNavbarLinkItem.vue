<script setup lang="ts">
interface Props {
  linkText: string;
  linkRoute: string;
  icon: string;
}
withDefaults(defineProps<Props>(), {
  linkText: 'Default text',
  linkRoute: '/',
  icon: 'hashtag',
});
</script>
<template>
  <li class="navbar__list__item">
    <router-link :to="linkRoute" class="navbar__list__item__link" active-class="active">
      <i :class="`navbar__list__item__link__icon fa fa-${icon}`"></i
      ><span class="navbar__list__item__link__text">{{ linkText }}</span>
    </router-link>
  </li>
</template>
