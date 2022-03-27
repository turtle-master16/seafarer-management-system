// Import model
const individualCrewModel = require('../models/individual.crew.model')

exports.getIndividualCrewList = (req, res) => {
    individualCrewModel.getIndividualCrew((err, individualcrew) => {
        if (err) {
            res.send(err)
        } else {
            res.send(individualcrew)
        }
    })
}