<script lang="ts" setup>
const color = 'blue';
const name = 'jesusgabri3l';
const img = 'https://i.scdn.co/image/ab6775700000ee859b559feaf5676fa84e5823a0';
</script>
<template>
  <header :class="`header ${color}`">
    <img :src="img" class="header__image" />
    <div class="lg:ml-12">
      <p class="header__type mb-2">PROFILE</p>
      <h1
        class="header__name mt-4"
        :class="`${
          name && name.length > 25
            ? 'text-lg md:text-4xl'
            : 'text-4xl md:text-5xl lg:text-7xl'
        }`"
      >
        {{ name }}
      </h1>
    </div>
  </header>
</template>
