// Importing packages that we need
const express = require('express')
const path = require('path')

// Running express() 
const app = express()

// Middleware for being about to see the "VIEW"/Public Folder
app.use(express.static(path.join(__dirname, 'public')))
// Middleware for urls
app.use(express.urlencoded({ extended: true }))
// Middleware for JSON data
app.use(express.json())

// Putting the files from CONTROLLERS on the same level as server.js THE FILE.
app.use(require('./controllers'))

// process.env.PORT is for HEROKU to understand what PORT to use || (OR) use 3000 if no server from HEROKU
app.listen(process.env.PORT || 3000)