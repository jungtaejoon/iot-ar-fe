// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import './polyfill/find'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import types from './store/mutation-type'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import vbclass from 'vue-body-class'
import Datatable from 'vue2-datatable-component'
import BootstrapVue from 'bootstrap-vue'
import 'babel-polyfill'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8081'
Vue.use(VueCookie)
Vue.use(vbclass, router)
Vue.use(Datatable)
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  store.commit(types.ROUTE_CHANGE, 'start')
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isLoggedIn) {
    next({ path: '/', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  store.commit(types.SET_CURRENT_PAGE_META, to.meta)
  store.commit(types.ROUTE_CHANGE, 'end')
  if (window.innerWidth < 992) {
    store.commit(types.LEFT_SIDE, false)
  } else {
    store.commit(types.LEFT_SIDE, true)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
