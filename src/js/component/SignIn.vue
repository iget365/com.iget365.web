
<template>
  <div id="SignIn" class="sign-in">
    <el-form :model="form" status-icon :rules="rule" ref="form" label-width="80px">
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="form.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" v-loading.lock="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import validation from '../validation'
import util from '../util'
import ui from '../common/ui'

export default {
  name: 'SignIn',
  data () {
    const checkPhone = async (rule, value, callback) => {
      if (!validation.phone.test(value)) {
        callback(new Error('请输入有效格式的手机号'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      form: {
        phone: '',
        password: ''
      },
      rule: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const json = util.copy(this.form)
          let msg = ''

          delete json.repassword

          try {
            this.loading = true
            const session = await this.$http.post('/api/sessions', json)
            this.loading = false

            msg = '登陆成功，页面正在跳转中...'
            localStorage.setItem('iget365token', session.token)

            ui.message({
              ctx: this,
              type: 'success',
              msg,
              duration: 1500,
              callback: () => {
                location.href = './index.html'
              }
            })
          } catch (err) {
            this.loading = false

            msg = '登录失败，请刷新重试'

            if (err.data && err.data.msg) {
              msg = err.data.msg
            }

            ui.message({
              ctx: this,
              type: 'error',
              msg,
              duration: 2500
            })
          }
        } else {
          return false
        }
      })
    },
    gotoSignUp () {
    }
  }
}
</script>

<style scoped>
</style>
