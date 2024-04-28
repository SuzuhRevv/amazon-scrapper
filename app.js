const express = require('express')
const axios = require('axios')
const jsdom = require('jsdom')

const app = express()
const port = 3000

app.get('/api/scrape', async (req, res) => {
    const keyword = req.query
    if (!keyword) throw new Error('Keyword is needed!')
    const amazonURL = `https://www.amazon.com/s?k=${keyword}`
    const resp = axios.get(amazonURL)
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})