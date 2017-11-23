import axios from 'axios'

async function ajax (method, url, data) {
  const token = localStorage.getItem('iget365token')
  let headers = null

  if (url.indexOf('/public') === -1) {
    if (!token) {
      alert('token已经失效，请先登录')
      location.href = './login.html'
      return
    }

    headers = {
      'x-token': token
    }
  }

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      headers,
      data: data || null
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (err) {
      // todo 401
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
