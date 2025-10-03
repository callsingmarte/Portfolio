<script setup lang="ts">
import EducationComponent from '@/components/homeComponents/EducationComponent.vue'
</script>

<template>
  <main class="container">
    <EducationComponent />
    <router-link to="/" class="btn btn-primary mt-3">{{ $t('buttons.backToHome') }}</router-link>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
