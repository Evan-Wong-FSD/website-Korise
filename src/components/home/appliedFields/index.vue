<template>
  <h1>
    {{$t("['Applied fields'].title")}}
  </h1>

  <div class="row wrap q-gutter-y-lg">
    <div class="container rounded-borders" v-for="item of fieldsState">
      <!-- <q-img
        class="rounded-borders relative-position"
        :ratio="1"
        loading="lazy"
        :src="item.image"
        @click="selectField(item.name, item.label)"
      >
        <div class="absolute text-center content">
          {{$t(`['Applied fields'].options.${item.name}`)}}
          <q-icon name="far fa-hand-point-up" class="icon-click text-grey-4" />
        </div>
      </q-img> -->

      <div class="relative-position wrap-img" @click="selectField(item.name, item.label)">
        <picture>
            <source :srcset="appliedFieldsImageState.small[item.name]" media="(max-width: 767px)">
            <source :srcset="appliedFieldsImageState.medium[item.name]" media="(max-width: 1199px)">
            <source :srcset="appliedFieldsImageState.large[item.name]" media="(max-width: 1940px)">
            <img
              :src="appliedFieldsImageState.original[item.name]"
              :alt="item.label"
              class="rounded-borders"
            >
        </picture>
        <div class="absolute rounded-borders text-center content">
          {{$t(`['Applied fields'].options.${item.name}`)}}
          <q-icon name="far fa-hand-point-up" class="icon-click text-grey-4" />
        </div>
      </div>

      <!-- image: item.image -->
      <appliedFieldIntro :field="{ name: item.name, label: item.label }" @close="closeDialog" />
    </div>
  </div>
</template>

<script>
import { v4 as randomId } from "uuid"
import { useStore } from 'vuex'
import appliedFieldIntro from 'src/components/home/appliedFields/appliedFieldIntro.vue'
export default {
  components: {
    appliedFieldIntro
  },
  setup() {
    const store = useStore()

    const fieldsState = store.state.appliedFields.fields
    const appliedFieldsImageState = store.state.images.appliedFields

    const selectField = (fieldName, fieldLabel) => {
      store.commit('appliedFields/updateState', { key: 'field', value: { name: fieldName, label: fieldLabel } })
    }
    const closeDialog = () => {
      store.commit('appliedFields/updateState', { key: 'field', value: { name: undefined, label: undefined } })
    }

    return {
      fieldsState,
      appliedFieldsImageState,
      closeDialog,
      selectField
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    font-size: 0.9em;
    width: 50%;
    padding: 0 3%;
    position: relative;
    cursor: pointer;
    transition: 0.2s;
  }
  .container:active {
    transform: translateY(10px);
  }
  .container::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    border: 3px black solid;
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(6px);
    filter: blur(5px);
  }
  .container:active::after {
    border-color: transparent;
  }

  .wrap-img {
    overflow:hidden;
  }

  img {
    vertical-align: top;
    aspect-ratio: 1;
    object-fit: cover;
    width: 100%;    
  }

  .content {
    width: 100%;
    bottom: 0;
    color: white;
    background-color: rgba(1, 1, 1, 0.5);
    padding: 5% 0;
  }

  .icon-click {
    display: none;
  }

  // min-width of tablet
  @media screen and (min-width: 768px) {
    .container {
      font-size: 1em;
      width: 25%;
    }
  }

  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .container {
      font-size: 2em;
    }
    .container:hover {
      transform: translateY(-10px);
    }
    .container:active {
      transform: translateY(4px);
    }

    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      bottom: -75%;
      transition: 0.5s;
    }
    .container:hover .content {
      bottom: 0;
    }

    .icon-click {
      display: block;
      margin: auto;
      font-size: 3em;
    }
    .container:hover .content .icon-click {
      animation: hint-click 0.8s 0.5s linear infinite alternate ;
    }
    @keyframes hint-click {
      0% { transform: scale(1); }
      100% { transform: scale(0.8); }
    }
  }
</style>