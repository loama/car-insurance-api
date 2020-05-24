'use strict'

var express = require('express')
var app = express()
var cors = require('cors')

const insurance = require('./functions/insurance')

app
  .use(express.json())
  .use(cors())
  .get('/', (req, res) => insurance.allDaysJson(req, res))

module.exports = app
