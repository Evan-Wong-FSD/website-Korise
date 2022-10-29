<template>
  <footer class="q-mt-md">
    <tabletFooter v-if="$q.platform.is.mobile" />
    <desktopFooter v-if="$q.platform.is.desktop" />
  </footer>
</template>

<script>
import tabletFooter from './tablet'
import desktopFooter from './desktop'
export default {
  components: {
    tabletFooter,
    desktopFooter
  },
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
  footer {
    background-color: $minor-color;
  }
</style>