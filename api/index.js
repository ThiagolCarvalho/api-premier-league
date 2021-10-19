const express = require('express')
const app = express()
const config = require('config')

app.listen(config.get('api.port'), () => console.log('API is running on port ' + config.get('api.port')))