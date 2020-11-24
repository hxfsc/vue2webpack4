export default {
  namespaced: true,
  state: {
    num: 0
  },
  mutations: {
    addNum(state, count){
      state.num = state.num+count
    }
  },
  actions: {
    add({ commit }, count){
      commit("addNum", count)
    }
  },
  getters: {}
}
