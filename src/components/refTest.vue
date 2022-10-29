<template>
    <div v-for="(item, index) in list" :key="index" :ref="setItemRef">{{item}}</div>
</template>

<script>
import { reactive, onBeforeUpdate, onUpdated, onMounted } from 'vue'

export default {
  setup() {
    const list = reactive(['a', 'b', 'c'])
    let itemRefs = []
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onMounted(() => {
      console.log('itemRefs')
      console.log(itemRefs)
      itemRefs[0].innerHTML = 'A'
    })

    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })
    return {
      setItemRef,
      list
    }
  }
}
</script>
