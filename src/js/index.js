import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router/index'
import Index from './view/Index'
import ajax from './common/ajax'
import '../css/reset.css'
import '../css/lib/element-ui.css'

Vue.prototype.$http = ajax
Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  template: '<Index />',
  components: { Index }
})
