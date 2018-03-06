import Vue from 'vue'
import App from './App'

import { sync } from 'vuex-router-sync'
import is from 'is_js'
import router from '@router'
import store from '@store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
