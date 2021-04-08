const keys = require('../../_config/keys');
const Cliente = require('./cliente');
const jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {
    Cliente.findOne({
        login: req.body.login,
        senha: req.body.senha
    }).then(function(cliente) {
        console.log('cliente ' + cliente.nome + ' autenticado!');
        res.send({token: jwt.sign({ email: cliente.email }, keys.jsonkey)});
    }).catch(next);
};

exports.create = function (req, res, next) {
    Cliente.create(req.body).then(function (cliente) {
        console.log('cliente ' + cliente.nome + ' cadastrado com exito!');
        res.send(cliente);
    }).catch(next);
};

exports.all = function (req, res, next) {
    Cliente.find({}).then(function (cliente) {
        console.log(cliente.length + ' registro(s).');
        res.send(cliente);
    }).catch(next);
};

exports.details = function (req, res, next) {
    Cliente.findOne({ _id: req.params.id }).then(function (cliente) {
        console.log('dados cadastrais de ' + cliente.nome);
        res.send(cliente);
    }).catch(next);
};

exports.update = function (req, res, next) {
    Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Cliente.findOne({ _id: req.params.id }).then(function (cliente) {
            console.log('cliente ' + cliente.nome + ' atualizado!');
            res.send(cliente);
        });
    }).catch(next);
};

exports.delete = function (req, res, next) {
    Cliente.findByIdAndRemove({ _id: req.params.id }).then(function (cliente) {
        console.log('cliente ' + cliente.nome + ' deletado!');
        res.send(cliente);
    }).catch(next);
};