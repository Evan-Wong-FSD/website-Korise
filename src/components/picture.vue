<template>
  <picture style="border:1px red solid;">
    <source :srcset="logoSrc" media="(min-width: 1200px)" style="border:1px blue solid;">
    <source :srcset="logoSrcset2" media="(min-width: 768px)" style="border:1px green solid;">
    <img :src="logoSrcset3" @click="alertTest" style="border:1px black solid; background-color: coral;">
  </picture>
</template>

<script>
export default {
  setup () {
    const logoSrc = require('src/assets/logo/Korise_logo_original.png')
    const logoSrcset2 = require('src/assets/logo/Korise_logo_320x145.png')
    const logoSrcset3 = require('src/assets/logo/Korise_logo_310x141.png')

    const alertTest = () => {
      alert('this is a test.')
    }

    return {
      logoSrc,
      logoSrcset2,
      logoSrcset3,
      alertTest
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    // width: 50%;
    // width: 100%;
    // max-width: 200px;
    z-index: 1;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    // .logo {
    //   max-width: 250px;
    // }
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    // .logo {
    //   max-width: 300px;
    // }
  }
</style>