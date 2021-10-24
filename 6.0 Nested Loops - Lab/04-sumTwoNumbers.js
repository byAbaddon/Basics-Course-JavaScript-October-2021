function sumTwoNumbers(arg) {
  let [first, second, magicNum] = arg.map(Number)
  let counter = 0

  for (let i = first; i <= second; i++) {
    for (let j = first; j <= second; j++) {
      counter++
      if (magicNum === i + j) {
        return `Combination N:${counter} (${i} + ${j} = ${magicNum})`
      }
    }
  }
  return `${counter} combinations - neither equals ${magicNum}`
}

// console.log(sumTwoNumbers(['1','10','5']))
//console.log(sumTwoNumbers(['88','888','1000']))