const express = require('express')
const router = express.Router()
const controller = require('../controllers/prod_controller')
const auth = require('../service/auth')

router.get('/', controller.get)
router.get('/:name', controller.getByName)
router.put('/:key', auth.authorize, controller.put)
router.post('/', auth.isAdmin, controller.post)
router.delete('/:key', auth.isAdmin, controller.delete)

module.exports = router;