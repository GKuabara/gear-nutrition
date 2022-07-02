const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    CPF: {
        type: String,
        required: true,
        minLength: 14,
        maxLength: 14,
        unique: true
    },
    number: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String
    },
    CEP: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 2
    },
    telephone: {
        type: String,
        required: true
    },
    cart: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        qtt: { type: Number, required: true, default: 1 }
    }]
})

module.exports = mongoose.model('User', schema)