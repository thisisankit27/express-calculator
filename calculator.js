const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Open cURL')
})

app.get('/add/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 + num2).toString()
  res.send("\n\nAnswer: " + sum + "\n")
})

app.get('/subtract/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var difference = (num1 - num2).toString()
  res.send("\n\nAnswer: " + difference + "\n")
})

app.get('/multiply/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var product = (num1 * num2).toString()
  res.send("\n\nAnswer: " + product + "\n")
})

app.get('/divide/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var quotient = (num1 / num2).toString()
  res.send("\n\nAnswer: " + quotient + "\n")
})

app.listen(3000, function () {
  console.log('Server running at: http:// localhost:3000')
})
