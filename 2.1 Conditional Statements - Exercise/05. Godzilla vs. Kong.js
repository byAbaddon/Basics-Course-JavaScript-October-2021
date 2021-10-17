function godzilla([budget, statists, clothes]) {
    let decors = budget / 10
    let clothesSum = statists * clothes
  
    statists > 150 ? clothesSum -= clothesSum / 10 : null
    budget -= decors + clothesSum
  
    if (budget >= 0) return `Action!\nWingard starts filming with ${budget.toFixed(2)} leva left.`
    return `Not enough money!\nWingard needs ${Math.abs(budget).toFixed(2)} leva more.`
  }

//  console.log(godzilla(['20000', '120', '55.5']))