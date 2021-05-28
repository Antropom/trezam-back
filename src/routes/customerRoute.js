const express = require('express')
const router = express.Router()
const {
  findAll,
  findOne,
  create,
  update,
  delOne,
} = require('../controllers/customerController')
const {
  validateCustomer,
} = require('../middlewares/validator/customerValidator.js')

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', validateCustomer, create)
router.put('/:id', validateCustomer, update)
router.delete('/:id', delOne)

module.exports = router
