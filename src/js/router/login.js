import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'signIn'
    }
  }, {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn
  }, {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  }]
})
