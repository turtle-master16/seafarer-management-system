const express = require('express')
const router = express.Router()

const crewController = require('../controllers/crew.controller')

router.get('/', crewController.getAllCrewList)

module.exports = router;