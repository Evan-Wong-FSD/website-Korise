<template>
  <q-breadcrumbs separator=">" class="text-deep-orange-5 q-py-md breadcrumbs" active-color="blue-grey">
    <q-breadcrumbs-el label="首頁" class="breadcrumb-item cursor-pointer" @click="toHome" />
    <q-breadcrumbs-el label="產品簡介" class="breadcrumb-item cursor-pointer" @click="scrollToProductIntro" />
    <q-breadcrumbs-el label="詳細介紹" class="breadcrumb-item cursor-pointer" />
  </q-breadcrumbs>
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

    const toHome = () => { router.push({ name: 'Home' }) }

    // const scrollToProductIntro = async (productName, productLabel) => {
    const scrollToProductIntro = async () => {
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.productIntroduction)
      // updateState(store, 'productIntro', 'tab', { name: 'all', label: '全部' })
      // updateState(store, 'productIntro', 'innerTab', { name: productName, label: productLabel })
    }

    return {
      toHome,
      scrollToProductIntro
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    font-size: 1.2em;
  }

  .breadcrumb-item:hover {
    text-decoration: underline;
  }

  // .text-breadcrumbsActiveColor {
  //   color: #4F607D;
  // }
  // .bg-breadcrumbsActiveColor {
  //   background: #4F607D;
  // }
</style>