const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

module.exports = () => {
    console.log('[zserver] Criando um novo servidor! ...');
    app.use(express.json());
    app.use(cors());
    mongoose.connect('mongodb://localhost:27017/zaratech', { useNewUrlParser: true });
    requireDir('../models');
    app.use('/zserver', require('../routes/routes'));
    app.listen(3001);
}