<template>
  <div id="SignUp" class="sign-up">
    <el-form :model="form" status-icon :rules="rule" ref="form" label-width="80px">
      <el-form-item label="昵称" prop="name">
        <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="form.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="form.repassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" v-loading.lock="loading">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import validation from '../validation'
import util from '../util'
import ui from '../common/ui'

export default {
  name: 'SignUp',
  data () {
    const checkPhone = async (rule, value, callback) => {
      if (!validation.phone.test(value)) {
        callback(new Error('请输入有效格式的手机号'))
      } else {
        const user = await this.$http.get('/api/public/phones/' + value)

        if (user.phone) {
          callback(new Error('该手机号已经被占用'))
        } else {
          callback()
        }
      }
    }

    const checkPwd = (rule, value, callback) => {
      if (this.form.password !== value) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      form: {
        name: '',
        phone: '',
        password: '',
        repassword: ''
      },
      rule: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度至少6个字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
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
            await this.$http.post('/api/public/users', json)
            this.loading = false

            msg = '注册成功，页面正在跳转中...'

            ui.message({
              ctx: this,
              type: 'success',
              msg,
              duration: 1500,
              callback: () => {
                this.$router.push({'name': 'signIn'})
              }
            })
          } catch (err) {
            this.loading = false

            msg = '注册失败，请刷新重试'

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
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
</style>
