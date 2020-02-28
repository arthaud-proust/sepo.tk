import axios from 'axios'

const state = {
  all: [],
  loading: true
}

const mutations = {
  setSubjects (state, projects) {
    state.all = projects
  },
  setSubjectsLoading (state, loading) {
    state.loading = loading
  }
}

const actions = {
  fetchSubjects ({ commit }) {
    // eslint-disable-next-line
    axios.get(`https://api.sepo.tk/api/subjects`).then (response => { commit('setSubjects', response.data.subjects); commit('setSubjectsLoading', false) }).catch (e => { commit('setSubjectsLoading', false); this.dispatch('alert/newAlert', { type: 'error', content: e, show: true }) })
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
