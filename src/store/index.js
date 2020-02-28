import Vue from 'vue'
import Vuex from 'vuex'
import jwt from './modules/jwt'
import alert from './modules/alert'
import projects from './modules/projects'
import subjects from './modules/subjects'
import contacts from './modules/contacts'
import theme from './modules/theme'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    jwt,
    alert,
    projects,
    subjects,
    contacts,
    theme
  },
  strict: debug
})
