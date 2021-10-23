function vacation(arg) {
  let holidayPrice = +arg[0]
  let budget = +arg[1]
  let countSpend = 0
  let countSave = 0

  for (let i = 2; i < arg.length; i++) {
    if (arg[i] === 'spend') {
      budget -= +arg[i + 1]
      budget < 0 ? budget = 0 : null
      countSpend++
    }

    if (arg[i] === 'save') {
      budget += +arg[i + 1]
      countSave++
    }
  }

  days = Math.abs(countSave + countSpend)

  return budget < holidayPrice ?
    `You can't save the money.\n${days}` :
    `You saved the money for ${days} days.`
}

//console.log(vacation([ '2000',  '1000', 'spend', '1200', 'save', '2000',]))