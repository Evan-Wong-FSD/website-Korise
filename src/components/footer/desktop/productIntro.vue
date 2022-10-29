<template>
  <section class="segment">
    <section class="container">
      <h3>產品簡介</h3>
    </section>

    <q-separator spaced class="separator" />

    <section class="container">
      <!-- <h4 class="cursor-pointer" v-for="item of productsState" @click="scrollToProductIntro(item.name)">{{item.label}}</h4> -->
      <a class="cursor-pointer footerNav" v-for="item of productsState" @click="scrollToProductIntro(item.name, item.label)">{{item.label}}</a>
    </section>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router"
import { homeGuard } from 'src/method/homeGuard.js'
import scrollToTarget from 'src/method/scrollToTarget.js'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const scrollAreaRef = computed(() => store.state.scrollArea.scrollAreaRef)
    const elementOffsetTop = computed(() => store.state.scrollArea.elementOffsetTop)
    const productsState = store.state.productIntro.products

    const scrollToProductIntro = async (productName, productLabel) => {
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.productIntroduction)
    }

    return {
      productsState,
      scrollToProductIntro
    }
  }
}
</script>

<style lang="scss" scoped>

</style>