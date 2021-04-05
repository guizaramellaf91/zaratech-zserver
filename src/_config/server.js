const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./../_config/routes');
const bodyParser = require('body-parser');
let port = 5000;

module.exports = () => {
    mongoose.connect('mongodb+srv://root:12345@mycluster.mzwho.mongodb.net/zaratech?retryWrites=true');
    mongoose.connection.on('connected', function () {
        console.log('Connected to database zaratech...');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Database error ' + err);
    });

    app.get('/', function (req, res) {
        res.send('END POINT INVÁLIDO!');
    });

    app.use(bodyParser.json());
    app.use('/zserver', routes)

    app.use(function (err, req, res, next) {
        console.log(err);
        res.status(422).send({ error: err.message });
    });

    app.listen(process.env.port || port, () => {
        console.log('Servidor em execução na porta: ' + port);
    });
}