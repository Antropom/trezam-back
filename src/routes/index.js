const express = require('express')
const customerRoute = require('./customerRoute')
const router = express.Router()

router.use('/customers', customerRoute)

module.exports = router
