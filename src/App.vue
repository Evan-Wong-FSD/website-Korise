<template>
  <router-view />
</template>

<script>
import { useRouter, useRoute } from "vue-router"
import { onBeforeMount } from 'vue'
import { useQuasar } from 'quasar'
import getLocale from 'src/method/language/getLocale.js'
export default {
  name: 'App',
  setup () {
    const router = useRouter()
    const route = useRoute()
    onBeforeMount (async () => {
      // enter url will call "app.vue"
      if (route.name) {
        const language = route.params.language
        // set locale and message
        getLocale(language)
        router.push({ params: { language } })
      } else {
        const $q = useQuasar()
        const detectingLocale = $q.lang.getLocale()
        // set locale and message
        getLocale(detectingLocale)
        router.push({ name: 'Home', params: { language: detectingLocale } })
      }
    })
  }
}
</script>
