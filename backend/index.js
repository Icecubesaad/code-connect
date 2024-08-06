const express = require('express')
const app = express()
require("dotenv").config();
const DB = require("./utils/database")
DB()
app.use(express.json())
app.use("/api/get",require("./routes/GET"))
app.use("/api/post",require("./routes/POST"))
app.listen(4000,()=>{
    console.log('server is up and running')
})