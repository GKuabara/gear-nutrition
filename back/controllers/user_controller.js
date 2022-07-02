const mongoose = require('mongoose')
const User = mongoose.model('User')
const ValidatorContract = require('../validators/fluent-validator')

exports.get = (req, res, next) => {
    User.find({})
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
}

exports.getById = (req, res, next) => {
    User.findById(req.params.id)
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
} 

exports.put = (req, res, next) => {
    User
    .findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin,
            CPF: req.body.CPF,
            number: req.body.number,
            street: req.body.street,
            neighborhood: req.body.neighborhood,
            CEP: req.body.CEP,
            city: req.body.city,
            state: req.body.state,
            telephone: req.body.telephone,
            cart: req.body.cart
        }
    })
    .then (() => {
        res.status(201).send({
            message: "Usuario atualizado com sucesso"
        })
    }).catch (e => {
        res.status(400).send({
            message: "Falha ao atualizar usuário",
            data: e
        })
    })
}

exports.post = (req, res, next) => {
    let contract = new ValidatorContract()
    contract.isEmail(req.body.email, 'Deve ser um email válido.')
    contract.isFixedLen(req.body.CPF, 14, 'Digite um CPF válido')
    contract.isFixedLen(req.body.state, 2, 'Digite uma sigla de estado válido')
    contract.isFixedLen(req.body.telephone, 11, 'Digite um número de telefone válido, com DDD, sem parenteses e hífen')
    
    const user = new User(req.body)
    user.save()
    .then( () => {
            res.status(201).send({ message: "Usuário cadastrado com sucesso." })
    })
    .catch( e => {
        res.status(400).send({ 
            message: "Falha ao cadastrar usuário.",
            data: e
        })
    })
}

exports.delete = (req, res, next) => {
    User.findOneAndRemove(req.body.id)
    .then(x => {
        res.status(200).send({
            message: "Usuário removido"
        })
    }).catch(e => {
        res.status(400).send({
            message: "Falha ao remover usuário",
            data: e
        })
    })
}   