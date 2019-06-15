/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router'
import store from './store/store'

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

Vue.axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=682d1170&s='


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
