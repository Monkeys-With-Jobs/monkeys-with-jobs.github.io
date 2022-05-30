<template>
  <section class="vh-50 px-4 py-5 text-center d-flex justify-content-center align-items-center game game--dyer-expedition">
    <div>
      <img class="img-fluid d-block mx-auto mb-5" src="/images/dyer-expedition/logo-white.svg" alt="Dyer Expedition Logo">
      <h1 class="display-5 fw-bold">
        Dyer Expedition
      </h1>
      <div class="mx-auto">
        <NuxtLink to="/games/dyer-expedition" class="btn btn-secondary">Learn More</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .game {
    img {
      height: 20rem;
    }

    background-size: cover;
    background-position: center;

    &--dyer-expedition {
      background-image: url("/images/dyer-expedition/background.webp");
    }
  }
</style>
