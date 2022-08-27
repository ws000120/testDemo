import Vue from "vue";
import Vuex from 'vuex'
import user from './model/index'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user: user,
  },
  state: {
    msg: false,
    detail: false,
  },
  mutations: {
    changeMsg(state, params) {
      console.log(state)
    },
    changeDetail(state, params) {
      console.log(state)
    },
  },
  // 异步
  actions: {
    changeDetail(context, params) {
      context.commit();
    },
  },
  getters: {
    getMsg(state) {
      return state.msg
    },
    getDetail(state) {
      return state.detail
    },
  }
})
