<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <div class="app">
    <Navigation />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lora', serif;
  font-weight: 400;
  background-color: hsl(240, 22%, 24%);
}

.app {
  min-width: 100vh;
  position: relative;
  background-color: hsl(240,22%,24%);
}

</style>
