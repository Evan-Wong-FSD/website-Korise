<template>
  <div class="wrap text-bold">
    <q-list separator>
      <template v-for="item in items" :key="item.key">
        <q-item v-if="item.name === 'about us'" clickable v-ripple @click="close(), toAboutUs()">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{$t(`Menu.${item.name}`)}}</q-item-section>
        </q-item>

        <q-item v-else clickable v-ripple @click="close(), scroll(item.name)">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{$t(`Menu.${item.name}`)}}</q-item-section>
        </q-item>
      </template>

      <!-- label="產業領域" -->
      <q-expansion-item group="menu" icon="outlined_flag" :label="$t('Menu.fields.label')" expand-icon-class="text-lightCyan">
        <q-list separator class="expansionContainer">
          <q-item clickable v-ripple v-for="item of fields" @click="close(), scrollToFieldSelected(item.name, item.label)">
            <q-item-section>{{item.label}}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <!-- label="產品名稱" -->
      <q-expansion-item group="menu" icon="more" :label="$t('Menu.products.label')" expand-icon-class="text-lightCyan">
        <q-list separator class="expansionContainer">
          <q-item clickable v-ripple v-for="item in productsState" :key="item.key" @click="close(), scrollToProductInform(item.name, item.label)">
            <q-item-section>{{item.label}}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-no-ssr>
        <q-expansion-item group="menu" icon="public" :label="displayLanguage" expand-icon-class="text-lightCyan">
          <q-list separator class="expansionContainer">
            <q-item clickable v-ripple @click="switchLanguage(item.ISO)" v-for="item in expansionItem.languages" :key="item.key">
              <q-item-section>{{item.label}}</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-no-ssr>

      <q-item class="item-knowMore"> <!-- 需要再加上padding -->
        <q-btn push color="warning" :label="$t('Menu.contact us')" class="btn-knowMore text-bold" @click="close(), scrollToContactUs()" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { v4 as randomId } from "uuid"
import { useRouter, useRoute } from "vue-router"
import { reactive, toRefs, computed, onMounted, watchEffect } from 'vue'
import { homeGuard } from 'src/method/homeGuard.js'
import switchRouteLanguage from 'src/method/language/switchRouteLanguage.js'
import scrollToTarget from 'src/method/scrollToTarget.js'
export default {
  name: 'menu',
  emits: ['close'],
  setup (props, context) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const scrollAreaRef = computed(() => store.state.scrollArea.scrollAreaRef)
    const elementOffsetTop = computed(() => store.state.scrollArea.elementOffsetTop)
    const productsState = store.state.productIntro.products
    const { fields } = store.state.appliedFields
    const basicOptions = reactive({
      items: [
        {
          key: randomId(),
          name: 'about us',
          label: '關於我們',
          icon: 'info'
        },
        {
          key: randomId(),
          name: 'applied fields',
          label: '應用領域',
          icon: 'precision_manufacturing'
        },
        {
          key: randomId(),
          name: 'product introduction',
          label: '產品簡介',
          icon: 'feed'
        }
      ],
      expansionItem: {
        languages: [
          {
            key: randomId(),
            label: '繁體中文',
            ISO: 'zh-TW'
          },
          {
            key: randomId(),
            label: '简体中文',
            ISO: 'zh-CN'
          },
          {
            key: randomId(),
            label: 'English',
            ISO: 'en'
          },
        ]
      }
    })

    const displayLanguage = computed(() => {
      if (process.env.CLIENT && route.params.language) {
        const userSelectLanguage = route.params.language.toLowerCase()
        if (userSelectLanguage === 'zh-tw' || userSelectLanguage === 'zh-hk') {
          return '繁體中文'
        } else if (userSelectLanguage === 'zh-cn' || userSelectLanguage === 'zh-sg') {
          return '简体中文'
        } else {
          return 'English'
        }
      }
    })

    const switchLanguage = async (ISO) => {
      await router.push({ params: { language: ISO } })
      switchRouteLanguage(router, route)
    }
    const close = () => {
      context.emit('close')
    }
    const scroll = async (itemName) => {
      if (itemName === 'applied fields') {
        itemName = 'appliedFields'
      } else if (itemName === 'product introduction') {
        itemName = 'productIntroduction'
      }
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value[itemName])
    }
    const scrollToFieldSelected = async (fieldName, fieldLabel) => {
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.appliedFields)
      store.commit('appliedFields/updateState', { key: 'field', value: { name: fieldName, label: fieldLabel } })
    }
    const scrollToProductInform = async (productName, productLabel) => {
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.productIntroduction)
      store.commit('productIntro/updateState', { key: 'tab', value: { name: 'all', label: '全部' } })
      store.commit('productIntro/updateState', { key: 'innerTab', value: { name: productName, label: productLabel } })
    }
    const scrollToContactUs = async () => {
      await homeGuard(route, router.push)
      scrollToTarget(scrollAreaRef.value, elementOffsetTop.value.contactUs)
    }
    const toAboutUs = () => {
      router.push({ name: 'AboutUs' })
    }

    return {
      displayLanguage,
      ...toRefs(basicOptions),
      randomId,
      switchLanguage,
      productsState,
      fields,
      close,
      scroll,
      scrollToFieldSelected,
      scrollToProductInform,
      scrollToContactUs,
      toAboutUs
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    margin: 0 auto;
    background-color: $major-color;
    color: $major-font-color;
    width:inherit;
  }

  .wrap .expansionContainer {
    background-color: $minor-color;
    color: $minor-font-color;
  }

  .wrap .item-knowMore {
    background-color: $menu-bgColor;
    padding: 2.5em 0;
  }

  .wrap .btn-knowMore {
    margin: 0 auto;
    font-size: 1.2em;
  }

  .text-lightCyan {
    color: #E0FBFC;
  }
</style>
