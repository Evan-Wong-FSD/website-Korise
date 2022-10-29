<template>
  <q-dialog persistent v-model="open" v-if="open">
    <q-card style="width: 70vw" class="bg-grey-2">
      <div class="row justify-between">
        <div class="q-ml-md text-bold text-grey-10" style="font-size: 1.5em">產業領域</div>
        <q-btn icon="close" flat round dense v-close-popup />
      </div>

      <q-list separator class="text-grey-9">
        <!-- <q-item clickable v-close-popup @click="selectOption(tabAll.name, tabAll.label), closeTabPanel()">
          <q-item-section><p style="margin: 0 auto;">{{tabAll.label}}</p></q-item-section>
        </q-item> -->
        <q-item clickable v-close-popup @click="selectOption('all', '全部'), closeTabPanel()">
          <q-item-section><p style="margin: 0 auto;">全部</p></q-item-section>
        </q-item>

        <q-item clickable v-close-popup v-for="item of fields" @click="selectOption(item.name, item.label)">
          <q-item-section><p style="margin: 0 auto;">{{item.label}}</p></q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script>
import { v4 as randomId } from "uuid"
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['open'],
  emits:['closeLoadingTabMenu', 'closeTabPanel'],
  setup (props,context) {
    const store = useStore()
    const { fields } = store.state.appliedFields

    // const tabAll = reactive({
    //   // key: randomId(),
    //   name: 'all',
    //   label: '全部'
    // })

    const selectOption = (filedName, filedLabel) => {
      store.commit('productIntro/updateState', { key: 'tab', value: { name: filedName, label: filedLabel } })
    }

    const closeTabPanel = () => {
      context.emit('closeTabPanel')
    }

    watch(() => props.open, (newValue,oldValue) => {
      if (!newValue) {
        context.emit('closeLoadingTabMenu')
      }
    })

    return {
      // tabAll,
      selectOption,
      closeTabPanel,
      fields
    }
  }
}
</script>

<style lang="scss" scoped>

</style>