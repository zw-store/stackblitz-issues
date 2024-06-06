'use strict'
const { resolve } = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: '9999',
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
}
