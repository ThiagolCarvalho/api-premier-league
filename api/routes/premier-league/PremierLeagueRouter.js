const router = require('express').Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json'

router.get('/list', async (req, ans) => {
    await fetch(url)
        .then(res => res.json())
        .then(json => ans.send(json))
})

module.exports = router