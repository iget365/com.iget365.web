import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router/login'
import Login from './view/Login'
import ajax from './common/ajax'
import '../css/reset.css'
import '../css/lib/element-ui.css'

// Vue.config.productionTip = false
Vue.prototype.$http = ajax
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  template: '<Login />',
  components: { Login }
})
