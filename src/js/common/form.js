import ui from './ui'
import util from '../util'

export default {
  async createOrUpdate (ctx, resourceName) {
    const { method, url } = util.parseUpdateUrlAndMethod(ctx.id, '/api/' + resourceName)
    let msg = ''

    try {
      ctx.loading = true
      await ctx.$http[method](url, ctx.form)
      ctx.loading = false

      msg = '操作成功，页面正在跳转中...'

      ui.message({
        ctx,
        type: 'success',
        msg,
        duration: 1000,
        callback: () => {
          ctx.$router.push({'name': resourceName})
        }
      })
    } catch (err) {
      ctx.loading = false

      msg = '操作失败，请刷新重试'

      if (err.data && err.data.msg) {
        msg = err.data.msg
      }

      if (err.data && err.data.errors) {
        msg = util.parseObj2Text(err.data.errors)
      }

      ui.message({
        ctx: ctx,
        type: 'error',
        msg,
        duration: 2500
      })
    }
  },
  async getById (ctx, url, id) {
    if (id) {
      try {
        ctx.form = await ctx.$http.get('/api/' + url + '/' + ctx.id)
      } catch (err) {
        let msg = '获取资源详细信息失败，请刷新重试'

        if (err.data && err.data.msg) {
          msg = err.data.msg
        }

        if (err.data && err.data.errors) {
          msg = util.parseObj2Text(err.data.errors)
        }

        ui.message({
          ctx: ctx,
          type: 'error',
          msg,
          duration: 2500
        })
      }
    }
  }
}
