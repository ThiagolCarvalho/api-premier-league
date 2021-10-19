const express = require('express')
const app = express()
const config = require('config')

const router = require('./routes/premier-league/PremierLeagueRouter')
app.use('/api/premier-league', router)

app.listen(config.get('api.port'), () => console.log('API is running on port ' + config.get('api.port')))