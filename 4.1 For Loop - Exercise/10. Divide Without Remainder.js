function divisionWithoutRemainder(arg) {
  let [n, p1, p2, p3] = [+arg[0], 0, 0, 0]

  for (let i = 1; i <= n; i++) {
    testNum = +arg[i]
    testNum % 2 === 0 ? p1++ : null
    testNum % 3 === 0 ? p2++ : null
    testNum % 4 === 0 ? p3++ : null
  }

  return `${(p1 / n * 100).toFixed(2)}%\n${(p2 / n * 100).toFixed(2)}%\n${(p3 / n * 100).toFixed(2)}%`
}

// console.log(divisionWithoutRemainder(["3", "3", "6", "9"]))
// console.log(divisionWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]))
