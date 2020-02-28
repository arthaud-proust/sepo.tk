import axios from 'axios'

const state = {
  all: [],
  loading: true
}

const mutations = {
  setCards (state, projects) {
    state.all = projects
  },
  setCardsLoading (state, loading) {
    state.loading = loading
  }
}

const actions = {
  fetchCards ({ commit }) {
    // eslint-disable-next-line
    axios.get(`https://api.sepo.tk/public/api/cards`).then (response => { commit('setCards', response.data.projects); commit('setCardsLoading', false) }).catch (e => { commit('setCardsLoading', false); this.dispatch('alert/newAlert', { type: 'error', content: e, show: true }) })
  }
}

const getters = {
  getAll: state => state.all,
  loading: state => state.loading
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
