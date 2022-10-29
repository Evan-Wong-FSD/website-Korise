<template>
  <!-- v-if="innerTab" -->
  <div class="container">
    <nav class="row justify-between no-wrap">
      <q-btn dense outline label="返回" icon="undo" class="btn-back text-bold" @click="closeTabPanel" />
      <div class="row no-wrap q-gutter-sm">
        <!-- btn-knowMore -->
        <q-btn dense color="info" label="詳細介紹" class="text-bold" @click="toProductInform" />
        <!-- btn-contactUs -->
        <q-btn dense color="warning" label="聯繫我們" class="text-bold" @click="scrollToContactUs" />
      </div>
    </nav>

    <article>
      <!-- <h2 v-if="$q.platform.is.mobile">產品名稱</h2> -->
      <h2 v-if="$q.platform.is.mobile">{{productLabel}}</h2>

      <!-- style="height: 140px; max-width: 150px" -->
      <div class="row justify-center productImageContainer">
        <!-- :src="imageUrl" -->
        <q-img :src="productImage" :ratio="16/9" fit="contain" spinner-color="white" class="productImage">
          <q-tooltip class="bg-info text-h6" anchor="top middle" self="bottom middle" :offset="[10, 10]" transition-show="rotate" transition-hide="rotate" v-if="$q.platform.is.desktop">
            <!-- <strong>三合一除濕熱泵設備</strong> -->
            <strong>{{productLabel}}</strong>
          </q-tooltip>
        </q-img>
      </div>

      <p>{{productBenefit}}</p>
    </article>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router"
import scrollToTarget from 'src/method/scrollToTarget.js'
export default {
  // props: ['innerTab'],
  emits: ['closeTabPanel'],
  setup(props,context) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const innerTabState = computed(() => store.state.productIntro.innerTab)
    const productsState = computed(() => store.state.productIntro.products)
    const scrollAreaRef = computed(() => store.state.scrollArea.scrollAreaRef)
    const elementOffsetTop = computed(() => store.state.scrollArea.elementOffsetTop)
    // const imageUrl = require('src/assets/product images/multifunctional heat pump (with dehumidifying function).png')

    const product = productsState.value.find(elem => elem.name === innerTabState.value.name)
    const closeTabPanel = () => {
      context.emit('closeTabPanel')
    }
    const scrollToContactUs = () => {
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.contactUs)
    }
    const toProductInform = () => {
      const { name } = innerTabState.value
      router.push({ name: 'ProductInform', params: { language: route.params.language, productSelected: name } })
    }

    return {
      closeTabPanel,
      scrollToContactUs,
      // imageUrl,
      toProductInform,
      productLabel: innerTabState.value.label,
      productBenefit: product.benefit,
      productImage: product.image
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: $minor-bgColor;
  }

  .btn-back {
    color: $major-font-color;
  }

  .productImageContainer {
    padding: 2% 0;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .productImageContainer {
      padding: 0 0 2% 0;
    }
  }

  .productImage {
    max-width: 80%;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .productImage {
      max-width: 50%;
    }
  }

  h2 {
    font-size: 1.7em;
    display: flex;
    justify-content: center;
    font-weight:bold;
    margin: 0;
    color: $major-font-color;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    h2 {
      // font-size: 2.5em;
      font-size: 2em;
    }
  }

  p {
    margin: 0;
    color: $minor-font-color;
    font-size: 1em;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    p {
      font-size: 1.5em;
    }
  }
</style>