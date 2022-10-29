<template>
  <section class="segment">
    <section class="container">
      <h3>瑋安企業有限公司</h3>
    </section>

    <q-separator spaced class="separator" />

    <section class="container">
      <!-- <h4 v-for="(value, key) of firmInform">{{value.label}}：{{value.value}}</h4> -->
      <a v-for="(value, key) of firmInform">{{value.label}}：{{value.value}}</a>
    </section>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'
export default {
  setup() {

    const firmInform = reactive({
      phoneNumber: {
        label: '連絡電話',
        value: '02-82927060'
      },
      faxNumber: {
        label: '傳真',
        value: '02-82927201'
      },
      email: {
        label: 'Email',
        value: 'korise.k3767@msa.hinet.net'
      },
      taxIdNumber: {
        label: '統編',
        value: '22738833'
      },
      address: {
        label: '地址',
        value: '臺灣新北市五股區五工路 138 號'
      }
    })

    return {
      firmInform
    }
  }
}
</script>

<style lang="scss">
  .separator {
    width: 90%;
    margin: 0 auto;
  }
</style>
