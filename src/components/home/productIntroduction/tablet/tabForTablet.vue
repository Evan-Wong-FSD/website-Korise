<template>
  <q-tab name="all" @click="changeTab('all', '全部'), closeTabPanel()">全部</q-tab>

  <q-tab :name="item.name" @click="changeTab(item.name, item.label)" v-for="item of fieldsState">
    {{item.label}}
  </q-tab>
</template>

<script>
import { useStore } from 'vuex'
export default {
  emits: ['closeTabPanel'],
  setup(props,context) {
    const store = useStore()
    const fieldsState = store.state.appliedFields.fields

    const changeTab = (filedName, filedLabel) => {
      store.commit('productIntro/updateState', { key: 'tab', value: { name: filedName, label: filedLabel } })
    }
    const closeTabPanel = () => {
      context.emit('closeTabPanel')
    }

    return {
      closeTabPanel,
      changeTab,
      fieldsState
    }
  }
}
</script>

<style lang="scss" scoped>

</style>