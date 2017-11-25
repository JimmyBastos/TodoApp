const express = require('express')

module.exports = function (app) {
  const router = express.Router()
  app.use('/api', router)

  const todoService = require('../api/todo/todo-service')
  todoService.register(router, '/todos')
}
