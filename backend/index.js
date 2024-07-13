const express = require('express')
const app = express()
require("dotenv").config();
const DB = require("./utils/database")
DB()
app.listen(4000,()=>{
    console.log('server is up and running')
})