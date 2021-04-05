const Usuario = require('./usuario');

exports.create = function (req, res, next) {
    Usuario.create(req.body).then(function (u) {
        console.log('Usuário ' + u.nome + ' cadastrado com êxito!');
        res.send(u);
    }).catch(next);
};

exports.all = function (req, res) {
    Usuario.find({}).then(function (u) {
        console.log('Quantidade de cadastros: ' + u.length);
        res.send(u);
    });
};

exports.details = function (req, res) {
    Usuario.findOne({ documento: req.params.id }).then(function (u) {
        console.log('Dados cadastrais de ' + u.nome);
        res.send(u);
    });
};

exports.update = function (req, res, next) {
    Usuario.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Usuario.findOne({ _id: req.params.id }).then(function (u) {
            res.send(u);
        });
    }).catch(next);
};

exports.delete = function (req, res, next) {
    Usuario.findByIdAndRemove({ _id: req.params.id }).then(function (u) {
        console.log('Usuário ' + u.nome + ' deletado!');
        res.send(u);
    }).catch(next);
};