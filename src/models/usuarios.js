const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    nome: {
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
mongoose.model('Usuario', UserSchema);