<template>
  <div>
    <q-table
      flat
      wrap-cells
      hide-bottom
      :dense="isTableDense"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :loading="loading"
      v-model:pagination="pagination"
      class="table"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="table-header text-grey-2"
          >
            <strong>{{ col.label }}</strong>
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, reactive, computed, watch } from 'vue'
import { useRouter, useRoute } from "vue-router"
import { useStore } from 'vuex'
export default {
  props: ['btnModes'],
  setup (props,context) {
    const $q = useQuasar()
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const specificationsState = computed(() => store.state.productInform.specifications)
    const loading = ref(false)
    const pagination = ref({ rowsPerPage: 0 })
    const isTableDense = computed(() => $q.screen.width < 1200)
    const rows = reactive([])
    const columns = reactive([
      {
        name: 'modeKey',
        required: true,
        label: '機型',
        align: 'left',
        field: 'modeKey',
        style: 'border-right: 1em #f5f5f5 solid; border-bottom-style: dashed; font-size: 1.1em; color: #293241;'
      },
      {
        name: 'modeValue',
        align: 'left',
        label: undefined,
        field: 'modeValue',
        style: 'border-left: 1em #f5f5f5 solid; border-bottom-style: dashed; font-size: 1.1em; color: #616161;'
      }
    ])
    const updateTable = (btnModes) => {
      const modeSelected = (() => btnModes.find(elem => elem.selected).label)()
      const productSelected = route.params.productSelected
      columns[1].label = modeSelected
      rows.splice(0, rows.length, ...Object.values(specificationsState.value[productSelected][modeSelected]))
    }

    watch(() => props.btnModes, (value) => {
      updateTable(value)
    }, { immediate: true })

    return {
      columns,
      rows,
      loading,
      pagination,
      isTableDense
    }
  }
}
</script>

<style lang="scss" scoped>
  .table {
    background-color: transparent;
  }

  .TopWrap {
    width: 100%;
  }

  .header, .btn-mode {
    width: 100%;
  }
  // // min-width of tablet
  @media screen and (min-width: 768px) {
    .header {
      width: 40%;
    }
    .btn-mode {
      width: 60%;
    }
  }

  .bg-btn-on-color {
    background: $major-font-color;
  }
  .bg-btn-off-color {
    background: $major-color;
  }

  .table-header {
    background-color: $minor-font-color;
    width: 50%;
    border: 1px $major-bgColor solid;
    font-size: 1.1em;
  }
  th:nth-child(1) {
    border-right: 1em $major-bgColor solid;
  }
  th:nth-child(2) {
    border-left: 1em $major-bgColor solid;
  }
</style>
