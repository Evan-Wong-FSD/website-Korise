import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { i18n } from 'boot/i18n'
import { api } from 'boot/axios'
import { Quasar } from 'quasar'
// import { useRouter, useRoute } from "vue-router"

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  // if (process.env.CLIENT) {
  //   Router.beforeEach(async (to, from) => {
  //     const detectingLocale = Quasar.lang.getLocale()
  //     if (to.path === '/') {
  //       // set locale and message
  //       await api.post('/getLocale', { detectingLocale: detectingLocale.toLowerCase() }).then((res) => {
  //         const { message } = res.data
  //         i18n.global.setLocaleMessage(detectingLocale, message)
  //         i18n.global.locale = detectingLocale
  //       })
  //       return { name: 'Home', params: { language: detectingLocale } }
  //     } else if (to.path === `/${to.params.language}`) {
  //       var isLocaleAvailable = undefined
  //       const locale = to.params.language // use the language from the routing param or default language
  //       if (i18n.global.locale !== locale) {
  //         if (i18n.global.availableLocales.includes(locale)) {
  //           i18n.global.locale = locale
  //         } else {
  //           // fetch switched locale and message
  //           await api.post('/switchLanguage', { locale: locale.toLowerCase() }).then((res) => {
  //             const { message } = res.data
  //             if (message) {
  //               i18n.global.setLocaleMessage(locale, message)
  //               isLocaleAvailable = true
  //             } else {
  //               isLocaleAvailable = false
  //             }
  //           })
  //           return isLocaleAvailable
  //             ? undefined // the navigation is validated
  //             : { name: 'error' }
  //         }
  //       }
  //     }
  //     // next()
  //   })
  // }

  return Router
})

// function setLocaleAndMessage (detectingLocale) {
//   api.post('/getLocale', { detectingLocale: detectingLocale.toLowerCase() }).then((res) => {
//     const { message } = res.data
//     i18n.global.setLocaleMessage(detectingLocale, message)
//     i18n.global.locale = detectingLocale
//   })
// }

// function apiSwitchLanguage (locale, isLocaleAvailable) {
//   api.post('/switchLanguage', { locale: locale.toLowerCase() }).then((res) => {
//     const { message } = res.data
//     if (message) {
//       i18n.global.setLocaleMessage(locale, message)
//       isLocaleAvailable = true
//     } else {
//       isLocaleAvailable = false
//     }
//   })
// }
