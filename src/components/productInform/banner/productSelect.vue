<template>
  <q-select
    dense
    filled
    :model-value="selected"
    @update:model-value="(value) => updateSelected(value)"
    :options="options"
    label="產品列表"
    popup-content-class="bg-grey-2 text-grey-10"
    standout="bg-grey-4 text-grey-10"
    color="deep-orange-5"
    class="select"
  />
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router"
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const productsState = store.state.productIntro.products

    const selected = computed(() => productsState.find(elem => elem.name === route.params.productSelected).label)
    const options = (() => productsState.map(element => element.label))()

    const updateSelected = (value) => {
      const optionIndex = productsState.findIndex(elem => elem.label === value)
      router.push({
        params: {
          productSelected: productsState[optionIndex].name
        }
      })
    }

    return {
      selected,
      options,
      updateSelected
    }
  }
}
</script>

<style lang="scss" scoped>
  .select {
    width: 80%;
  }
  // max-width of tablet
  @media screen and (max-width: 1199px) {
    .select {
      margin: 0 auto;
    }
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .select {
      width: 30%;
    }
  }
</style>