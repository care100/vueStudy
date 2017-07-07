import Vue from 'vue'
// read localStorage stored data

import 'es6-promise/auto'

// import './stored'
// locale
// import './locales'
// socket
// import './socket'

// router and store
// import store from './store'
// import router, { hook as routerHook } from './router'
// import router from './router'
// import { sync } from 'vuex-router-sync'
// sync(store, router)

// ui library
// import './element-ui'

import care from 'vue-care'

Vue.use(care)

// ajax
// import './http'

// jQuery
// window.$ = window.jQuery = require('jquery');

// const userPromise = store.dispatch('initUserInfo')
// routerHook(userPromise)

// main component
import App from './App'

const app = new Vue({
	el: 'app',
  // router,
  // store,
  render: h => h(App) // Object spread copying everything from App.vue
})

// actually mount to DOM
// app.$mount('app')
