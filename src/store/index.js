import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    status: false,
  },
  getters: {
    status: state => state.status,
    user: state => state.user,
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user
    },

    onUserLoginStatusChanged(state, status) {
      state.status = status
    }
  },
  actions: {
  },
  modules: {
  }
})
