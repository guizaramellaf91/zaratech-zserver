const mongoose = require('mongoose');
var usuario = require('./usuario');
const db = mongoose.model('Usuario');

module.exports = {
    insert: payload => db.create(payload),
    index: payload => db.paginate(payload, { page, limit: 5 }),
    detail: payload => db.findById(payload),
    update: payload => db.findByIdAndUpdate(payload),
    delete: payload => db.findByIdAndRemove(payload)
}