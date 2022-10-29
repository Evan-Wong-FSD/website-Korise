<template>
  <!-- style="border: 3px black solid;" -->
  <div>
    <q-scroll-area ref="scrollAreaRef" class="scrollArea">
      <div class="row q-gutter-md q-mt-xl">
        <q-btn :label="`Scroll to ${position}px`" color="primary" @click="scroll" />
        <q-btn :label="`Animate to ${position}px`" color="primary" @click="animateScroll" />
      </div>

      <ol>
        <li v-for="n in 1000" :key="n">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </li>
      </ol>
    </q-scroll-area>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props:['pageHeight'],
  setup (props,context) {
    const position = ref(300)
    const scrollAreaRef = ref(null)
    var pageHeight = ref(undefined)

    const scroll = () => {
      scrollAreaRef.value.setScrollPosition('vertical', position.value)
      position.value = Math.floor(Math.random() * 1001) * 20
    }
    const animateScroll = () => {
      scrollAreaRef.value.setScrollPosition('vertical', position.value, 300)
      position.value = Math.floor(Math.random() * 1001) * 20
    }

    watch(() => props.pageHeight, (newValue,oldValue) => {
      pageHeight.value = `${newValue}px`
    })

    return {
      pageHeight,
      position,
      scrollAreaRef,
      scroll,
      animateScroll
    }
  }
}
</script>

<style lang="scss" scoped>
  .scrollArea {
    height: v-bind(pageHeight);
    // border:3px red solid;
  }
</style>
