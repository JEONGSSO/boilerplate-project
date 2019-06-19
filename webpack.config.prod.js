const Merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = Merge(baseConfig, {
   mode: 'production'
})