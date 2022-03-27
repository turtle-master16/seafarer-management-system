var dbconnect = require('../config/database.config')

var ivlcrewData = (ivlcrewData)=>{
    this.ivlcrewData = ivlcrewData;
}

ivlcrewData.getIndividualCrew = (result)=>{
    dbconnect.query('SELECT id FROM Ships', (err,res)=>{
        if(err){
            result(null,err)
        }else{
            result(null,res)
        }
    })
}

module.exports = ivlcrewData