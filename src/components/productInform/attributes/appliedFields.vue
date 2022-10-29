<template>
  <div class="column">
    <h2>
      適用範圍
    </h2>

    <div>
      <ul>
        <li v-for="item of appliedFields">
          <p>{{item.label}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const appliedFields = reactive([
      {
        name: 'first',
        label: '塑膠中空成型模具冷卻'
      },
      {
        name: 'second',
        label: '大型PE塑膠袋冷卻/塑膠淋膜滾輪冷卻'
      },
      {
        name: 'third',
        label: '另有雙溫系統可供選擇,提供安全的鏡片冷卻。'
      },
      {
        name: 'fourth',
        label: '半導體製程設備冷卻、超音波清洗設備'
      },
      {
        name: 'fifth',
        label: '各式機械/雷射切割設備之加工液冷卻'
      },
      {
        name: 'sixth',
        label: '數控機床、磨床、加工中心機、組合機床之主軸潤滑及液壓系統冷卻'
      }
    ])

    return {
      appliedFields
    }
  }
}
</script>

<style lang="scss" scoped>

</style>