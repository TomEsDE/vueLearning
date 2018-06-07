import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 17,
    users: [],
    activePage: 0
  },
  actions: {
    setUsers: function ({ commit, state }, users) {
      commit('setUsers', users)
    },
    setActivePage: function ({ commit, state }, page) {
      commit('setActivePage', page)
    }
  },
  mutations: {
    setUsers: function (state, users) {
      state.users = users
    },
    setActivePage: function (state, page) {
      state.activePage = page
    }
  },
  getters: {},
  modules: {}
})
