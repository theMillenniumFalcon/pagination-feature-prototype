require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB = require('./config/db')
// connect to database
connectDB()
const app = express()

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
