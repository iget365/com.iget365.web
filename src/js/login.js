import Vue from 'vue'
import router from './router/login'
import Login from './view/Login'
import ajax from './common/ajax'
import '../css/reset.css'
import '../css/lib/element-ui.css'
import {
  Input,
  Button,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Icon,
  Loading,
  Message
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.use(Input)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Icon)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message

// Vue.config.productionTip = false
Vue.prototype.$http = ajax

/* eslint-disable no-new */
new Vue({
  el: '#login',
  router,
  template: '<Login />',
  components: { Login }
})
