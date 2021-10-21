function racing(...arg) {
  let [fuel, fuelPerLoop, loop] = [...arg.map(Number)]
  let round = 0
  
  for (let i = 1; i < loop; i++) {
    fuel -= fuelPerLoop
    fuelPerLoop += 0.1
    round++
    if (fuel <= 0) {
      break
    }
  }

  if (fuel >= 0)
    return 'Congrats! You won the race!'
  return `You are out of fuel in round ${round}!`

}

// console.log(racing('70', '6.5', '10'))
// console.log(racing('50', '4.3', '30'))