const express = require('express')
const router = express.Router()
const {
  findAll,
  findOne,
  create,
  update,
  delOne,
} = require('../controllers/customerController')

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', delOne)

module.exports = router
