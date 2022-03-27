const express = require('express')
const router = express.Router()

const shipController = require('../controllers/ship.controller')

router.get('/', shipController.getAllShipList)

module.exports = router