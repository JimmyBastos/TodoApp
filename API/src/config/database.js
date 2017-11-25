const mongoose = require('mongoose')
const localDatabaseURL = 'mongodb://localhost/todo_app'
const databaseUrl = process.env.databaseURL || localDatabaseURL

mongoose.Promise = global.Promise

module.exports = mongoose.connect(databaseUrl, {useMongoClient: true})
