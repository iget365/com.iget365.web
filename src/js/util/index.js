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
  },
  parseObj2Text (obj = {}) {
    let txt = ''

    Object.keys(obj).forEach(key => {
      txt += obj[key] + '\n'
    })

    return txt
  },
  parseUpdateUrlAndMethod (id = '', url) {
    let method = 'post'

    if (id) {
      method = 'patch'
      url += '/' + id
    }

    return { method, url }
  }
}
