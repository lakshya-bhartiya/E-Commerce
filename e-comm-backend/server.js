const express = require("express")
const bodyParser = require('body-parser')
require("./config/db")
require("dotenv").config()
const Router = require("./api/src/route")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", Router)
const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`The server is started on port: ${PORT}`)
})