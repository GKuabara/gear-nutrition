const express = require('express')
const router = express.Router()
const controller = require('../controllers/orders_controller')
const auth = require('../service/auth')

router.get('/', auth.authorize, controller.get)
router.post('/', auth.authorize, controller.post)

module.exports = router;