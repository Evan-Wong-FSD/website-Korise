<template>
  <header>
    <div class="banner" :style="productImg">
      <div class="banner-top">
        <productSelect v-show="displayOnDesktop" class="q-mt-xl q-mr-xl" />
        <logo />
      </div>

      <div v-show="displayOnDesktop" class="container column justify-center items-start">
        <h1 class="productName">
          {{productSelected.label}}
          <small>{{productSelected.subtitle}}</small>
        </h1>

        <q-separator size="0.2em" class="q-mb-lg separator-banner" />

        <strong class="productIntro">{{productSelected.briefIntro}}</strong>
      </div>
    </div>
  </header>
  
  <productSelect v-show="displayOnTablet" />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useRouter, useRoute } from "vue-router"
import logo from 'src/components/carousel/logo.vue'
import productSelect from './productSelect.vue'
export default {
  components: {
    logo,
    productSelect
  },
  setup() {
    const $q = useQuasar()
    const store = useStore()
    const route = useRoute()
    
    const displayOnTablet = computed(() => $q.screen.width < 1200)
    const displayOnDesktop = computed(() => $q.screen.width >= 1200)
    // const productSelected = computed(() => 'multifunctional heat pump (with dehumidifying function).png')
    const productName = computed(() => route.params.productSelected)
    // const productsState = computed(() => store.state.productIntro.products)
    const productSelected = computed(() => store.state.productIntro.products.find(elem => elem.name === productName.value))
    const productImg = computed(() => {
      // while width of screen > 0 && background for mobile and tablet
      if ($q.screen.width > 0 && $q.screen.width < 1200) {
        // return { background:`url(${require(`src/assets/product images/${productSelected.value}`)}) no-repeat center 70% / contain` }
        return { background:`url(${productSelected.value.image}) no-repeat center 70% / contain` }
        // background for desktop
      } else if ($q.screen.width >= 1200) {
        // return { background:`url(${require(`src/assets/product images/${productSelected.value}`)}) no-repeat 90% center / 30% 50%, linear-gradient(115deg, #98c1d9 50%, transparent 50%) center / cover` }
        return { background:`url(${productSelected.value.image}) no-repeat 90% center / 30% 50%, linear-gradient(115deg, #98c1d9 50%, transparent 50%) center / cover` }
      }
    })

    return {
      displayOnDesktop,
      displayOnTablet,
      productImg,
      productSelected
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    background: linear-gradient(0deg, rgba(#bdbdbd, 0.1), #bdbdbd, rgba(#bdbdbd, 0.1)) center / cover;
  }

  .banner {
    width: 60%;
    height: 50vh;
    margin: 0 auto;
    max-height: 850px;
    // background:
    //   // transparent
    //   url('src/assets/product images/multifunctional heat pump (with dehumidifying function).png') no-repeat center 70% / contain;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .banner {
      width: 100%;
      height: 100vh;
      max-height: 850px;
      position: relative;
      // background:
      //   url('src/assets/product images/multifunctional heat pump (with dehumidifying function).png') no-repeat 90% center / 30% 50%,
      //   linear-gradient(115deg, #98c1d9 50%, transparent 50%) center / cover;
    }
  }

  .banner-top {
    width: 100%;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .banner-top {
      width: 100%;
      position: absolute;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }

  .container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }

  h1, small {
    display: block;
  }

  .separator-banner {
    width: 35%;
    display: block
  }

  .productIntro {
    width: 35%;
    font-size: 1.3em;
    color: $major-font-color;
  }
</style>