const user = {
  namespace: true,
  state: {
    msgA: '消息'
  },
  mutations: {
    getMsg(state) {
      state.msg = '333333';
    }
  },
  getters: {
    getMsgA(state) {
      return state.msg + '000111'
    }
  }
}
export default user
