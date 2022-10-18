<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item">
        <router-link to="/home" class="navbar__list__item__link" active-class="active">
          Home
        </router-link>
      </li>
      <li class="navbar__list__item">
        <router-link to="/search" class="navbar__list__item__link">Search</router-link>
      </li>
      <li class="navbar__list__item">
        <router-link to="/music" class="navbar__list__item__link">My music</router-link>
      </li>
    </ul>
    <div class="navbar__profile"></div>
  </nav>
</template>
