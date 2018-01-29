import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-type'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
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
    [types.LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
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
    }
  },
  actions: {
    login ({ commit }, creds) {
      commit(types.LOGIN)
      return axios.post('http://localhost:8081/login', creds)
    },
    logout ({ commit }) {
      commit(types.LOGOUT)
    }
  }
})
