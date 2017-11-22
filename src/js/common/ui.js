export default {
  message ({ctx, msg = '', type, duration = 0, callback} = {}) {
    const $msg = ctx.$message({
      message: msg,
      type: type
    })

    setTimeout(() => {
      $msg.close()

      if (callback) {
        callback()
      }
    }, duration)

    return $msg
  }
}
