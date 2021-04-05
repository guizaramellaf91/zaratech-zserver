const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new Schema({
    nome: {
        type: String,
        require: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    sobrenome: {
        type: String,
        require: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    documento: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 11,
        unique: true
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true
    },
    endereco: {
        bairro: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        cidade: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);
const Usuario = mongoose.model('Usuario', UserSchema);
module.exports = Usuario;