// Import Model
const crewModel = require('../models/crew.model')

exports.getAllCrewList = (req,res)=>{
    crewModel.getAllCrewData((err,crewdata)=>{
        if(err){
            res.send(err)
        }else{
            res.send(crewdata)
        }
    })
}
