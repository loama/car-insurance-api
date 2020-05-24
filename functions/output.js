const insurance = require('./insurance.js')

function allDaysFormattedResult () {
  const result = insurance.allDays()

  for (let i = 0; i < result.length; i++) {
    console.log('-------- day ' + i.toString() + ' --------')
    console.log('name, sellIn, price')
    for (let j = 0; j < result[i].length; j++) {
      console.log(result[i][j].type + ', ' + result[i][j].sellIn.toString() + ', ' + result[i][j].price.toString())
    }
    console.log('')
  }
}

allDaysFormattedResult()
