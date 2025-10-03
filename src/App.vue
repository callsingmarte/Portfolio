<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <footer>
    <p>&copy; 2025 Martín Sanchez Malate</p>
  </footer>
</template>

<style scoped lang="scss">
@use './assets/baseStyles/base.scss';

footer {
  //position: fixed;
  width: 100%;
  bottom: 15px;
  text-align: center;
  padding: 1rem;
  background-color: var(--color-background);
}
</style>
