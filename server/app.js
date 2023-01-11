const express = require("express")
const app = express()
const ProductRoute = require("./src/routes/api")

//BODYPARSER EXPRESS MIDDLEWARE-> to process JSON DATA
var bodyParser = require('body-parser')

// const dotenv = require('dotenv')

// JSON MIDDLEWARE
app.use(bodyParser.json());

// DATABASE CONNECTION
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err.toString())
})

//api route
app.use('/api',ProductRoute)

module.exports = app;