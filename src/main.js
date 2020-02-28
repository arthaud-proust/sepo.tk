import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './app.vue'
import router from './router.js'
import store from './store/index'
import Vuetify from 'vuetify'
import VueSVGIcon from 'vue-svgicon'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(VueClipboard)
Vue.use(VueSVGIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title ? to.meta.title : from.meta.title}`
//   next()
// })

router.afterEach((to) => {
  // document.title = `${to.meta.title ? to.meta.title : from.meta.title}`
  document.title = `${to.meta.title}`
})
