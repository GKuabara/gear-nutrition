const ValidatorContract = require('../validators/fluent-validator')
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req, res, next) => {
    Product.find({})
    .then(data => {
        res.status(200).send(data)
    })  
    .catch(e => {
        res.status(400).send(e)
    })
}

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
}

exports.getByName = (req, res, next) => {
    const name = req.params.name.trim()
    console.log(`"${name}"`)
    Product.findOne({name: { "$regex": name }})
    .then(data => {
        console.log(data)
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })
} 

exports.put = (req, res, next) => {
    const id = req.params.key
    let stock = 0
    console.log(Product.findById(id, (e, data) => {
        stock = data.stock
        Product.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                desc: req.body.desc,
                img: req.body.img,
                series: req.body.series,
                sold: req.body.sold
            }
        })
        .then(() => {
            res.status(201).send({ message: "Atualizado com Sucesso" })
        })  
        .catch(e => {
            res.status(401).send({ message: "Falha Ao Atualizar", data: e })
        })
    }))
}

exports.post = (req, res, next) => {
    let prod = new Product(req.body)
    console.log(prod)
    prod.save()
    .then( () => {
            res.status(201).send({ message: "Produto cadastrado com sucesso." })
        }
    )
    .catch( e => {
        res.status(400).send({ 
            message: "Falha ao cadastrar produto.",
            data: e
        })
    }
    )
};

exports.delete = (req, res, next) => {
    const id = req.params.key
    Product.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({ message: "Removido com Sucesso" })
    })  
    .catch(e => {
        res.status(400).send({ message: "Falha Ao Remover", data: e })
    })
}