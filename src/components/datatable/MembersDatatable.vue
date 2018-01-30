<template>
  <datatable v-bind="$data" />
</template>

<script>
import axios from 'axios'
import {queryConverter} from './query-handler-support'

export default {
  data: () => ({
    columns: [
      { title: '사용자 ID', field: 'username', sortable: true },
      { title: '이름', field: 'name', sortable: true },
      { title: '권한', field: 'memberRole', sortable: true },
      { title: '휴대전화', field: 'phoneNumber', sortable: true },
      { title: 'ACTION', tdComp: 'ActionButton', visible: true }
    ],
    data: [],
    total: 0,
    query: {limit: 20, sort: 'username'},
    apiPath: '/api/members/pageable'
  }),
  watch: {
    query: {
      handler (query) {
        axios.get(this.apiPath + '?' + queryConverter(query)).then(({data}) => {
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
