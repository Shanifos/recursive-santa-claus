function deliverPresents(houses) {
  if (houses.length == 0) return
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  }
  else {
    var arrInHalf = Math.ceil(houses.length / 2)
    var santa = houses.slice(0, arrInHalf)
    var elves = houses.slice(arrInHalf)

    deliverPresents(santa)
    deliverPresents(elves)

  }
}

module.exports = deliverPresents
