import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const changeMenu = {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    collapseChange(state, isActive) {
      state.isCollapse = isActive
    }
  }
}


export default new Vuex.Store({
  modules: {
    changeMenu
  }
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
