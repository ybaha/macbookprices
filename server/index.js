const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3001

const fs = require('fs')
const fsP = require('fs').promises

const data = require('./data.js')

let prices = {}
let isFetching

const getMacbookPrice = async (country, priceStr, inchStr) => {
  isFetching = true

  const res = await axios.get(`https://www.apple.com/${country}/shop/buy-mac/macbook-pro`).catch(e => console.log("Error"))
  let data = await res.data

  if (inchStr) { // if 16 inch
    const index = data.search(inchStr) + inchStr.length
    let strr = ''
    for (i = index; data.charAt(i) !== '"'; i++) {
      let a = data.charAt(i)
      strr += a
    }
    // console.log(strr);
    const ress = await axios.get(`https://www.apple.com/${country}/shop/buy-mac/macbook-pro/${strr}`).catch(e => console.log("Error"))
    data = await ress.data
  }

  const index = data.search(priceStr) + priceStr.length + 52
  // console.log(index)
  // console.log(data.charAt(index));
  let str = ''
  for (i = index; data.charAt(i) !== '\n'; i++) {
    let a = data.charAt(i)
    str += a
  }
  isFetching = false
  console.log(str);
  return str
}

const getAllProductPrices = async () => {
  for (let c = 0; c < data.countries.length; c++) {
    let country = data.countries[c]
    prices[`${country}`] = {}
    data.products.forEach(e => {
      // console.log(prices);
      prices[`${country}`][`${Object.keys(e)}`] = {}
    })
    // console.log(prices);
    // console.log(country);
    // console.log(prices[country].mbp131);
    for (let i = 0; i < data.products.length; i++) {
      if(Object.keys(data.products[i])[0].charAt(4) === "6"){ // if 16 inch
        prices[country][Object.keys(data.products[i])] = await getMacbookPrice(country, Object.values(data.products[i]), data.sixteen)
      }
      else{
        prices[country][Object.keys(data.products[i])] = await getMacbookPrice(country, Object.values(data.products[i]))
      }
    }
    // console.log("done " + country);
  }
  let array = []
  for (let e in prices) {
    array.push({ 
      col1: e,
      col2: prices[e].mbp131, 
      col3: prices[e].mbp132,
      col4: prices[e].mbp133,
      col5: prices[e].mbp134,
      col6: prices[e].mbp161,
      col7: prices[e].mbp162,
    })
  }
  prices = array
  fsP.writeFile('prices.json', JSON.stringify(prices)).then(() => {
    console.log('done writing');
  })
  return prices
}

const checkIfPricesExists = () => {
  console.log("still fetching");
  let res
  try {
    res = fs.readFileSync('prices.json', 'utf8')
    res = true
  } catch {
    res = false
  }
  console.log(res);
  return res
}

getAllProductPrices()


app.get('/favicon.ico', (req, res) => {

})

app.get('/get', async (req, res) => {

})

app.get('/get/:id', async (req, res) => {
  let country = req.params.id

  if (data.countries.includes(country)) {
    const r1 = await getMacbookPrice(country, 'data-autom="price-MYD92"')
    const r2 = await getMacbookPrice(country, 'data-autom="price-MWP42"')
    res.send({ 1: r1, 2: r2 })
  }
  else {
    res.send("Server awakens...")
  }

})

app.get('/list', async (req, res) => {
  if (checkIfPricesExists()) {
    let data = fs.readFileSync('prices.json', 'utf8')
    res.send(JSON.parse(data))
  }
  else {
    res.send(prices)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})