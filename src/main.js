// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import types from './store/mutation-type'
import axios from 'axios'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueCookie)

router.beforeEach((to, from, next) => {
  store.commit(types.ROUTE_CHANGE, 'start')
  next()
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  store.commit(types.ROUTE_CHANGE, 'end')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
