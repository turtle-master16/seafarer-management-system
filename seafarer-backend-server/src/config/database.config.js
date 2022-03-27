const mysql = require('mysql2')

//My SQL connection
const dbconnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'seaferrers',
})

dbconnect.connect((err)=>{
    if(err) throw err
    console.log("Connected with the Database")
})

module.exports = dbconnect