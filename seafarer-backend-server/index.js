const express = require('express')
const app = express()

//Import Ship Route
const shipRoute = require('./src/routes/ship.route')

//Import Crew Route
const crewRoute = require('./src/routes/crew.route')

//Import Crew Route
const individualCrewRoute = require('./src/routes/individual.crew.route')

//Setting up server port
const port = process.env.PORT || 4000

// Root Route
app.get('/', (req, res) => {
    res.send('hello universe')
})

//Set API's
app.use('/api/ship/', individualCrewRoute)
app.use('/api/ship/', shipRoute)
app.use('/api/crew/', crewRoute)


//Listen to port
app.listen(port, () => {
    console.log("Server is now listening...")
})