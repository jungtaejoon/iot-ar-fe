<template>
  <div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <img src="/static/img/kepco/ar_logo.png" style="max-width: 300px; margin-top: 40px; margin-bottom: 50px;">
      </div>
      <h3><b>전력설비 스마트 점검시스템</b></h3>
      <div style="margin-top: 50px;">
        <form class="m-t" role="form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="사원ID" required="" name="username" v-model="username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="비밀번호" required="" name="password" v-model="password">
          </div>
          <button class="btn btn-primary block full-width m-b" @click.prevent="login">로그인</button>

          <a><small>비밀번호 찾기</small></a>
          <!--<p class="text-muted text-center"><small>Do not have an account?</small></p>-->
          <!--<a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>-->
        </form>
      </div>
      <p class="m-t"> <small>한국전력공사 강원지역본부 KEPCO &copy; 2017</small> </p>
      <a v-if="isLoggedIn" @click="logout">logout</a>
    </div>
  </div>
</template>

<script>
import types from '../store/mutation-type'
import swal from 'sweetalert2'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(({status, ...rest}) => {
        if (status === 200) {
          this.$store.commit(types.LOGIN_SUCCESS)
          this.$router.push('/admin/members')
        } else {
          console.log(status, rest)
          swal('오류', '로그인 과정에서 오류가 발생했습니다.', 'error')
        }
      }).catch(({response, ...rest}) => {
        console.log(response, rest)
        swal('HTTP Status Code: ' + response.data.status, response.data.message, 'error')
      })
    }
  }
}
</script>
