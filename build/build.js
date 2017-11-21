'use strict'
process.env.NODE_ENV = 'production'

const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

rm(path.resolve(__dirname, '../dist'), err => {
  if (err) {
    throw err
  }

  webpack(webpackConfig, (error, stats) => {
    if (error) {
      throw error
    }

    if (stats.hasErrors()) {
      console.log('Build failed with errors.')
      process.exit(1)
    }

    console.log('Build complete.')
  })
})
