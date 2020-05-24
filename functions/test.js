const fs = require('fs')
const output = require('./output.js').allDaysFormattedResult()

let expectedOutput = ''

console.time('Tests finished in')
console.time('Output test')

var green = '\x1b[32m'
var black = '\x1b[30m'
var red = '\x1b[31m'

fs.readFile('./expectedOutput.txt', 'utf8', function read (err, data) {
  if (err) {
    throw err
  }
  expectedOutput = data

  if (output === expectedOutput) {
    console.log(green, 'Output equals expected output')
  } else {
    console.log(red, 'not equal')
  }

  console.log(black, '')
  console.timeEnd('Output test')
  console.timeEnd('Tests finished in')
})
