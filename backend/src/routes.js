const { Router } = require('express')

const UserController = require('./controllers/UserController')

const routes = Router()

routes.get('/teste', UserController.index)
routes.post('/teste', UserController.store)
routes.put('/teste', UserController.update)

module.exports = routes