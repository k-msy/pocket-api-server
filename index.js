// server side
// import express from 'express'
express = require('express')
// history = require('connect-history-api-fallback')
cookieParser = require('cookie-parser')
session = require('express-session')
var route = require('./routes/index')
// pocket_ctl = require('./src/controller/pocket-controller.js')

let app = express()
app.listen(9000)
// app.use(history())

// CORS回避
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Origin", "http://localhost:8081")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
// session
app.use(cookieParser())
app.use(session({
  secret: 'yoGxcnCyh8evNnG',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 60 * 60 * 1000
  }
}))
app.use(route)

console.log('server listening...')

module.exports = app;