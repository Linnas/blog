import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './components/homepage.vue'
import NewData from './components/upload.vue'
Vue.use(Router)

export default new Router({
  mode:'history', // vue router only works under 'hash' mode when operating in electron.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/new_data',
      name: 'NewData',
      component: NewData
    }
  ]
})
