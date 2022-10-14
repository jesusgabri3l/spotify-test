<script setup lang="ts">
import SpotifyAuthApi from '../infrastructure/AuthSpotify';

const handleRequestToLoginSpotify = (): undefined => {
  SpotifyAuthApi.redirectToSpotifyAuth();
  return;
};
</script>

<template>
  <h1>Login view</h1>
  <button @click="handleRequestToLoginSpotify">Login with spotify</button>
</template>
