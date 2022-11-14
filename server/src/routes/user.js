const express = require('express')
const router = express.Router()
const { autorization } = require('../utils/jwtToken')

const controller = require('../controller/user.js')

router.get('/user', autorization, controller.findAll)

router.get('/user/:id', autorization, controller.findOne)

router.post('/user', autorization, controller.create)

router.put('/user', autorization, controller.update)

router.delete('/user', autorization, controller.delete)

router.post('/user/authentication', controller.authentication)

module.exports = router