
const state = {
  alerts: []
}

const mutations = {
  addAlert (state, alert) {
    if (state.alerts.length >= 2) {
      state.alerts.shift()
    }
    state.alerts.push(alert)
  },
  resetAlert (state) {
    state.alerts = []
  }
}

const actions = {
  newAlert ({ commit }, { type, content }) {
    commit('addAlert', { 'type': type, 'content': content, 'show': true })
  },
  resetAlert ({ commit }) {
    commit('resetAlert')
  }
}

const getters = {
  alerts: state => state.alerts
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
