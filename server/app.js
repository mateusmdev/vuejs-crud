const express = require('express')
const app = express()
const cors = require('cors')

const userRouter = require('./src/routes/user.js')
const clientRouter = require('./src/routes/client.js')

app.use(cors())
app.use(express.urlencoded( {extended: false} ))
app.use(express.json())

app.use('/', userRouter)
app.use('/', clientRouter)

module.exports = app