'use strict'

module.exports = {
  dev: {
    NODE_ENV: 'development',
    host: '0.0.0.0',
    port: 9999,
    disableHostCheck: true,
    autoOpenBrowser: false,
    proxy: {
      '/api': {
        target: 'https://127.0.0.1',
        // ignorePath: true,
        prependPath: true,
        changeOrigin: true,
        secure: false
      }
    },
    devtool: 'eval-source-map',
    assetsPublicPath: '',
    html: {
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }
  },
  build: {
    NODE_ENV: 'production',
    devtool: '#source-map',
    assetsPublicPath: 'https://iget365.yigefanqie.com/assets/',
    html: {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }
  }
}
