export default {
  datetime (val) {
    if (!val) {
      return ''
    }

    const dt = new Date(val)
    const year = dt.getFullYear()
    const month = dt.getMonth() + 1
    const day = dt.getDate()
    const hour = dt.getHours()
    const minute = dt.getMinutes()
    const second = dt.getSeconds()

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  },
  updateTitle (title = '', id) {
    return (id ? '修改' : '增加') + title
  },
  ellipsis (content = '', length = 0) {
    const contentLength = content.length.toString()

    if (contentLength > length) {
      content = content.substr(0, length) + '...'
    }

    return content
  },
  breakline (val = '') {
    return val.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\s/g, ' ')
  }
}
