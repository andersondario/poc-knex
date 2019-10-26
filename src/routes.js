const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/', (req, res) => res.json({ message: 'Server working' }))

routes.get('/users', UserController.findAll)
routes.get('/users/:id', UserController.findById)

module.exports = routes;