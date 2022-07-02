const mongoose = require('mongoose')
const User = mongoose.model('User')
const ValidatorContract = require('../validators/fluent-validator')
const repository = require('../repositories/user_repository')

exports.get = (req, res, next) => {
    repository.get()
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
}

exports.getById = (req, res, next) => {
    repository.getById(req.params.id)
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
} 

exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body)
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

    repository.create(req.body)
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
    User.
    findOneAndRemove(req.params.id)
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