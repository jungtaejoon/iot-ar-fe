<template>
  <div class="row border-bottom">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" @click="document.body.classList.toggle('mini-navbar')">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <span id="loginMember">사원</span> 님
          <span class="m-r-sm text-muted welcome-message">관리자 페이지에 오신 것을 환영합니다.</span>
        </li>
        <li>
          <a id="logout-btn">
            <i class="fa fa-sign-out"></i> 로그아웃
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import types from '../store/mutation-type'
export default {
  data () {
    return {
      types,
      document
    }
  }
}
</script>

<style scoped>

</style>
