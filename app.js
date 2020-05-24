'use strict'

var express = require('express')
var app = express()

const insurance = require('./functions/insurance')

// view engine setup
app.use(express.json())

app
  .get('/', (req, res) => insurance.allDaysJson(req, res))

module.exports = app
