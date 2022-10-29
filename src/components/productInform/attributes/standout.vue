<template>
  <div class="standoutContainer">
    <div class="outterBox" v-for="item of attributes">
      <div class="innerBox">
        <q-icon size="5em" class="icon" :name="item.icon" />
        <header class="label column justify-center">
          <small>{{item.caption}}</small>
          <strong>{{item.label}}</strong>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const attributes = reactive([
      {
        name: 'one',
        icon: 'thermostat',
        caption: '周圍溫度範圍',
        label: '技術特色'
      },
      {
        name: 'two',
        icon: 'opacity',
        caption: '周圍溼度範圍',
        label: '技術特色'
      },
      {
        name: 'three',
        icon: 'ac_unit',
        caption: '冷卻能力',
        label: '技術特色'
      }
    ])

    return {
      attributes
    }
  }
}
</script>

<style lang="scss" scoped>
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .standoutContainer {
      display: flex;
      justify-content: space-between;
    }
  }

  .outterBox {
    border-top: 2.5px transparent solid;
    border-bottom: 2.5px transparent solid;
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .outterBox {
      border-width: 0;
      border-right: 5px transparent solid;
      width: 100%;    }
  }

  .innerBox {
    display: flex;
    padding: 5% 5% 5% 0;
    background-color: white;
    // border: 2px #f5f5f5 solid;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .innerBox {
      padding: 2% 2% 2% 0;
    }
  }
  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .innerBox {
      padding: 7% 0;
    }
  }

  .icon {
    background-color: $major-font-color;
    color: white;
    padding: 3%;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .icon {
      padding: 1%;
    }
  }

  .label {
    font-size: 1.2em;
    color: $minor-font-color;
    margin-left: 10%;
  }
  .label strong {
    font-size: 1.5em;
    color: $major-font-color;
  }
  // min-width of tablet
  @media screen and (min-width: 768px) {
    .label {
      margin-left: 5%;
    }
  }
</style>