const express = require('express')
const router = express.Router()

const individualCrewController = require('../controllers/individual.crew.controller')

router.use('/:id', individualCrewController.getIndividualCrewList)

module.exports = router