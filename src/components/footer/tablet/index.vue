<template>
    <section class="container">
      <div class="row justify-center">
        <q-img
          :src="logoSrc"
          spinner-color="white"
          class="logo"
        />
      </div>
      <h3>瑋安企業有限公司</h3>
    </section>

    <q-separator spaced class="separator" />

    <section class="container">
      <!-- <h4 v-for="(value, key) of firmInform">{{value.label}}：{{value.value}}</h4> -->
      <a v-for="(value, key) of firmInform">{{value.label}}：{{value.value}}</a>
    </section>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'
export default {
  setup() {
    const logoSrc = require('src/assets/logo/Korise_logo_original.png')

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
      logoSrc,
      firmInform
    }
  }
}
</script>

<style lang="scss">
  // .container {
  //   width: 80%;
  //   margin: 0 auto;
  // }

  .separator {
    width: 90%;
    margin: 0 auto;
  }

  .logo {
    width: 70%;
  }

  // min-width of tablet
  @media screen and (min-width: 768px) {
    .logo {
      width: 50%;
      max-width: 400px;
    }
  }
</style>
