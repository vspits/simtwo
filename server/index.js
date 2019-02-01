
// // // // // IMPORTS // // // // //

const express = require('express')
require('dotenv').config()
const massive = require('massive')
const { json } = require('body-parser')
const controller = require('./controller')
const app = express()


// // // // // MIDDLEWARE // // // // //

app.use(json())
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err))


// // // // // ENDPOINTS // // // // // 

app.get(`/api/houses`, controller.getHouses)
app.post(`/api/house`, controller.createHouse)
app.delete(`/api/house/:id`, controller.deleteHouse)
// app.put(`/api`, controller.update)


// // // // // SERVER MAGIC // // // // //

const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`${port} is werkin heckin hard`))