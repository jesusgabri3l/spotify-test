<script lang="ts" setup>
import ErrorBoundary from 'vue-error-boundary';

import BaseAlert from '@/components/base/BaseAlert.vue';

import TheNavbar from './navbar/TheNavbar.vue';

//import BaseErrorBoundary from '../base/BaseErrorBoundary.vue';
</script>
<template>
  <div class="layout">
    <TheNavbar />
    <div class="layout__content">
      <ErrorBoundary :fall-back="BaseAlert" :stop-propagation="true">
        <router-view />
      </ErrorBoundary>
    </div>
  </div>
</template>
