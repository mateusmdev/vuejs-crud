const express = require('express')
const router = express.Router()

const controller = require('../controller/client.js')

router.get('/client', controller.findAll)

router.get('/client/:id', controller.findOne)

router.post('/client', controller.create)

router.put('/client', controller.update)

router.delete('/client', controller.delete)

module.exports = router