const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()
const router = express.Router()

const dotenv = require('dotenv')
dotenv.config()

// Carregando o BD
mongoose.connect(process.env.GN_DB_URI)

// Carregando models
const Product = require('./models/product')
const User = require('./models/user')
const Order = require('./models/order')

// Carregando rotas
const indexRoutes = require('./routes/index-route')
const productRoutes = require('./routes/product-route')
const userRoutes = require('./routes/user-route')
const ordersRoutes = require('./routes/orders-route')

app.use(cors())
app.use(express.json())

app.use('/', indexRoutes)
app.use('/product', productRoutes)
app.use('/user', userRoutes)
app.use('/orders', ordersRoutes)

module.exports = app