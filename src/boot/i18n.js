import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
// import messages from 'src/i18n'
// import { Quasar } from 'quasar'

// const detectingLocale = Quasar.lang.getLocale()
const i18n = createI18n({
  locale: undefined  // deafult is "en-US"
  // locale: navigator.language ? navigator.language : navigator.userLanguage,
  // messages
  // legacy: false,
  // fallbackLocale: 'en-US'
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
