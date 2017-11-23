export default {
  updateTitle (title = '', id) {
    return (id ? '修改' : '增加') + title
  }
}
