<template>
  <div id="login" class="login">
    <div class="login-intro">
      <img src="../../img/logo.png">
      <h1>iget365</h1>
      <h2>存储，同步、分享你喜欢的内容</h2>
    </div>
    <el-tabs v-model="currTabItemName" @tab-click="tabItemClick">
      <el-tab-pane label=" 用户登录 " name="signIn"></el-tab-pane>
      <el-tab-pane label=" 用户注册 " name="signUp"></el-tab-pane>
      <router-view/>
    </el-tabs>
  </div>
</template>

<script>
  import SignIn from '../component/SignIn'
  import SignUp from '../component/SignUp'

  export default {
    name: 'login',
    components: {
      SignIn,
      SignUp
    },
    data () {
      return {
        currTabItemName: ''
      }
    },
    methods: {
      tabItemClick () {
        this.$router.push({'name': this.currTabItemName})
      }
    },
    watch: { // todo go along with v-link, then delete watch $route & created
      '$route' (to, from) {
        this.currTabItemName = to.name
      }
    },
    created () {
      this.currTabItemName = this.$route.name
    }
  }
</script>

<style>
body {
  background-color: #F2F2F2;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.login {
  box-sizing: border-box;
  width: 420px;
  margin: 50px auto 0;
  padding: 20px 30px;
  border: 1px solid #E6EBF5;
  border-top: 1px solid #409EFF;
  background: #FFF;
  border-radius: 2px;
}
.login-intro {
  text-align: center;
  margin-bottom: 40px;
}
.login-intro img {
  width: 66px;
}
.login-intro h1, .login-intro h2 {
  font-weight: normal;
}
.login-intro h1 {
  font-size: 30px;
  color: #353535;
  margin-top: 10px;
}
.login-intro h2 {
  font-size: 16px;
  color: #888;
  margin-top: 15px;
}

</style>
<style scoped>
</style>
