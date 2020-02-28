import axios from 'axios'

const state = {
  all: [],
  loading: true
}

const mutations = {
  setContacts (state, contacts) {
    state.all = contacts
  },
  setContactsLoading (state, loading) {
    state.loading = loading
  }
}

const actions = {
  fetchContacts ({ commit }) {
    // eslint-disable-next-line
    axios.get(`https://api.sepo.tk/public/api/contacts`).then (response => { commit('setContacts', response.data.contacts); commit('setContactsLoading', false) }).catch (e => { commit('setContactsLoading', false); this.dispatch('alert/newAlert', { type: 'error', content: e, show: true }) })
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
