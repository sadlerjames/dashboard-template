//import the required dependencies
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

//import custom css
import './assets/scss/custom.scss'

//import custom files
import auth from "./auth.js";

//pages
import App from './App.vue'
import Login from './views/login.vue'
import About from './views/about.vue'
import Signup from './views/signup.vue'
import Dashboard from './views/dash.vue'
import 'babel-polyfill'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

//setup the paths
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
    {
      path: '/about', component: About, async beforeEnter(to, from, next) {
        let token = auth.getToken();
        if (token === true) {
          console.log("success");
          next()
        } else {
          next({
            name: "/login" // back to safety route //
          });
        }
      
      }
    },
    { path: '/signup', component: Signup }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export { store };
