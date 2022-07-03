const express = require('express')
const router = express.Router()
const controller = require('../controllers/prod_controller')
const auth = require('../service/auth')

router.get('/', controller.get)
router.put('/:key', auth.authorize, controller.put)
router.post('/', auth.authorize, controller.post)
router.delete('/:key', auth.authorize, controller.delete)

module.exports = router;