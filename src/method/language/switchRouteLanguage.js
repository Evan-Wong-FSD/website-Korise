import { i18n } from 'boot/i18n'
import { api } from 'boot/axios'

export default async function (router, route) {
  // use the language from the routing param or default language
  const locale = route.params.language
  if (i18n.global.availableLocales.includes(locale)) {
    i18n.global.locale = locale
  } else {
    // fetch switched locale and message
    let isLocaleAvailable = undefined
    await api.post('/getLocale', { locale: locale.toLowerCase() }).then((res) => {
      const { message } = res.data
      if (message) {
        i18n.global.setLocaleMessage(locale, message)
        i18n.global.locale = locale
        isLocaleAvailable = true
      } else {
        isLocaleAvailable = false
      }
    })
    if (!isLocaleAvailable) {
      router.push({ name: 'error' })
    }
  }
}
