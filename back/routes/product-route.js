const express = require('express')
const router = express.Router()
const controller = require('../controllers/prod_controller')

router.get('/', controller.get)
router.put('/:key', controller.put)
router.post('/', controller.post)
router.delete('/:key', controller.delete)

module.exports = router;