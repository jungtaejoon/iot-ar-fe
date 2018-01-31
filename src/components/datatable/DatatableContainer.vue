<template>
    <b-card class="wrapper wrapper-content">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5><span id="subtitle"></span>{{listTitle}} 리스트</h5>
              <div class="ibox-tools">
                <button id="registrationBtn" class="btn btn-primary" data-condition=""
                        data-toggle="modal"
                        data-target="#inputModal">등록
                </button>
              </div>
            </div>
            <div class="ibox-content">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </b-card>
</template>

<script>

export default {
  // components: {
  //   bModal
  // },
  computed: {
    listTitle () {
      return this.$store.state.currentPageMeta.listTitle
    }
  }
}
</script>

<style>
  table.table thead th {
    vertical-align: middle;
    text-align: center;
  }

  table.table tbody td {
    vertical-align: middle;
  }

  table.table tfoot td {
    vertical-align: middle;
  }

  table.table tbody td.center {
    text-align: center;
  }
  .width84 {
    width: 84px;
  }

</style>
