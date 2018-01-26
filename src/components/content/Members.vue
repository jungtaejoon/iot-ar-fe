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
            <div id="mainTable" class="table-responsive">
              <table class="datatable table" width="100%">
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiPath} from './content-meta'

export default {

}
</script>

<style scoped>

</style>
