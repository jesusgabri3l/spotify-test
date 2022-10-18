<script setup lang="ts">
import SpotifyAuthApi from '../infrastructure/AuthSpotify';

const handleRequestToLoginSpotify = (): undefined => {
  SpotifyAuthApi.redirectToSpotifyAuth();
  return;
};
</script>

<template>
  <div class="login-view">
    <div class="login-view__card">
      <h1 class="login-view__card__title">Spotify Web App</h1>
      <p class="login-view__card__description mt-3">
        Welcome back! You can directly access to the music by login with your
        <span class="text-primary font-bold">Spotify</span> account
      </p>
      <button class="button button--primary mt-12" @click="handleRequestToLoginSpotify">
        Login with Spotify
      </button>
    </div>
  </div>
</template>
