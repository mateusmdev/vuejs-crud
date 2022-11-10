const express = require('express')
const app = express()
const cors = require('cors')

app.use('/uploads', express.static(__dirname + '/uploads'))

const userRouter = require('./src/routes/user.js')

app.use(cors())
app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.use('/', userRouter)

module.exports = app