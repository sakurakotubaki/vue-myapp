import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isLogin: false
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser: (state, setUser) => { state.user = auth.user },
    setIsLogin: (state, changeLoginState) => { state.isLogin = changeLoginState }
  },
  actions: {
    setUser: context => { context.commit('SET_USER') }
  },
  modules: {
  }
})
