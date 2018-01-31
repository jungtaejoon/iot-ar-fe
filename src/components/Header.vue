<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="navbar-collapse">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary"
           @click="document.body.classList.toggle('mini-navbar')">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <span id="loginMember">{{loggedInMember.name}}</span> [{{loggedInMember.memberRole}}]님
        </li>
        <li>
          <span class="m-r-sm text-muted welcome-message">관리자 페이지에 오신 것을 환영합니다.</span>
        </li>
        <li>
          <span>세션 잔여 시간 {{sessionRemainTime}} </span>
        </li>
        <li>
          <a id="logout-btn" @click="logout">
            <i class="fa fa-sign-out"></i> 로그아웃
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import types from '../store/mutation-type'
import axios from 'axios'
import moment from 'moment'
import 'moment-duration-format'
import JWTDecode from 'jwt-decode'

export default {
  created () {
    axios.get('/api/members/' + this.$cookie.get('loginMemberId')).then(({data}) => (this.loggedInMember = data))
  },
  data () {
    return {
      loggedInMember: {},
      document,
      moment,
      JWTDecode
    }
  },
  methods: {
    logout () {
      this.$cookie.delete('JWTAuth')
      this.$cookie.delete('loginMemberId')
      this.$store.commit(types.CLEAR_REFRESH_INTERVAL)
      this.$store.commit(types.LOGOUT)
      this.$router.push('/')
    }
  },
  computed: {
    sessionRemainTime () {
      return moment.duration(this.$store.state.sessionRemainTime).format('HH:mm:ss', {trim: false})
    }
  }
}
</script>

<style scoped>
div.navbar-collapse {
  padding-left: 15px;
  padding-top: 15px;
}
li {
  margin-top: 17px;
  margin-right: 21px;
}
a {
  cursor: pointer;
}
</style>
