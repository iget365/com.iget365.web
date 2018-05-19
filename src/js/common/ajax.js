import axios from 'axios'

let expired = false

async function ajax (method, url, data, header) {
  const token = localStorage.getItem('iget365token')
  let headers = null

  if (method === 'HEAD' || method === 'GET' || method === 'DELETE') {
    headers = data
  } else if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
    headers = header
  }

  headers = headers || {}

  if (url.indexOf('/public') === -1) {
    if (!token && !expired) {
      expired = true
      alert('token已经失效，请先登录')
      location.href = './login.html'
      return
    }

    headers['x-token'] = token
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
  async head (url, header) {
    return ajax('HEAD', url, header)
  },
  async get (url, header) {
    return ajax('GET', url, header)
  },
  async post (url, data, header) {
    return ajax('POST', url, data, header)
  },
  async patch (url, data, header) {
    return ajax('PATCH', url, data, header)
  },
  async put (url, data, header) {
    return ajax('PUT', url, data, header)
  },
  async del (url, header) {
    return ajax('DELETE', url, header)
  }
}
