<template>
  <div class="column">
    <h2>
      產品特點
    </h2>

    <div>
      <ul>
        <li v-for="item of properties">
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
    const properties = reactive([
      {
        name: 'first',
        label: '高感度電子溫控開關,精確控制製程加工液所需的溫度(精度±0.5℃)。'
      },
      {
        name: 'second',
        label: '採用歐洲知名品牌壓縮機及循環水泵,低噪音、高E.E.R值,省電效率高。'
      },
      {
        name: 'third',
        label: '另有雙溫系統可供選擇,提供安全的鏡片冷卻。'
      },
      {
        name: 'fourth',
        label: '免用冷卻水塔,維護及安裝方便。'
      },
      {
        name: 'fifth',
        label: '蓄冷槽可依使用需求將多餘能量儲存。'
      },
      {
        name: 'sixth',
        label: '微電腦自動控制面板,操作方便、維修容易。'
      },
      {
        name: 'seventh',
        label: '多重的安全保護裝置、延時及自動復位運行功能及故障指示燈,確保使用的安全及便利性。'
      },
      {
        name: 'eighth',
        label: '不鏽鋼板式熱交換器,大幅提升冷卻效率,節省能源20%。'
      },
      {
        name: 'ninth',
        label: '不生鏽開放式水箱,無排氣的問題,清洗及維護方便。'
      },
      {
        name: 'tenth',
        label: '手動及自動兩種注水方式,搭配水位不足警示燈,無缺水困擾。'
      },
      {
        name: 'eleventh',
        label: '完善的防震裝置及腳輪設計,安裝及活動方便。'
      }
    ])

    return {
      properties
    }
  }
}
</script>

<style lang="scss" scoped>

</style>