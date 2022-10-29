<template>
  <section class="row justify-end logoWrap">
    <div class="row justify-center logoContainer">
      <q-img
        :src="logoSrc"
        spinner-color="white"
        class="logo"
      />
    </div>
  </section>

  <section class="row justify-evenly no-padding no-wrap">
    <appliedFields />
    <productIntro />
    <firmInform class="firmInform" />
  </section>
</template>

<script>
import { ref ,watch } from 'vue'
import { useWindowSize } from 'vue-window-size'
import appliedFields from './appliedFields.vue'
import productIntro from './productIntro.vue'
import firmInform from './firmInform.vue'
export default {
  components: {
    appliedFields,
    productIntro,
    firmInform
  },
  setup() {
    const { width } = useWindowSize()

    const logoSrc = require('src/assets/logo/Korise_logo_original.png')
    const logoContainerWidth = ref('30vw')
    // const logoContainerWidth = ref('30%')

    watch(() => width.value, (newValue, oldValue) => {
      const getFirmInformWidth = document.getElementsByClassName('firmInform')[0].clientWidth
      logoContainerWidth.value = `${getFirmInformWidth}px`
    })

    return {
      logoSrc,
      logoContainerWidth
    }
  }
}
</script>

<style lang="scss" scoped>
  .logoWrap {
    padding: 0 2.5%;
    margin: 0 auto;
  }

  .logoContainer {
    width: v-bind(logoContainerWidth);
    right: 0;
    box-sizing: border-box;
  }

  .logo {
    width: 100%;
  }
</style>