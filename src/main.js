import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import router from './router'
import _ from 'lodash'; 

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Object.defineProperty(Vue.prototype, '$localServer', { value: 'http://127.0.0.1:8000/node_listener/' })

Object.defineProperty(Vue.prototype, '$_', { value: _ });

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//If render function is present in the Vue option, the template will be ignored.
new Vue({
    vuetify,
    router,
    el:'#app',
    mounted() {
      this.$router.push('/')
    },
    render: h => h(App) 
})
