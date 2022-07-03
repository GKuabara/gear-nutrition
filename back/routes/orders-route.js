const express = require('express')
const router = express.Router()
const controller = require('../controllers/orders_controller')
const auth = require('../service/auth')

router.get('/', controller.get)
router.post('/', controller.post)

module.exports = router;