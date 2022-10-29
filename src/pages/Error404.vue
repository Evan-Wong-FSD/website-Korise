<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <!-- :to="`/${detectingLocale}`" -->
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        @click="redirect()"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
// import { defineComponent } from 'vue'

// export default defineComponent({
import { useRouter } from "vue-router"
import { useQuasar } from 'quasar'
import { i18n } from 'boot/i18n'
import getLocale from 'src/method/language/getLocale.js'
export default {
  name: 'Error404',
  setup () {
    const router = useRouter()
    const $q = useQuasar()
    const detectingLocale = $q.lang.getLocale()

    // const redirect = async () => {
    const redirect = () => {
      // if (!i18n.global.locale) {
      if (i18n.global.locale !== detectingLocale) {
        // await getLocale(detectingLocale)
        getLocale(detectingLocale)
      }
      // In spa mode, components exchange will not call "app.vue"
      router.push({ name: 'Home', params: { language: detectingLocale } })
    }

    return {
      // detectingLocale
      redirect
    }
  }
}
</script>
