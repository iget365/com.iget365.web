export default {
  trim (str) {
    return (str || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
  },
  copy (obj) {
    if (obj) {
      return JSON.parse(JSON.stringify(obj))
    } else {
      return null
    }
  }
}
