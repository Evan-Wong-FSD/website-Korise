<template>
  <picture>
    <source :srcset="logo_desktop" media="(min-width: 1200px)">
    <source :srcset="logo_tablet" media="(min-width: 768px)">
    <img :src="logo_mobile" @click="backHomePage" class="absolute-top-left logo cursor-pointer">
  </picture>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()

    const logo_desktop = require('src/assets/logo/Korise_logo_300x136.png')
    const logo_tablet = require('src/assets/logo/Korise_logo_250x114.png')
    const logo_mobile = require('src/assets/logo/Korise_logo_200x91.png')
    
    const backHomePage = async () => {
      await router.push({ name: 'Home' })
    }

    return {
      logo_desktop,
      logo_tablet,
      logo_mobile,
      backHomePage,
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    max-width: 200px;
    // z-index: 1;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .logo {
      max-width: 250px;
    }
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .logo {
      max-width: 300px;
    }
  }
</style>