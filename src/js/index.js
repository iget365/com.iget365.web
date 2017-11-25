import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router/index'
import Index from './view/Index'
import ajax from './common/ajax'
import filter from './filter'
import '../font/css/font-awesome.min.css'
import '../css/reset.css'
import '../css/lib/element-ui.css'

// Vue.config.productionTip = false
Vue.prototype.$http = ajax
Vue.use(ElementUI, { size: 'small' })

Object.keys(filter).forEach(name => {
  Vue.filter(name, filter[name])
})

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  template: '<Index />',
  components: { Index }
})
