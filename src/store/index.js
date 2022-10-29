import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import scrollArea from './module-scrollArea'
import appliedFields from './module-appliedFields'
import productIntro from './module-productIntro'
import productInform from './module-productInform'
import images from './module-images'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      scrollArea,
      appliedFields,
      productIntro,
      productInform,
      images
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
