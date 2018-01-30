<template>
  <div class="row border-bottom">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary"
           @click="document.body.classList.toggle('mini-navbar')">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <span id="loginMember">{{loggedInMember.name}}</span> [{{loggedInMember.memberRole}}]님
          <span class="m-r-sm text-muted welcome-message">관리자 페이지에 오신 것을 환영합니다.</span>
        </li>
        <li>
          <a id="logout-btn" @click="logout">
            <i class="fa fa-sign-out"></i> 로그아웃
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import types from '../store/mutation-type'
import axios from 'axios'

export default {
  created () {
    axios.get('http://localhost:8081/api/members/' + this.$cookie.get('loginMemberId')).then(({data}) => (this.loggedInMember = data))
  },
  data () {
    return {
      loggedInMember: {},
      document
    }
  },
  methods: {
    logout () {
      this.$cookie.delete('JWTAuth')
      this.$cookie.delete('loginMemberId')
      this.$store.commit(types.LOGOUT)
      this.$router.go('/')
    }
  }
}
</script>

<style scoped>

</style>
