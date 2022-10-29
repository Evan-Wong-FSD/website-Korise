<template>
  <h1>建立聯繫</h1>

  <div class="container">
    <strong class="appeal">對我們的產品感興趣嗎？歡迎來跟我們聊聊！填寫以下表單，我們將儘快與您聯繫。</strong>
    <q-form @submit="onSubmit" class="q-gutter-y-md q-mt-md form">
      <template v-for="(item, index) of inputBox">
        <q-input
          dense
          filled
          :label="item.label"
          class="input"
          color="grey-10"
          standout="bg-grey-4 text-grey-10"
          v-if="item.name !== 'demand' && item.name !== 'email'"
          :model-value="item.value"
          @update:model-value="(value) => inputMessage(value, index)"
        />

        <q-input
          dense
          filled
          :label="item.label"
          class="input"
          type="email"
          color="grey-10"
          standout="bg-grey-4 text-grey-10"
          v-else-if="item.name === 'email'"
          :model-value="item.value"
          @update:model-value="(value) => inputMessage(value, index)"
        />

        <q-input
          dense
          filled
          :label="item.label"
          class="input-textarea"
          type="textarea"
          color="grey-10"
          standout="bg-grey-4 text-grey-10"
          v-else
          :model-value="item.value"
          @update:model-value="(value) => inputMessage(value, index)"
        />
      </template>

      <div class="btn-submit">
        <q-btn type="submit" color="submitColor" class="text-grey-7 text-bold" label="送出" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
export default {
  setup() {
    const $q = useQuasar()

    const inputBox = reactive([
      {
        name: 'name',
        label: '姓名',
        value: undefined
      },
      {
        name: 'title',
        label: '職稱 (選填)',
        value: undefined
      },
      {
        name: 'firmName',
        label: '公司名稱',
        value: undefined
      },
      {
        name: 'industry',
        label: '產業類別',
        value: undefined
      },
      {
        name: 'email',
        label: 'Email',
        value: undefined
      },
      {
        name: 'phoneNumber',
        label: '聯絡電話 (分機)',
        value: undefined
      },
      {
        name: 'address',
        label: '地址',
        value: undefined
      },
      {
        name: 'demand',
        label: '請說明您的需求',
        value: undefined
      }
    ])

    const inputMessage = (value, index) => {
      inputBox[index].value = value
    }
    const onSubmit = () => {
      const clientInform = inputBox.reduce((total, elem, index) => {
        if (index === 1) {
          total = Object.fromEntries([[total.name, total.value]])
        }
        return { ...total, ...Object.fromEntries([[elem.name, elem.value]]) }
      })
      const isValid = Object.keys(clientInform).findIndex(elem => elem !== 'title' && !Boolean(clientInform[elem])) === -1
      if (isValid) {
        api.post('/clientInform', { clientInform }).then((res) => {
          // $q.notify({
          //   type: 'positive',
          //   icon: 'email',
          //   message: '信件已送出，感謝您對瑋安的支持，我們將會儘快與您聯繫。'
          // })
          notify('positive', 'email', '信件已送出，感謝您對瑋安的支持，我們將會儘快與您聯繫。')
        })
        inputBox.forEach(elem => {
          elem.value = undefined
          return
        })
      } else {
        notify('warning', 'warning', '除了選填欄位，所有欄位不能留空。')
      }
    }
    const notify = (type, icon, message) => $q.notify({ type, icon, message })

    return {
      inputBox,
      inputMessage,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 80%;
    margin: 0 auto;
  }

  .appeal {
    color: $minor-font-color;
  }

  .bg-submitColor {
    background: $major-color;
  }
  .btn-submit {
    display: flex;
    justify-content: center;
  }

  // min-width of tablet
  @media screen and (min-width: 768px) {
    strong {
      font-size: 1.2em;
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    }

    .input {
      width: 50%;
      padding: 0 2.5%;
    }

    .input-textarea {
      width: 100%;
      padding: 0 2.5%;
    }

    .btn-submit {
      margin: 0 auto;
      // padding: 2% 0;
      padding-top: 2%;
    }
  }

  // min-width of desktop
  @media screen and (min-width: 1200px) {
    .appeal {
      padding-left: 2.5%;
    }
  }
</style>