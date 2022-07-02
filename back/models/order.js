const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema ({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    orders: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Orders', schema)