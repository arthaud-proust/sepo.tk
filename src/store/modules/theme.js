const state = {
  dark: false
}

const mutations = {
  toggle (state) {
    state.dark = !state.dark
  },
  set (state, mode) {
    state.dark = mode
  }
}

const actions = {
  toggleTheme ({ commit }) {
    commit('toggle')
  },
  setLight ({ commit }) {
    commit('set', false)
  },
  setDark ({ commit }) {
    commit('set', true)
  },
  setTheme ({ commit }, mode) {
    commit('set', mode)
  }
}

const getters = {
  darkTheme: state => state.dark
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
