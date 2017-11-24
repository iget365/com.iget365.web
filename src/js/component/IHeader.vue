<template>
  <div id="IHeader" class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="header-logo">
          <img src="../../img/logo.png">
          <h1>iget365</h1>
        </div>
        <div class="header-user">
          <span class="header-user-name">您好 {{ name }}</span>
          <b class="header-user-split">|</b>
          <a href="javascript:;" class="header-user-logout" title="注销当前用户" @click="logout">注销</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ui from '../common/ui'

export default {
  name: 'IHeader',
  data () {
    return {
      name: '',
      avatar: ''
    }
  },
  methods: {
    async getUser () {
      try {
        const user = await this.$http.get('/api/user')

        this.name = user.name || ''
        this.avatar = user.avatar || ''

        localStorage.setItem('iget365userId', user.id)
      } catch (err) {
        let msg = '用户认证失败，请登录重试'

        if (err.data && err.data.msg) {
          msg = err.data.msg
        }

        ui.message({
          ctx: this,
          type: 'error',
          msg,
          duration: 1000,
          callback: () => {
            location.href = './login.html'
          }
        })
      }
    },
    async logout () {
      const token = localStorage.getItem('iget365token')
      const resetToken = () => {
        localStorage.setItem('iget365token', '')
        location.href = './login.html'
      }

      if (token) {
        try {
          await this.$http.del(`/api/public/sessions/${token}`)
          resetToken()
        } catch (err) {
          resetToken()
        }
      } else {
        resetToken()
      }
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style scoped>
  .header {
    padding: 7px 0;
    background-color: #FFF;
    margin-bottom: 15px;
    color: #353535;
    border-bottom: 1px solid #E6EBF5;
  }
  .header-wrap {
    display: flex;
    justify-content: space-between;
  }
  .header-logo img {
    width: 50px;
    vertical-align: middle;
    margin-right: 15px;
  }
  .header-logo h1 {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
  }
  .header-user {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .header-user-name {
    margin-right: 15px;
  }
  .header-user-split {
    color: #A6A6A6;
  }
  .header-user-logout {
    margin-left: 15px;
    text-decoration: none;
    color: #353535;
  }
  .header-user-logout:hover {
    color: #409EFF;
  }
</style>
