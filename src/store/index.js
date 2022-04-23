import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/config/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    isLogin: false,
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SET_USER: state => { state.user = auth.currentUser},
    setIsLogin: (state, changeLoginState) => { state.isLogin = changeLoginState }
  },
  actions: {
    setUser: context => { context.commit("SET_USER")}
  },
  modules: {
  }
})
