import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

//import custom css
import './assets/scss/custom.scss'

//pages
import App from './App.vue'
import Login from './views/login.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/' },
    { path: '/login', component: Login },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export {store};
