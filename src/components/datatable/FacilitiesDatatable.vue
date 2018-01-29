<template>
  <div class="wrapper wrapper-content">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5><span id="subtitle"></span> 리스트</h5>
            <div class="ibox-tools">
              <button id="registrationBtn" class="btn btn-primary" data-condition=""
                      data-toggle="modal"
                      data-target="#inputModal">등록
              </button>
            </div>
          </div>
          <div class="ibox-content">
            <datatable v-bind="$data" />
            <!--<div id="mainTable" class="table-responsive">-->
              <!--<table class="datatable table" width="100%">-->
              <!--</table>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../../vendors/jquery/dist/jquery.min'

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
      handler ({limit, offset, order, sort}) {
        const page = offset / limit
        const size = limit
        sort = sort + ',' + (order || 'asc')
        const obj = {
          page,
          size,
          sort
        }
        // eslint-disable-next-line
        const query = $.param(obj)
        axios.get('http://localhost:8081' + this.apiPath + '?' + query).then(({data}) => {
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
