<template>
  <q-btn
    flat
    :loading="tabLoading"
    color="tabBackgroundColor"
    text-color="tabTextColor"
    icon-right="arrow_drop_down"
    :label="tabState.label"
    class="text-bold btn-tab"
    @click="startLoadingTabMenu"
  />

  <tabMenu
    :open="tabLoading"
    @closeLoadingTabMenu="closeLoadingTabMenu"
    @closeTabPanel="closeTabPanel"
    v-if="tabLoading"
  />
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import tabMenu from 'src/components/home/productIntroduction/mobile/tabMenu.vue'
export default {
  components: {
    tabMenu
  },
  emits: ['returnTabName', 'closeTabPanel'],
  setup(props,context) {
    const store = useStore()
    
    var tabLoading = ref(false)
    const tabState = computed(() => store.state.productIntro.tab)
    
    const startLoadingTabMenu = () => {
      tabLoading.value = true
    }
    const closeLoadingTabMenu = () => {
      tabLoading.value = false
    }
    const closeTabPanel = () => {
      context.emit('closeTabPanel')
    }

    return {
      tabState,
      tabLoading,
      startLoadingTabMenu,
      closeLoadingTabMenu,
      closeTabPanel
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-tab {
    font-size: 1.3em;
    margin: 0 auto;
  }
  .text-tabTextColor {
    color: $major-font-color;
  }
  .bg-tabBackgroundColor {
    background: $major-color;
  }
</style>