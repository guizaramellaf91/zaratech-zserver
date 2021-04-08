const keys = require('../../_config/keys');
const Usuario = require('./usuario');
const jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {
    Usuario.findOne({
        login: req.body.login,
        senha: req.body.senha
    }).then(function(u) {
        console.log('usuario ' + u.nome + ' autenticado!');
        res.send({token: jwt.sign({ email: u.email }, keys.jsonkey)});
    }).catch(next);
};

exports.create = function (req, res, next) {
    Usuario.create(req.body).then(function (u) {
        console.log('usuario ' + u.nome + ' cadastrado com exito!');
        res.send(u);
    }).catch(next);
};

exports.all = function (req, res, next) {
    Usuario.find({}).then(function (u) {
        console.log(u.length + ' registro(s).');
        res.send(u);
    }).catch(next);
};

exports.details = function (req, res, next) {
    Usuario.findOne({ _id: req.params.id }).then(function (u) {
        console.log('dados cadastrais de ' + u.nome);
        res.send(u);
    }).catch(next);
};

exports.update = function (req, res, next) {
    Usuario.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Usuario.findOne({ _id: req.params.id }).then(function (u) {
            console.log('usuario ' + u.nome + ' atualizado!');
            res.send(u);
        });
    }).catch(next);
};

exports.delete = function (req, res, next) {
    Usuario.findByIdAndRemove({ _id: req.params.id }).then(function (u) {
        console.log('usuario ' + u.nome + ' deletado!');
        res.send(u);
    }).catch(next);
};