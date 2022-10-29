// import { i18n } from 'boot/i18n'
// import { Quasar } from 'quasar'

// const detectingLocale = Quasar.lang.getLocale()

const routes = [
  {
    path: '/',
    // redirect: `/${detectingLocale}`
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // {
      //   name: 'Home',
      //   path: '/:language',
      //   component: () => import('src/components/picture.vue')
      // }
      {
        name: 'Home',
        path: '/:language',
        component: () => import('src/pages')
      },
      {
        name: 'AboutUs',
        path: 'about_us/:language',
        component: () => import('src/pages/AboutUs')
      },
      {
        name: 'ProductInform',
        path: 'product_inform/:language/:productSelected',
        component: () => import('src/pages/productInform.vue')
      }
    ]
  },
  // {
  //   path: '/:lang',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('src/components/home/menu/menu_mobile_pad.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    name: 'error',
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
