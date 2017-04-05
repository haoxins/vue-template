
process.env.NODE_ENV = 'development'

const config = require('./webpack.dev')
const express = require('express')
const webpack = require('webpack')

const compiler = webpack(config)
const app = express()

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  quiet: true
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(__dirname))

app.listen(3000, err => {
  if (err) {
    return console.error(err)
  }

  console.info('Listening at http://localhost:3000')
})