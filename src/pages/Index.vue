<template>
  <q-page class="page">
    <q-scroll-area ref="scrollAreaRef" class="scrollArea" :content-style="scrollAreaStyle">
      <header>
        <carousel />
      </header>

      <main class="mainContent">
        <section class="appliedFields"><appliedFields /></section>
        <section class="productIntroduction"><productIntroduction /></section>
        <section class="contactUs"><contactUs /></section>
      </main>
      <Footer />
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'
import { useWindowSize } from 'vue-window-size'
import carousel from 'src/components/carousel'
import appliedFields from 'src/components/home/appliedFields'
import productIntroduction from 'src/components/home/productIntroduction'
import contactUs from 'src/components/contactUs'
import Footer from 'src/components/footer'
export default {
  name: 'mainpage',
  components: {
    carousel,
    appliedFields,
    productIntroduction,
    contactUs,
    Footer
  },
  setup () {
    const store = useStore()
    const scrollAreaRef = ref(null)
    const { width } = useWindowSize()
    const $q = useQuasar()

    let pageHeight = ref(undefined)
    // const position = ref(300)
    const position = ref(604)
    const scrollAreaMaxWidth = computed(() => {
      if (width < 768) {
        return '767px'
      } else if (width < 1200) {
        // min-width of tablet is 768px
        return '1024px'
      } else {
        // min-width of desktop is 1920px
        return '1920px'
      }
    })
    const scrollAreaStyle = reactive({
      'max-width': scrollAreaMaxWidth.value,
      'box-sizing': 'border-box',
      'width': '100%',
      'margin': '0 auto'
    })

    const domElementProps = (domElement) => document.getElementsByClassName(domElement)[0]
    const renewPageHeight = () => {
      pageHeight.value = `${domElementProps('page').clientHeight}px`
      store.commit('scrollArea/renewScrollAreaRef', scrollAreaRef.value)
      store.commit('scrollArea/setElementOffsetTop', {
        name: 'appliedFields',
        offsetTop: domElementProps('appliedFields').offsetTop
      })
      store.commit('scrollArea/setElementOffsetTop', {
        name: 'productIntroduction',
        offsetTop: domElementProps('productIntroduction').offsetTop
      })
      store.commit('scrollArea/setElementOffsetTop', {
        name: 'contactUs',
        offsetTop: domElementProps('contactUs').offsetTop
      })
    }
    onMounted(() => {
      renewPageHeight()
    })

    watch(() => width.value, (newValue,oldValue) => {
      renewPageHeight()
    })
    watch(() => $q.screen.height, (newValue,oldValue) => {
      renewPageHeight()
    })

    return {
      // width,
      scrollAreaStyle,
      position,
      pageHeight,
      scrollAreaRef
    }
  }
}
</script>

<style lang="scss">
  // // mobile as default viewport
  // .page {
  //   box-sizing: border-box;
  //   width: 100%;
  //   max-width: 767px;
  //   margin: 0 auto;
  // }
  // // min-width of tablet
  // @media screen and (min-width: 768px) {
  //   .page {
  //     max-width: 1024px;
  //   }
  // }
  // // min-width of desktop
  // @media screen and (min-width: 1200px) {
  //   .page {
  //     max-width: 1920px;
  //   }
  // }

  .mainContent {
    width: 80%;
    margin: 0 auto;
  }

  section {
    padding: 2.5% 0 2.5% 0;
  }

  .scrollArea {
    // height: v-bind(pageHeight);
    height: 100vh;
  }
</style>
