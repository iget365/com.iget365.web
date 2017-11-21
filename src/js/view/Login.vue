<template>
  <div id="login" class="login">
    <div class="login-intro">
      <img src="https://iget365.yigefanqie.com/img/logo.png">
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
  import SignIn from '../component/SignIn.vue'
  import SignUp from '../component/SignUp.vue'

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
      tabItemClick (tab, e) {
        this.$router.push({'name': this.currTabItemName})
      }
    },
    created () {
      this.currTabItemName = this.$route.name || 'signIn'
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #F2F2F2;
  font-family: "Hiragino Sans GB","Microsoft YaHei",arial,sans-serif;
}
.login {
  box-sizing: border-box;
  width: 400px;
  margin: 20px auto;
  padding: 20px 30px;
  border: 1px solid #E4E4E4;
  border-top: 1px solid #409EFF;
  background: #FFF;
  border-radius: 2px;
}
.login-intro {
  text-align: center;
  margin-bottom: 20px;
}
.login-intro img {
  width: 88px;
}
.login-intro h1, .login-intro h2 {
  font-weight: normal;
}
.login-intro h1 {
  font-size: 40px;
  color: #353535;
  margin-top: 10px;
}
.login-intro h2 {
  font-size: 16px;
  color: #888;
  margin-top: 20px;
}

</style>
<style scoped>
</style>
