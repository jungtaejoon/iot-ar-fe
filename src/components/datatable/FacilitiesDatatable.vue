<template>
  <datatable v-bind="$data" />
</template>

<script>
import axios from 'axios'
import {queryConverter} from './query-handler-support'

export default {
  data: () => ({
    columns: [
      { title: '고유번호', field: 'serialNumber', sortable: true },
      { title: '종류', field: 'type', sortable: true },
      { title: '담당자ID', field: 'inspector-username', sortable: true },
      { title: '사업소코드', field: 'businessCode', sortable: true }
    ],
    data: [],
    total: 0,
    query: {limit: 20, sort: 'serialNumber'},
    apiPath: '/api/facilities/pageable'
  }),
  watch: {
    query: {
      handler (query) {
        axios.get(this.apiPath + '?' + queryConverter(query)).then(({data}) => {
          data.list.map(row => {
            row['inspector-username'] = row.inspector.username
          })
          this.data = data.list
          this.total = data.total
        })
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
