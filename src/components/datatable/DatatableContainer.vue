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
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
