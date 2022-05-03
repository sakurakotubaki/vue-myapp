import Vue from 'vue'
import Vuex from 'vuex'

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
    setUser: (state, setUser) => { state.user = setUser },
    setIsLogin: (state, changeLoginState) => { state.isLogin = changeLoginState }
  }
})
