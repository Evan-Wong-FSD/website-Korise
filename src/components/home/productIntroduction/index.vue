<template>
  <h1>
    產品簡介
  </h1>

  <q-tabs
    v-model="tabState.name"
    inline-label
    outside-arrows
    mobile-arrows
    active-color="acticeColor"
    indicator-color="acticeColor"
    align="justify"
    no-caps
    class="text-bold text-grey-7 tabs"
  >
    <tabForMobile @closeTabPanel="closeTabPanel" v-if="showTabForMobile" />
    <tabForTablet @closeTabPanel="closeTabPanel" v-if="showTabForTablet" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tabState.name" animated class="tab-panels">
    <q-tab-panel name="all" class="tab-panel">

      <q-splitter
        v-model="splitterModel"
        :limits="splitterLimits"
        separator-class="transparent"
      >

        <template v-slot:before>
          <q-tabs
            v-model="innerTabState.name"
            v-if="!innerTabState.name"
            vertical
            class="text-bold"
          >
            <template v-for="(item, index) of productsState" :key="item.key">
              <q-tab :name="item.name" class="tabName" @click="openTabPanel(item.name, item.label)"><p>{{item.label}}</p></q-tab>
              <q-separator spaced v-if="index < productsState.length - 1" />
            </template>
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="innerTabState.name"
            animated
            transition-prev="slide-left"
            transition-next="slide-left"
          >
            <q-tab-panel :name="innerTabState.name" class="inner-tab-panel">
              <!-- :innerTab="innerTabState.name" -->
              <tabPanelContainer @closeTabPanel="closeTabPanel" />
            </q-tab-panel> -->
          </q-tab-panels>
        </template>

      </q-splitter>
    </q-tab-panel>

    <q-tab-panel :name="item.name" v-for="item of fields">
      <div class="tab-panel-title">{{item.label}}</div>
      <p class="text-grey-9 tab-panel-text">話河府另不，員皮說他之書下一假聲為，媽空如健，一國上候思水馬痛史日新就答視費現問年白治形解時發願的常畫健是看？日行決士並色華各十加樹實了先供子論重用主業收家兩機主：當子化們這一會面然學未童。畫策必倒感非發減就告強他係舉些苦。</p>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted, computed, watch } from 'vue'
import { useWindowSize } from 'vue-window-size'
import tabForMobile from 'src/components/home/productIntroduction/mobile/tabForMobile.vue'
import tabForTablet from 'src/components/home/productIntroduction/tablet/tabForTablet.vue'
import tabPanelContainer from 'src/components/home/productIntroduction/tabPanelContainer.vue'
export default {
  components: {
    tabForTablet,
    tabForMobile,
    tabPanelContainer
  },
  setup () {
    const store = useStore()
    const productsState = store.state.productIntro.products
    const { fields } = store.state.appliedFields

    store.commit('productIntro/updateState', { key: 'tab', value: { name: 'all', label: '全部' } })
    store.commit('productIntro/updateState', { key: 'innerTab', value: { name: undefined, label: undefined } })
    const tabState = computed(() => store.state.productIntro.tab)
    const innerTabState = computed(() => store.state.productIntro.innerTab)
    const { width } = useWindowSize()
    const splitterModel = ref(100) // start at 100%
    var showTabForMobile = ref(false)
    var showTabForTablet = ref(false)
    var splitterMinLimit = ref(100)
    var splitterMaxLimit = ref(100)
    const splitterLimits = computed(() => [splitterMinLimit.value, splitterMaxLimit.value])

    const openTabPanel = (productName, productLabel) => {
      store.commit('productIntro/updateState', { key: 'innerTab', value: { name: productName, label: productLabel } })
    }
    const closeTabPanel = () => {
      store.commit('productIntro/updateState', { key: 'innerTab', value: { name: undefined, label: undefined } })
    }
    const tabPanelTransition = (change) => {
      requestAnimationFrame(transition)
      function transition () {
        splitterMinLimit.value = splitterMinLimit.value + 4 * change
        splitterMaxLimit.value = splitterMaxLimit.value + 4 * change
        if ((splitterMinLimit.value > 0 && splitterMaxLimit.value > 0) && (splitterMinLimit.value < 100 && splitterMaxLimit.value < 100)) {
          requestAnimationFrame(transition)
        } else if (splitterMinLimit.value <= 0 && splitterMaxLimit.value <= 0) {
          splitterMinLimit.value = 0
          splitterMaxLimit.value = 0
          // cancelAnimationFrame(transition)
        } else if (splitterMinLimit.value >= 100 && splitterMaxLimit.value >= 100) {
          splitterMinLimit.value = 100
          splitterMaxLimit.value = 100
          // cancelAnimationFrame(transition)
        }
      }
    }

    onMounted(() => {
      width.value < 768
        ? showTabForMobile.value = true
        : showTabForTablet.value = true
    })

    watch(() => innerTabState.value, (newValue,oldValue) => {
      if (newValue.name) {
        tabPanelTransition(-1)
      } else {
        tabPanelTransition(1)
      }
    })

    return {
      tabState,
      innerTabState,
      width,
      showTabForMobile,
      showTabForTablet,
      splitterModel,
      closeTabPanel,
      splitterLimits,
      openTabPanel,
      productsState,
      fields
    }
  }
}
</script>

<style lang="scss">
  .text-acticeColor {
    color: $major-font-color;
  }

  .tabs {
    background-color: $major-color;
    font-size: 1.3em;
    border-radius: 10px 10px 0 0;
  }

  .tab-panels {
    background-color: $minor-bgColor;
    border-radius: 0 0 10px 10px;
  }

  .tab-panels .tab-panel-title {
    font-size: 2em;
    font-weight: bold;
    color: $major-font-color;
  }

  .tab-panels .tab-panel-text {
    font-size: 1.5em;
  }
  
  .tab-panel {
    padding: 2.5%; 
  }

  .inner-tab-panel {
    padding: 0;
  }

  .tabName {
    transition: 0.2s;
    font-size: 1.3em;
    color: $major-font-color;
  }
  .tabName:hover {
    font-size: 2em;
    color: $focusColor;
  }
  .tabName p {
    margin: auto;
  }
</style>
