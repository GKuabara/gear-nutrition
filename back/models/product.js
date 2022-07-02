const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    series: {
        type: String,
        required: true
    },
    img: {
        type: String, 
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Product', schema)