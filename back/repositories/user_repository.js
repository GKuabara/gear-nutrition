'use strict';

const mongoose = require('mongoose')
const User = mongoose.model('User')
const ValidatorContract = require('../validators/fluent-validator')

exports.get = () => {
    return User.find({})
}

exports.getById = (id) => {
    return User.findById(id)
} 

exports.update = (id, data) => {
    return User
    .findByIdAndUpdate(id, {
        $set: {
            name: data .name,
            email: data.email,
            password: data.password,
            admin: data.admin,
            CPF: data.CPF,
            number: data.number,
            street: data.street,
            neighborhood: data.neighborhood,
            city: data.city,
            state: data.state,
            telephone: data.telephone,
            cart: data.cart
        }
    })
}

exports.create = (data) => {
    const user = new User(data)
    return user.save()    
}

exports.delete = (id) => {
    return User.findOneAndRemove(id)
}   