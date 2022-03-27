var dbconnect = require('../config/database.config')

var shipData = (shipData)=>{
    this.shipData = shipData
}

//Get all ship data
shipData.getAllShipData = (result)=>{
    dbconnect.query('SELECT * FROM ship', (err,res)=>{
        if(err){
            console.log('Error connecting to database')
            result(null,err)
        }else{
            console.log('Fetching data success...')
            result(null,res)
        }
    })
}

module.exports = shipData