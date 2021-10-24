function traveling(arg) {
  while (arg[0] !== 'End') {
    let = country = arg.shift()
    let = price = +arg.shift()
    let = money = 0
    for (let i = 0; i < arg.length; i++) {
      if (arg[i].charCodeAt() >= 65) {
        arg = arg.slice(i, )
        break
      }
      money += +arg[i]
    }

    if (price <= money) {
      console.log(`Going to ${country}!`)
    }
  }
}

//traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End'])