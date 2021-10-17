function shopping([budget, videoCardsCount, processorsCount, ramCount]) {
  let video = videoCardsCount * 250
  let cpu = video * 0.35 * processorsCount
  let ram = video * 0.1 * ramCount
  let sum = video + cpu + ram

  videoCardsCount > processorsCount ? sum *= 0.85 : null
  let total = Math.abs(sum - budget)

  if (budget >= sum)
    return `You have ${total.toFixed(2)} leva left!`
  return `Not enough money! You need ${total.toFixed(2)} leva more!`
}

// console.log(shopping(["920.45", "3", "1", "1"]))