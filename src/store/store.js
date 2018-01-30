import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-type'
import axios from 'axios'
import VueJWT from 'vuejs-jwt'
import JWTDecode from 'jwt-decode'

Vue.use(Vuex)
Vue.use(VueJWT, {storage: 'cookie', keyName: 'JWTAuth'})

export default new Vuex.Store({
  state: {
    isLoggedIn: !!Vue.$jwt.getToken() && JWTDecode(Vue.$jwt.getToken()).exp * 1000 - new Date().getTime() > 0,
    sessionRemainTime: 0,
    refreshInterval: {},
    preloader: true,
    connectedUser: {
      username: '',
      password: '',
      name: '',
      memberRole: ''
    },
    leftOpen: true,
    currentPageMeta: {}
  },
  mutations: {
    [types.ROUTE_CHANGE] (state, loader) {
      if (loader === 'start') {
        state.preloader = true
      } else if (loader === 'end') {
        state.preloader = false
      }
    },
    [types.LOGIN] (state) {
      state.pending = true
    },
    [types.REFRESH_LOGIN_STATE] (state) {
      state.sessionRemainTime = JWTDecode(Vue.$jwt.getToken()).exp * 1000 - new Date().getTime()
      state.isLoggedIn = state.sessionRemainTime > 0
      state.pending = false
    },
    [types.LOGOUT] (state) {
      state.isLoggedIn = false
    },
    [types.TOGGLE_LEFT_SIDE] (state) {
      state.leftOpen = !state.leftOpen
    },
    [types.LEFT_SIDE] (state, value) {
      state.leftOpen = value
    },
    [types.SET_CURRENT_PAGE_META] (state, value) {
      state.currentPageMeta = value
    },
    [types.SET_REFRESH_INTERVAL] (state, value) {
      state.refreshInterval = value
    },
    [types.CLEAR_REFRESH_INTERVAL] (state) {
      clearInterval(state.refreshInterval)
    }
  },
  actions: {
    login ({ commit }, creds) {
      commit(types.LOGIN)
      return axios.post('/login', creds)
    }
  }
})
