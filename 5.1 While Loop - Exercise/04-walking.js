function walking(arg) {
  let steps = 10000
  let allSteps = arg.filter(el => Number(el)).reduce((a, b) => +a + +b) - steps
  return allSteps < 0 ? `${Math.abs(allSteps)} more steps to reach goal.` :
    `Goal reached! Good job!\n${allSteps} steps over the goal!`
}

//console.log(walking(['1000','1500','2000','6500']))