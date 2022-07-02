<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">
          <img class="homeIcon" src="@/assets/icons/home.svg" width="40" height="40"/>
          Home
        </RouterLink>
        <RouterLink tag="button" to="/about">
          <img class="profileIcon" src="@/assets/icons/profile.svg" width="40" height="40"/>
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Lora', serif;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  font-family: 'Lora', serif;
}

.homeIcon {
  display: block;
  margin: 0 auto;
}

.profileIcon {
  display: block;
  margin: 0 auto;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
