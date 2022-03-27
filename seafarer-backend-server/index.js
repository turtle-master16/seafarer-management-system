const express = require('express')
const app = express()

//Import Ship Route
const shipRoute = require('./scr/routes/ship.route')

//Setting up server port
const port = process.env.PORT || 4000

// Root Route
app.get('/', (req,res)=>{
    res.send('hello world')
})

app.use('/api/ship/', shipRoute)

//Listen to port
app.listen(port, ()=>{
    console.log("Server is now listening...")
})