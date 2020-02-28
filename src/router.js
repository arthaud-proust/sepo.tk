import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  root: '/',
  routes: [
    {
      path: '*',
      name: 'error404',
      component: () => import('@/views/pages/error/error404.vue'),
      meta: {
        title: 'Page introuvable',
        background: '3'
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/pages/about/about.vue'),
      meta: {
        title: 'Qui suis-je? - Arthaud Proust - Développeur web',
        background: '2'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/pages/login.vue'),
      meta: {
        title: 'Login',
        background: '3'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/pages/projects/projects.vue'),
      meta: {
        title: 'Mes projets - Arthaud Proust - Développeur web',
        background: '3'
      }
    },
    {
      path: '/tools/theme',
      name: 'theme-builder',
      component: () => import('@/views/pages/tools/theme/theme.vue'),
      meta: {
        title: 'Theme builder',
        background: '3'
      }
    }
  ]
})
