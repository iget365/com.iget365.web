import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import router from './router/login'
import Login from './view/Login'

Vue.prototype.$http = axios
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  template: '<Login />',
  components: { Login }
})
