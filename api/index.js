const express = require('express')
const app = express()
const config = require('config')
const cors = require('cors')

const router = require('./routes/premier-league/PremierLeagueRouter')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/api/premier-league', router)

app.listen(config.get('api.port'), () => console.log('API is running on port ' + config.get('api.port')))