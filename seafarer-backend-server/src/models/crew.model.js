var dbconnect = require('../config/database.config')

var crewData = (crewData)=>{
    this.crewData = crewData
}

//Get all ship data
crewData.getAllCrewData = (result)=>{
    dbconnect.query('SELECT * FROM shipcrews', (err,res)=>{
        if(err){
            console.log('Error connecting to database')
            result(null,err)
        }else{
            console.log('Fetching data success...')
            result(null,res)
        }
    })
}

module.exports = crewData