const express = require('express')
const routeSample = require('./customerRoute')
const router = express.Router()

router.use('/customers', routeSample)

module.exports = router
