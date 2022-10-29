<template>
  <!-- style="border: 3px red solid;" -->
  <q-layout view="lHh LpR fFf">

    <!-- <q-header class="bg-primary text-white"> -->
    <!-- style="border: 3px blue solid;" -->
    <q-header class="transparent relative-position">

      <q-toolbar>
        <q-btn dense color="white" :icon-right="leftMenuBtnDirection" @click="toggleLeftDrawer" v-if="$q.platform.is.desktop" class="btn-leftMenu bg-grey-9 fixed" :style="leftMenuBtnTransform"><p>點 我</p></q-btn>

        <q-btn dense flat round icon="menu" color="black" v-if="$q.platform.is.mobile" @click="toggleRightDrawer" class="btn-rightMenu absolute-top-right q-my-sm q-mr-md" />
      </q-toolbar>
    </q-header>

    <!-- z-top  -->
    <!-- style="border: 3px green solid;" -->
    <q-drawer v-model="leftDrawerOpen" overlay side="left" behavior="desktop" class="bg-grey-4" bordered :width="leftMenuContentWidth" v-if="$q.platform.is.desktop">
      <menuContent @close="closeDrawer" />
    </q-drawer>

    <!-- style="border: 3px orange solid;" -->
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" class="bg-grey-4" bordered v-if="$q.platform.is.mobile">
      <menuContent @close="closeDrawer" />
    </q-drawer>

    <!-- style="padding: 0;" -->
    <!-- style="border: 3px black solid;" -->
    <q-page-container class="no-padding pageContainer">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { useWindowSize } from 'vue-window-size'
import { useStore } from "vuex"
import menuContent from 'src/components/home/menu'
// import { useQuasar } from 'quasar'

export default {
  components: {
    menuContent
  },
  setup () {
    // const $q = useQuasar()
    // $q.screen.setSizes({ sm: 767, md: 1199, lg: 1920 })

    // const store = useStore()
    const { width } = useWindowSize()

    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    // need to be modified for RWD
    const leftMenuContentWidth = computed(() => {
      return width.value > 500 ? width.value * 0.2 : 383
    })
    const leftMenuBtnTransform = computed(() => 
      leftDrawerOpen.value
        ? `transform: translateX(${leftMenuContentWidth.value}px)`
        : 'transform: translateX(0)'
    )
    const leftMenuBtnDirection = computed(() => 
      leftDrawerOpen.value
        ? 'chevron_left'
        : 'chevron_right'
    )

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }
    const closeDrawer = () => {
      leftDrawerOpen.value = false
      rightDrawerOpen.value = false
    }

    return {
      leftMenuBtnDirection,
      leftMenuBtnTransform,
      leftMenuContentWidth,
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      closeDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-leftMenu {
    transition: .1s;
    left: 0;
    height: 10%;
    border-radius: 0 10% 10% 0;
    top: 25%;
  }

  .btn-leftMenu p {
    margin: 0;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    word-spacing: .3em;
    font-size: 1.3em;
  }

  .btn-rightMenu {
    font-size: 1.5em;
  }

  .pageContainer {
    background-color: #f5f5f5;
  }
</style>
