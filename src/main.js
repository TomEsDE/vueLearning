// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VModal from 'vue-js-modal'
import helpers from './helpers'
import 'bootstrap'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

Vue.config.productionTip = false
Vue.use(VModal)

axios.defaults.headers.common['Authorization'] = 'Bearer token-301739.38487642474'
axios.defaults.baseURL = 'api/useraccount'

const plugin = {
  install () {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helpers
  }
}

Vue.use(plugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
