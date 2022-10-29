<template>
  <q-dialog persistent v-model="open" v-if="open">
    <div class="bg-grey-3 container q-pa-md">
      <q-toolbar class="row justify-start">
        <q-btn flat round dense icon="close" @click="close" />
      </q-toolbar>

      <div class="text-grey-10 content q-gutter-x-md">
        <div class="description">
          <!-- <q-img
            :src="field.image"
            :ratio="16/9"
          /> -->
          <picture>
            <source :srcset="appliedFieldsImageState.small[field.name]" media="(max-width: 767px)">
            <source :srcset="appliedFieldsImageState.medium[field.name]" media="(max-width: 1199px)">
            <source :srcset="appliedFieldsImageState.large[field.name]" media="(max-width: 1940px)">
            <img
              :src="appliedFieldsImageState.original[field.name]"
              :alt="field.label"
              class="rounded-borders"
            >
          </picture>

          <div class="q-pt-md">
            <p class="no-margin">始些任師在的，久情能樂紅以之石別、變入資夫路產活；題效最意裡那試看裡樣都用語以進生市喜認，有藝上長統時家手顯間望。確親有由各這家隨？前怎二了國我是身重得當們社相民飛話利以果推平系加經；門告人臉去害功大，以數所說白養身我受國，子多方注。</p>
          </div>
        </div>

        <div class="option">
          <strong v-show="productSelected">{{productBenefit}}</strong>
          <p class="no-margin q-pt-md">讓我們為您解決問題</p>
          <q-select
            filled
            dense
            v-model="productSelected"
            label="請選擇一項產品"
            :options="productMenuOption"
            popup-content-class="bg-grey-2 text-grey-10"
            standout="bg-grey-4 text-grey-10"
            color="deep-orange-5"
            class="q-py-sm"
          >
            <template v-slot:selected-item="scope">
              <q-chip dense color="grey-4" text-color="deep-orange-5">{{scope.opt}}</q-chip>
            </template>
          </q-select>
          <div class="row justify-center">
            <q-btn dense color="submitColor" class="text-grey-7 text-bold" label="產品簡介" :disable="!productSelected" @click="close(), scroll()" />
          </div>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import scrollToTarget from 'src/method/scrollToTarget.js'
export default {
  props: ['field'],
  emits: ['closeDialog'],
  setup(props, context) {
    const store = useStore()

    const productsState = store.state.productIntro.products
    const appliedFieldsImageState = store.state.images.appliedFields
    const productSelected = ref(undefined)
    const open = ref(false)
    const fieldNameState = computed(() => store.state.appliedFields.field.name)
    const productBenefit = computed(() => {
      if (productSelected.value) {
        return productsState.find(element => element.label === productSelected.value).benefit
      }
    })

    const close = () => {
      context.emit('close')
    }
    const scroll = () => {
      const { scrollAreaRef, elementOffsetTop } = store.state.scrollArea
      const { name, label } = props.field
      scrollToTarget(scrollAreaRef, elementOffsetTop.productIntroduction)
      store.commit('productIntro/updateState', { key: 'tab', value: { name, label } })
      store.commit('productIntro/updateState', { key: 'innerTab', value: {
        name: productsState[productSelectedIndex()].name,
        label: productSelected.value
      }})
      productSelected.value = undefined
    }
    const productMenuOption = (() => productsState.map(element => element.label))()
    const productSelectedIndex = () => productMenuOption.indexOf(productSelected.value)

    watchEffect(() => {
      if (props.field.name === fieldNameState.value) {
        setTimeout(() => {
          open.value = true
        }, 200) // equal to 0.2s
      } else {
        open.value = false
      }
    })

    return {
      open,
      close,
      scroll,
      productSelected,
      productMenuOption,
      productBenefit,
      appliedFieldsImageState
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 80vw;
  }

  img {
    vertical-align: top;
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
  }

  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .content {
      display: flex;
    }
    .content .description {
      width: 50%;
    }
    .content .option {
      width: 50%;
    }
  }

  .bg-submitColor {
    background: $major-color;
  }
</style>
