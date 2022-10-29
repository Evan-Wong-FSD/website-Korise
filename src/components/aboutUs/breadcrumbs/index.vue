<template>
  <q-breadcrumbs separator=">" class="text-deep-orange-5 q-py-md breadcrumbs" active-color="blue-grey">
    <q-breadcrumbs-el label="首頁" class="breadcrumb-item cursor-pointer" @click="toHome" />
    <q-breadcrumbs-el label="關於我們" />
  </q-breadcrumbs>
</template>

<script>
import { useRouter, useRoute } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    // const route = useRoute()

    const toHome = () => {
      router.push({ name: 'Home' })
    }

    return {
      toHome
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    font-size: 1.2em;
  }

  .breadcrumb-item:hover {
    text-decoration: underline;
  }

  .text-breadcrumbsActiveColor {
    color: #4F607D;
  }
  .bg-breadcrumbsActiveColor {
    background: #4F607D;
  }
</style>