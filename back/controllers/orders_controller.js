const ValidatorContract = require('../validators/fluent-validator')

const mongoose = require('mongoose')
const Orders = mongoose.model('Orders')

exports.get = (req, res, next) => {
    let id = mongoose.Types.ObjectId(req.params.id)
    Orders.find({customer: id})
    .then(data => {
        res.status(200).send(data)
    })  
    .catch(e => {
    })
}

exports.post = (req, res, next) => {
    let orders = new Orders(req.body)
    orders.save()
    .then( () => {
            res.status(201).send({ message: "Pedido adicionado com sucesso." })
        }
    )
    .catch( e => {
        res.status(400).send({ 
            message: "Falha ao adicionar pedido.",
            data: e
        })
    }
    )
};