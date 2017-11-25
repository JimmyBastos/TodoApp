const port = 3003
const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const app = express()

const allowCors = require('./cors')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(allowCors)

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`)
})

module.exports = app
