// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'

// css dependences
import 'bootstrap/dist/css/bootstrap.css'
import './assets/icons/css/open-iconic-bootstrap.css'
import './styles/utilities/_utilities.scss'

// js dependences
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery-maskmoney/dist/jquery.maskMoney.js'

Vue.use(Vuex)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
