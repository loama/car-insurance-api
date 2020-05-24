function createProduct (type, sellIn, price) {
  return {
    type: type,
    sellIn: sellIn,
    price: price
  }
}

let products = []

const days = 30

function reducePrice (product) {
  let amount = 1
  if (product.sellIn <= 0) {
    amount = 2
  }

  if (product.price > 0) {
    product.price = product.price - amount
  } else {
    product.price = 0
  }
}

function increasePrice (product) {
  if (product.price < 50) {
    product.price = product.price + 1
  }
}

function reduceSellIn (product) {
  product.sellIn = product.sellIn - 1
}

function updateProducts () {
  const updatedProducts = JSON.parse(JSON.stringify(products))

  for (let i = 0; i < products.length; i++) {
    const product = products[i]

    // rules
    switch (product.type) {
      case 'Full Coverage':
        increasePrice(product)
        reduceSellIn(product)
        break

      case 'Mega Coverage':
        // always the same
        break

      case 'Special Full Coverage':
        increasePrice(product)

        if (product.sellIn <= 10) {
          increasePrice(product)
        }

        if (product.sellIn <= 5) {
          increasePrice(product)
        }

        if (product.sellIn === 0) {
          product.price = 0
        }

        reduceSellIn(product)
        break

      case 'Super Sale':
        reduceSellIn(product)
        reducePrice(product)
        reducePrice(product)
        break

      default:
        reduceSellIn(product)
        reducePrice(product)
    }
  }
  return updatedProducts
}

function allDays (req, res) {
  const daysPrices = []

  for (let i = 0; i < days + 1; i++) {
    daysPrices.push(updateProducts())
  }

  return daysPrices
}

function initProducts () {
  products = [
    createProduct('Medium Coverage', 10, 20),
    createProduct('Full Coverage', 2, 0),
    createProduct('Low Coverage', 5, 7),
    createProduct('Mega Coverage', 0, 80),
    createProduct('Mega Coverage', -1, 80),
    createProduct('Special Full Coverage', 15, 20),
    createProduct('Special Full Coverage', 10, 49),
    createProduct('Special Full Coverage', 5, 49),
    createProduct('Super Sale', 3, 6)
  ]
}

function allDaysFormattedResult () {
  initProducts()
  const result = allDays()

  for (let i = 0; i < result.length; i++) {
    console.log('-------- day ' + i.toString() + ' --------')
    console.log('name, sellIn, price')
    for (let j = 0; j < result[i].length; j++) {
      console.log(result[i][j].type + ', ' + result[i][j].sellIn.toString() + ', ' + result[i][j].price.toString())
    }
    console.log('')
  }
}

function allDaysJson (req, res) {
  initProducts()
  res.send(allDays())
}

module.exports = { allDaysFormattedResult, allDaysJson }
