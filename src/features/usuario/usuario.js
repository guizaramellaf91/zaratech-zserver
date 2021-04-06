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
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true
    },
    cadastrado: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);
const Usuario = mongoose.model('Usuario', UserSchema);
module.exports = Usuario;