<template>
  <q-no-ssr>
    <!-- :autoplay="autoplay" -->
    <!-- @mouseenter="autoplay = false" -->
    <!-- @mouseleave="autoplay = true" -->
    <q-carousel
      animated
      v-model="slide"
      :navigation="fieldsStateForHomeBanner.length > 1"
      :infinite="fieldsStateForHomeBanner.length > 1"
      :arrows="fieldsStateForHomeBanner.length > 1"
      :autoplay="7000"
      height="100vh"
      class="carousel"
      transition-prev="fade"
      transition-next="fade"
      transition-duration="1200"
    >
      <q-carousel-slide :name="item.name" class="no-padding" v-for="item of fieldsStateForHomeBanner">
        <picture class="relative-position">
          <source :srcset="bannerImageState.small[item.name]" media="(max-width: 767px)">
          <source :srcset="bannerImageState.medium[item.name]" media="(max-width: 1199px)">
          <source :srcset="bannerImageState.large[item.name]" media="(max-width: 1940px)">
          <img
            :src="bannerImageState.original[item.name]"
            :alt="item.label"
            class="rounded-borders"
          >
        </picture>

        <logo />

        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <template v-slot:placeholder>
      <div style="width: 100%; height: 100vh;" />
    </template>
  </q-no-ssr>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import logo from 'src/components/carousel/logo.vue'
export default {
  components: {
    logo
  },
  setup () {
    const store = useStore()
    const route = useRoute()

    let bannerImageState = ref(undefined)
    let fieldsStateForHomeBanner = reactive([])
    // const autoplay = ref(true)
    let slide = ref(undefined)

    onMounted(() => {
      handleOrientationChange()
      window.addEventListener("orientationchange", () => {
        handleOrientationChange()
      })
    })

    const handleOrientationChange = () => {
      const orientationType = window.screen.orientation.type
      if (orientationType === "portrait-primary") {
        bannerImageState.value = store.state.images.banner.portrait
        const fieldsList = ['plastic industry', 'printing industry', 'manufacturing', 'clean room']
        handleRouteChange(fieldsList)
      } else if (orientationType === "landscape-primary") {
        bannerImageState.value = store.state.images.banner.landscape
        const fieldsList = ['plastic industry', 'printing industry', 'manufacturing']
        handleRouteChange(fieldsList)
      }
    }
    const handleRouteChange = (fieldsList) => {
      const fieldsState = store.state.appliedFields.fields
      if (route.name === 'Home') {
        fieldsStateForHomeBanner.splice(0, fieldsStateForHomeBanner.length, ...fieldsState.filter(elem => fieldsList.indexOf(elem.name) < 0))
        slide.value = fieldsStateForHomeBanner[0].name
      } else if (route.name === 'AboutUs') {
        fieldsStateForHomeBanner.splice(0, fieldsStateForHomeBanner.length, fieldsState.find(elem => elem.name === 'manufacturing'))
        slide.value = 'manufacturing'
      }
    }

    return {
      slide,
      // autoplay,
      bannerImageState,
      fieldsStateForHomeBanner
    }
  }
}
</script>

<style lang="scss" scoped>
  // .carousel {
  //   max-height: 850px;
  // }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
  }

  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3)
  }
</style>
