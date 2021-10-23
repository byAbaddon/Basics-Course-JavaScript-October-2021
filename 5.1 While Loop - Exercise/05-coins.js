function coins(arg) {
  let [money, counter] = [+arg[0], 0]
  const coins  = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

  for (const el of coins) {
    counter += ~~(money / el)
    money = (money % el).toFixed(2)
  }
  return counter
}

//console.log(coins(['2.73']))
//console.log(coins(['0.03']))




