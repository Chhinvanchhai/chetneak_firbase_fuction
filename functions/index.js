
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const admin = require('firebase-admin')
admin.initializeApp()
const app = express()

app.use(express.json({
  limit: '100mb',
  extended: true
}))
app.use(cookieParser())
app.use(cors())

// omput
const connectOpenAI = require('./connection/openAI')

app.post('/chat', async (req, res) => {
  console.log(req.body.message)
  const message = await connectOpenAI(req.body.message)
  res.status(200).json({
    data: message
  })
})

exports.ai = functions.https.onRequest(app)
