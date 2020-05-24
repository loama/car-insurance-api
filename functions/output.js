const insurance = require('./insurance.js')

function allDaysFormattedResult () {
  const result = insurance.allDays()

  let output = ''

  for (let i = 0; i < result.length; i++) {
    output += ('-------- day ' + i.toString() + ' --------\n')
    output += ('name, sellIn, price\n')
    for (let j = 0; j < result[i].length; j++) {
      output += (result[i][j].type + ', ' + result[i][j].sellIn.toString() + ', ' + result[i][j].price.toString() + '\n')
    }
    if (i < result.length - 1) {
      output += '\n'
    }
  }

  return output
}

console.log(allDaysFormattedResult())

module.exports = { allDaysFormattedResult }
