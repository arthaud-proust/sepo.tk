
const state = {
  current: ''
}

const mutations = {
  setJWT (state, jwt) {
    // When this updates, the getters and anything bound to them updates as well.
    state.current = jwt
  }
}

const actions = {
  setJwt ({ commit }, token) {
    commit('setJWT', token)
  }
}

const getters = {
  jwt: state => state.current,
  jwtData: (state, getters) => state.current ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
  jwtSubject: (state, getters) => getters.jwtData ? getters.jwtData.sub : null,
  jwtIssuer: (state, getters) => getters.jwtData ? getters.jwtData.iss : null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
