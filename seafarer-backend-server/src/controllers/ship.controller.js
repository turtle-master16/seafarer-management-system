// Import Model
const shipModel = require('../models/ship.model')

exports.getAllShipList = (req,res)=>{
    shipModel.getAllShipData((err, shipdata)=>{
        if(err){
            res.send(err)
        }else{
            res.send(shipdata)
        }
    })
}