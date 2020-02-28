import axios from 'axios'

const state = {
  all: [],
  loading: true
}

const mutations = {
  setProjects (state, projects) {
    state.all = projects
  },
  setProjectsLoading (state, loading) {
    state.loading = loading
  }
}

const actions = {
  fetchProjects ({ commit }) {
    // eslint-disable-next-line
    axios.get(`https://api.sepo.tk/public/api/projects`).then (response => { commit('setProjects', response.data.projects); commit('setProjectsLoading', false) }).catch (e => { commit('setProjectsLoading', false); this.dispatch('alert/newAlert', { type: 'error', content: e, show: true }) })
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
