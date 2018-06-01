const compression = require('compression')
const express = require('express')
const path = require('path')

const app = express()

app.use(compression())
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '..', '..', 'static')))

module.exports = {
  app
}
