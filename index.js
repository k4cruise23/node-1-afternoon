const express = require('express')
const app = express()
const SERVER_PORT = 3001
const getProducts = require('./getProducts')

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProducts)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))