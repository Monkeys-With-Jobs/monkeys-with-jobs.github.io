<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="/images/logo_no_text.svg" alt="Monkeys With Jobs Logo" width="30" height="24">
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" :aria-current="currentPage == 'index' ? 'page' : null" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :aria-current="currentPage == 'about' ? 'page' : null" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :aria-current="currentPage == 'games' ? 'page' : null" to="/games">Games</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :aria-current="currentPage == 'socials' ? 'page' : null" to="/socials">Socials &amp; Contact</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :aria-current="currentPage == 'imprint' ? 'page' : null" to="/imprint">Imprint</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
})
</script>
