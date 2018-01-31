<template>
  <div class="container-fluid login">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-10 col-sm-8 mx-auto login-form">

          <h2 class="text-center logo_h2">
            <img src="../../static/img/kepco/ar_logo.png" alt="Logo">
          </h2>
          <p></p>
          <h5 class="text-center">전력설비 스마트 점검시스템</h5>

          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-sm-12 mt-3 ">
                      <div class="form-group">
                        <validate tag="div">
                          <input v-model="model.username" name="username" id="username" type="text" required autofocus
                                 placeholder="사원ID" class="form-control"/>
                          <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">사원ID를 입력해주시기 바랍니다.</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <validate tag="div">
                          <input v-model="model.password" name="password" id="password" type="password" required
                                 placeholder="비밀번호" class="form-control" minlength="1" maxlength="10"/>
                          <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">비밀번호를 입력해주시기 바랍니다.</div>
                            <div slot="minlength">Password should be atleast 1 characters long</div>
                            <div slot="maxlength">Password should be atmost 10 characters long</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group checkbox">
                        <!--<label for="remember">-->
                          <!--<input type="checkbox" name="remember" id="remember">&nbsp; 기억하기-->
                        <!--</label>-->
                      </div>
                    </div>
                    <input type="submit" value="로그인" class="btn btn-primary btn-block mb-3"/>
                  </div>
                </vue-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueForm from 'vue-form'
import options from '../validations/validations.js'
import types from '../store/mutation-type'
import swal from 'sweetalert2'

Vue.use(VueForm, options)
export default {
  data () {
    return {
      formstate: {},
      model: {
        email: '',
        password: ''

      }
    }
  },
  methods: {
    onSubmit () {
      if (!this.formstate.$invalid) {
        this.$store.dispatch('login', {
          username: this.model.username,
          password: this.model.password
        }).then(({status, ...rest}) => {
          if (status === 200) {
            this.$store.commit(types.REFRESH_LOGIN_STATE)
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
}
</script>
<style src="../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
  .login {
    padding-top: 6.5%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
  }
</style>
