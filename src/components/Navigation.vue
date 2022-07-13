<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router'

const scrolledNav = ref(false);
const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value;
}

function checkScreen() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
  return;
}

function updateScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    scrolledNav.value = true;
    return;
  }
  scrolledNav.value = false;
}

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
  window.addEventListener("scroll", updateScroll);
})

</script>

<template>
  <header class="primary-header" :class="{ 'scrolled-nav': scrolledNav }">
    <div class="logo">
      <img src="@/assets/icons/skull.svg" />
      <span>Dinner Party</span>
    </div>
    <nav>
      <ul v-show="!mobile" class="navigation">
        <li>
          <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'about' }">About</RouterLink>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'characters' }">Characters</RouterLink>
        </li>
      </ul>
      <div class="icon" v-show="mobile">
        <i @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }">|||</i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li @click="toggleMobileNav" class="nav-drop">
            <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
          </li>
          <li @click="toggleMobileNav" class="nav-drop">
            <RouterLink class="link" :to="{ name: 'about' }">About</RouterLink>
          </li>
          <li @click="toggleMobileNav" class="nav-drop">
            <RouterLink class="link" :to="{ name: 'characters' }">Characters</RouterLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/base.css';

header {
  z-index: 99;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute fixed;
  transition: 0.5s ease all;
  color: hsl(1, 95%, 83%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  
  .logo {  
    display: flex;
    align-items: center;
    width: 25%;

    img {
      width: 50px;
      transition: .5s ease all;
    }

    span {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 150%;
      letter-spacing: 2px;
      padding-left: 0.7em;
      color: hsl(1, 95%, 83%);
    }
  }

  nav {
    list-style: none;
    padding: 0;
    transition: .5s ease all;
    width: 75%;
    margin: 0 auto;
    font-weight: 500;
    text-decoration: none;
    color: hsl(1, 95%, 83%);

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .navigation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: hsl(1, 95%, 83%);
      text-decoration: none;
      gap: 2%;
      padding-right: 10%;
      padding-bottom: 8px;
      padding-top: 8px;
      //background: hsl(0,0%,100%, 0.1);
    }

    li {
      text-transform: uppercase;
      //padding: 16px;
      //margin-left: 16px;
      list-style-type: none;
    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding: 12px;
      text-decoration: none;
      text-decoration-line: none;
      color: hsl(1, 95%, 83%);
      border-radius: 30%;

      &:hover {
        color: hsl(0, 99%, 46%);
        background-color: #fff;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      padding-right: 8%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.5s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg)
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      //background-color: rgb(46, 23, 81);
      top: 0;
      left: 0;
      padding-top: 20%;

      .nav-drop {
        margin-left: 0;
        padding: 5%;
      }

      .link {
        padding: 5%;
        color: hsl(1, 95%, 83%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: black;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);

  .branding {
    img {
      width: 40px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    span {
      text-transform: uppercase;
      font-size: 90%;
      padding-left: 0.5rem;
      color: hsl(1, 95%, 83%);
    }
  }

  nav {
    padding: 8px 0;
  }
}
</style>