
// // // // // IMPORTS // // // // //

const express = require('express')
require('dotenv').config()
const massive = require('massive')
const { json } = require('body-parser')
const app = express()
const controller = require('./controller')


// // // // // MIDDLEWARE // // // // //

app.use(json())
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err))


// // // // // ENDPOINTS // // // // // 

app.get(`/api`, controller.get)
app.post(`/api`, controller.create)
app.put(`/api`, controller.update)
app.delete(`/api`, controller.delete)


// // // // // SERVER MAGIC // // // // //

const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`${port} is werkin heckin hard`))