import axios from 'axios'

async function ajax (method, url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data || null
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (err) {
      reject(err.response)
    })
  })
}

export default {
  async head (url) {
    return ajax('GET', url)
  },
  async get (url) {
    return ajax('GET', url)
  },
  async post (url, data) {
    return ajax('POST', url, data)
  },
  async patch (url, data) {
    return ajax('PATCH', url, data)
  },
  async put (url, data) {
    return ajax('PUT', url, data)
  },
  async del (url) {
    return ajax('DELETE', url)
  }
}
