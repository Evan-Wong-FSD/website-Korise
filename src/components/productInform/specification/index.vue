<template>
  <div>
    <div class="row items-center">
      <h2 class="header">
        產品規格
      </h2>

      <div class="btn-mode">
        <div class="row justify-end q-gutter-x-xs">
          <q-btn
            unelevated
            no-caps
            :color="item.color"
            text-color="grey-2"
            :label="item.label"
            v-for="item of btnModes"
            @click="btnClicked(item)"
          />
        </div>
      </div>
    </div>

    <specification :btnModes="btnModes" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from "vue-router"
import specification from './specification.vue'
export default {
  components: {
    specification
  },
  setup() {
    const store = useStore()
    const route = useRoute()

    const specificationsState = computed(() => store.state.productInform.specifications)
    const btnModes = computed(() => {
      const result = []
      // const modeList = Object.keys(specificationsState.value['multifunctional heat pump (with dehumidifying function)'])
      // const productSelected = computed(() => route.params.productSelected)
      const productSelected = route.params.productSelected
      // const modeList = Object.keys(specificationsState.value[productSelected.value])
      const modeList = Object.keys(specificationsState.value[productSelected])
      modeList.forEach((elem, index) => {
        if (!index) {
          result.splice(0, 0, {
            name: index,
            label: elem,
            color: 'btn-on-color',
            selected: true
          })
        } else {
          result.splice(result.length, 0, {
            name: index,
            label: elem,
            color: 'btn-off-color',
            selected: false
          })
        }
      })
      return result
    })
    const btnClicked = (item) => {
      if (!item.selected) {
        btnModes.value.forEach (elem => {
          elem.selected = !elem.selected
          elem.color = elem.selected ? 'btn-on-color' : 'btn-off-color'
        })
      }
    }

    return {
      btnModes,
      btnClicked
    }
  }
}
</script>

<style lang="scss" scoped>
  .header, .btn-mode {
    width: 100%;
  }
  // // min-width of tablet
  @media screen and (min-width: 768px) {
    .header {
      width: 40%;
    }
    .btn-mode {
      width: 60%;
    }
  }

  .bg-btn-on-color {
    background: $major-font-color;
  }
  .bg-btn-off-color {
    background: $major-color;
  }
</style>