require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const postRoute = require('./routes/posts')
// connect to database
connectDB()
const app = express()
app.use(express.json())
app.use('/api/v1/posts', postRoute)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
