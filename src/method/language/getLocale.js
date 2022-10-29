import { i18n } from 'boot/i18n'
import { api } from 'boot/axios'

export default function (detectingLocale) {
  // set locale and message
  api.post('/getLocale', { locale: detectingLocale.toLowerCase() }).then((res) => {
    const { message } = res.data
    i18n.global.setLocaleMessage(detectingLocale, message)
    i18n.global.locale = detectingLocale
  })
}
