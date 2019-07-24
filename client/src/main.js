//import the required dependencies
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'babel-polyfill'

//import custom dependencies
import cookies from 'js-cookie'

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
import Logout from './views/logout.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

function guard(to, from, next){
  let token = auth.getToken();
  if(token === true) {
      next(); // allow to enter route
  } else{
      next('/login'); // go to '/login';
  }
}

function logout(to, from, next){
  let token = auth.getToken();
  if(token === true) {
    cookies.remove('user-m');
    next('/login'); // go to '/login';
  } else{
    next('/login'); // go to '/login';
  }
}


//setup the paths
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
    {path: '/about', beforeEnter: guard, component: About},
    { path: '/signup', component: Signup },
    {path: '/logout', beforeEnter: logout, component: Logout}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export { store };
