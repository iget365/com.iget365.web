'use strict'
const autoprefixer = require('autoprefixer')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  extractCSS: isProd,
  preserveWhitespace: false,
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ]
}
