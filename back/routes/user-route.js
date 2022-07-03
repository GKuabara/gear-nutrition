const express = require('express')
const router = express.Router()
const controller = require('../controllers/user_controller')
const auth = require('../service/auth')

router.post('/auth', controller.authenticate)
router.get('/', auth.authorize, controller.get)
router.get('/:id', auth.authorize, controller.getById)
router.put('/:id', auth.authorize, controller.put)
router.post('/', controller.post)
router.delete('/:id', auth.authorize, controller.delete)

module.exports = router;