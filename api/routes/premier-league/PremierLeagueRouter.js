const router = require('express').Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json'

router.get('/', async (req, ans) => {
    try {
        await fetch(url)
            .then(res => res.json())
            .then(json => {
                ans.status(200)
                ans.send(json)
            })
    } catch(err) {
        console.log(err)
        return ans.status(500).json('Error: ' + err)
    }
})

module.exports = router