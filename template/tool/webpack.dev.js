
const base = require('./webpack.base')
const merge = require('webpack-merge')
const webpack = require('webpack')

const isArray = Array.isArray

const config = merge(base, {
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
})

Object.keys(config.entry).forEach((key) => {
  const a = isArray(config.entry[key]) ? config.entry[key] : [config.entry[key]]

  config.entry[key] = [
    'webpack-hot-middleware/client?reload=true',
    ...a
  ]
})

config.plugins = [
  ...(config.plugins || []),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

module.exports = config
