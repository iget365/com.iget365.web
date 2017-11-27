import Vue from 'vue'
import router from './router/index'
import Index from './view/Index'
import ajax from './common/ajax'
import filter from './filter'
import '../css/reset.css'
import '../css/lib/element-ui.css'
import {
  Pagination,
  Menu,
  MenuItem,
  Input,
  Button,
  Table,
  TableColumn,
  Form,
  FormItem,
  Alert,
  Icon,
  Loading,
  MessageBox,
  Message
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(Pagination)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Alert)
Vue.use(Icon)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// Vue.config.productionTip = false
Vue.prototype.$http = ajax

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
