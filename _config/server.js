const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const app = express()

module.exports = () => {
    app.use(express.json())
    app.use(cors())

    mongoose.connect('mongodb://localhost:27017/zaratech', { useNewUrlParser: true })
    requireDir('./src/models')

    app.use('/zserver', require('./src/routes/routes'))
    app.listen(9988)
    console.log('[zserver] servidor inicializado! ...')
}