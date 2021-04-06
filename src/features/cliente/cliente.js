const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const ClienteSchema = new Schema({
    nome: {
        type: String,
        require: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    documento: {
        type: Number,
        required: true,
        minlength: 11,
        maxlength: 14,
        unique: true
    },
    celular: {
        type: Number,
        required: true,
        minlength: 13,
        maxlength: 13,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true
    },
    endereco: {
        cep: {
            type: Number,
            default: '0',
            minlength: 8,
            maxlength: 8  
        },
        rua: {
            type: String,
            default: 'n/a',
            minlength: 3,
            maxlength: 50
        },
        numero: {
            type: Number,
            default: '0',
            minlength: 1,
            maxlength: 50
        },
        bairro: {
            type: String,
            default: 'n/a',
            minlength: 3,
            maxlength: 50
        },
        cidade: {
            type: String,
            default: 'n/a',
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            default: 'NA',
            minlength: 2,
            maxlength: 2
        }
    },
    cadastrado: {
        type: Date,
        default: Date.now
    }
});

ClienteSchema.plugin(mongoosePaginate);
const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;